var rl = require('readline-sync')
const chalk = require('chalk');
var score = 0
var ch = ""

//welcome Function to welcome user
function welcome() {
    userName = rl.question(chalk.greenBright.bold("Enter Your Name : "));
    console.log(chalk.yellowBright("\n ###") + chalk.bold.blueBright(" Welcome " + chalk.redBright(userName) + " To Quiz On TELANGANA State ") + chalk.yellowBright("###"));
}

//play function to evaluate answer and update score
function play(question, answer) {
    userAnswer = rl.question(chalk.magentaBright.bold(question) + chalk.yellow.bold("\nANS:"));
    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
        console.log(chalk.green.bold("right answer!"));
        score++;
    } else {
        console.log(chalk.red.bold("wrong answer!"));
    }
    console.log(chalk.cyan.bold("Your current score : "), score, "\n")
    console.log(chalk.bold.blueBright("**************************************************************"));
}

//Array of objects(to store highscores)
var highScores = [{
            name: "charan",
            score: 8
        },
        {
            name: "kiran",
            score: 7
        }
    ]
    //Array of objects(to store questions and answers)
var questionBank = [{
        question: `
    When was Telangana formed?
      A) 01 January 2002 
      B) 02 June 2014 
      C) 01 August 1960 
      D) 31 October 1953 `,
        answer: 'B'
    },
    {
        question: `
    Who took oath as first Governor of Telangana?
      A) E.S. L. Narasimhan 
      B) Najeeb Jung 
      C) Kamla Beniwal 
      D) Sheila Dikshit  `,
        answer: 'A'
    },
    {
        question: `
    Who took oath as first Chief Minister of Telangana?
      A) N. Chandrababu Naidu 
      B) Y. S. Jaganmohan Reddy 
      C) Kalvakuntla Chandrasekhara Rao 
      D) K. Rosaiah  `,
        answer: 'C'
    },
    {
        question: `
    Which of the following dynasties ruled Telangana?
      A) Pala 
      B) Kakatiya 
      C) Sena 
      D) Chera  `,
        answer: 'B'
    },
    {
        question: `
    Which party formed Telangana’s first government?
      A) Telugu Desam 
      B) Telangana Rashtra Samiti 
      C) YSR Congress 
      D) BJP  `,
        answer: 'B'
    },
    {
        question: `
    Which of the following districts is not part of Telangana?
      A) Khammam 
      B) Nizamabad 
      C) Nellore 
      D) Adilabad  `,
        answer: 'C'
    },
    {
        question: `
    What is the state bird of Telangana?
      A) Indian Roller
      B) Peacock
      C) House Sparrow
      D) Sparrow  `,
        answer: 'A'
    },
    {
        question: `
     What is the State Animal of Telangana?
      A) Spotted deer
      B) Asian Elephant
      C) Monkey
      D) None of these `,
        answer: 'A'
    },
    {
        question: `
     What is the name of the Hyderabad international airport?
      A) Indira Gandhi International Airport
      B) Rajiv Gandhi International Airport
      C) Nehru International Airport
      D) Kakatiya International Airport  `,
        answer: 'B'
    },
    {
        question: `
     State Sport of Telangana?
      A) Hockey
      B) Kabaddi
      C) Cricket
      D) Basket Ball  `,
        answer: 'B'
    }
];

//Game function to invoke play for all the questions and answers in questionBank
function game() {
    for (var i = 0; i < questionBank.length; i++) {
        currentQuestion = questionBank[i]
        play(currentQuestion.question, currentQuestion.answer)
        if (i < questionBank.length - 1) {
            ch = rl.question(chalk.bold.redBright("\nEnter e to exit or any other key to continue:\n>"));
            console.log(chalk.bold.blueBright("\n**************************************************************\n"));
            if (ch === 'e') break;
        }
    }
}

//finalScore function to display the final function and highscores
function finalScore() {
    console.log(chalk.green.bold("\nYayyy...You have scored : ", chalk.red.bold(score), " Out of ", chalk.bold.red(questionBank.length)));
    console.log(chalk.blue.bold("\nBelow are the highscores..If you have crossed the high score ping me with screenshot.. I will update the list... :) \n"));
    console.log(chalk.yellow.bold("-------------------\n"))
    highScores.map(score => console.log(chalk.yellowBright(score.name, ":", score.score)));
    console.log(chalk.yellow.bold("\n-------------------"))
}




welcome()
game()
finalScore()