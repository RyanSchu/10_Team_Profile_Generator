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

const inputManager = async () => {
    manager = await inquirer.prompt([...generalQuestions,...managerQuestions])
    team.push(new Manager(name=manager.name,id=manager.id,email=manager.email,officeNumber=manager.number))
    console.log(team)
}



console.log(team)
inputManager()






