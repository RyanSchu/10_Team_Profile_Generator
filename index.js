const inquirer = require ('inquirer');
const fs = require ('fs')
const Manager = require('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern')
const team = []

const generalQuestions = [
    {
        type: 'input',
        message: 'Please enter employee name:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please enter their employee ID',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Please enter their email:',
        name: 'email',
    }]

const managerQuestions = [
    {
        type: 'input',
        message: 'Please enter their office number:',
        name: 'number'
    }
]

const engineerQuestions = []
const internQuestions = []

const followupQuestion = [
    {
        type: 'list',
        choices: ['Engineer','Intern','Finish building team'],
        name: 'choice'
    }
]

const inputManager = async () => {
    manager = await inquirer.prompt([...generalQuestions,...managerQuestions])
    team.push(new Manager(name=manager.name,id=manager.id,email=manager.email,officeNumber=manager.number))
    console.log(team)
    askFollowup()
}

const inputEngineer = () => {
    console.log("engineer")
}

const inputIntern = () => {
    console.log("intern")
}


const generateHTML = () => {
    console.log("finished")
}

const askFollowup= async() => {
    choice = await inquirer.prompt(followupQuestion)
    switch (choice.choice) {
        case "Engineer":
            inputEngineer()
            break;
        case "Intern":
            inputIntern()
            break;
        case "Finish building team":
            generateHTML();
    }
}


console.log(team)
inputManager()







