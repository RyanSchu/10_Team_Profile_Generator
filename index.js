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

const engineerQuestions = [
    {
        type: 'input',
        message: 'Please enter their github:',
        name: 'github'
    }
]
const internQuestions = [
    {
        type: 'input',
        message: 'Please enter their school:',
        name: 'school'
    }
]

const followupQuestion = [
    {
        type: 'list',
        choices: ['Engineer','Intern','Finish building team'],
        name: 'choice'
    }
]

const inputManager = async () => {
    const manager = await inquirer.prompt([...generalQuestions,...managerQuestions])
    team.push(new Manager(name=manager.name,id=manager.id,email=manager.email,officeNumber=manager.number))
    askFollowup()
}

const inputEngineer = async () => {
    const engineer = await inquirer.prompt([...generalQuestions,...engineerQuestions])
    team.push(new Engineer(name=engineer.name,id=engineer.id,email=engineer.email,github=engineer.github))
    askFollowup()
}

const inputIntern = async () => {
    const intern = await inquirer.prompt([...generalQuestions,...internQuestions])
    team.push(new Intern(name=intern.name,id=intern.id,email=intern.email,school=intern.school))
    askFollowup()
}


const generateHTML = () => {
    console.log(team)
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







