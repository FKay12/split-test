
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "American History",
    pages: [{
        questions: [
            {
                "type": "text",
                "name": "Can you verify the job candidate’s employment, job title, pay, and responsibilities? Why did they leave that job?"
            },
            {
                "type": "text",
                "name": "How do you know the job candidate?"
            },
            {
                "type": "text",
                "title": "What makes the candidate a good fit for this job?"
            },
            {
                "type": "text",
                "name": "question2",
                "title": "If you had the opportunity, would you re-hire this job candidate? Why?"
            },
            {
                "type": "text",
                "name": "question3",
                "title": "What are the candidate’s biggest strengths and weaknesses?"
            },
            {
                "type": "text",
                "name": "question4",
                "title": "Did the candidate get along with their co-workers and management?"
            },
            {
                "type": "text",
                "name": "question5",
                "title": "Tell me what it’s like to work with the job candidate."
            },
            {
                "type": "text",
                "name": "question6",
                "title": "What advice can you give me to successfully manage the job candidate?"
            },
            {
                "type": "text",
                "name": "question7",
                "title": "What else do I need to know about the job candidate that I didn’t already ask?"
            },
            {
                "type": "text",
                "name": "question8",
                "title": "Who else should I speak to about the candidate that can provide different insight?"
            },
        ]
    }],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.location = "singlethanks.html";
    });

$("#surveyElement").Survey({ model: survey });