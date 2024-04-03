// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [{
                type: "radiogroup",
                name: "question1",
                title: "What protective gear is NOT needed?",
                choices: [
                    "Protective Eyeglasses", "Hard hat", "Protective Jacket", "Gas mask"
                ],
                correctAnswer: "Gas mask"
            },
            {
                type: "radiogroup",
                name: "question2",
                title: "When should you NOT work?",
                choices: [
                    "In the rain", "In extreme wind", "On a sunny day", "On a cloudly day"
                ],
                correctAnswer: "In extreme wind"
            },
            {
                type: "radiogroup",
                name: "question3",
                title: "Which item should you bring to clean",
                choices: [
                    "Squeegee", "A rock", "Tap water", "Dish soap"
                ],
                correctAnswer: "Squeegee"
            },
            {
                type: "radiogroup",
                name: "question4",
                title: "What extra items are you allowed to bring up?",
                choices: [
                    "Your computer", "Your phone", "Your Ipad", "Your rubix cube"
                ],
                correctAnswer: "Your phone"
            },
            {
                type: "radiogroup",
                name: "question5",
                title: "What is a possible outcome of not following protocols?",
                choices: [
                    "Working quicker", "Nothing", "Having a fun time", "Safety Risks"
                ],
                correctAnswer: "Safety Risks"
            },
            {
                type: "radiogroup",
                name: "question6",
                title: "How should your harness fit?",
                choices: [
                    "Very loose", "Slightly loose", "Comfortably snug", "Very tight"
                ],
                correctAnswer: "Comfortably snug"
            },
            {
                type: "radiogroup",
                name: "question7",
                title: "If you suspect a malfunction in your harness you should...?",
                choices: [
                    "Continue working", "Get down safely", "Inspect in the air", "Do nothing"
                ],
                correctAnswer: "Get down safely"
            },
            {
                type: "radiogroup",
                name: "question8",
                title: "Before you begin working you should?",
                choices: [
                    "Inspect your equipment", "Just start", "Do nothing", "Setup quickly"
                ],
                correctAnswer: "Inspect your equipment"
            },
            {
                type: "radiogroup",
                name: "question9",
                title: "If your safety equipment is damaged you should...?",
                choices: [
                    "Repair equiment yourself", "Use damaged equipment", "Use no eqiupment", "Get new equipment"
                ],
                correctAnswer: ""
            },
            {
                type: "radiogroup",
                name: "question10",
                title: "If it is extremely windy outside you should...?",
                choices: [
                    "Work a different day", "Work as normal", "Try to work quickly", "Use extra saftey gear"
                ],
                correctAnswer: "Work a different day"
            }
            ];
    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Window Cleaning Safety",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Window Cleaning Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}