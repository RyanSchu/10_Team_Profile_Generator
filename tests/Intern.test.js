const Intern = require('../lib/Intern')
describe('Intern',() => {
    it('The school is a string',() => {
        const employ = new Intern('Jonbers',5,"j0nbers@gmail.com","University of Ireland")
        expect(typeof employ.school).toEqual("string")
    })
    it('Fetches the correct github',() => {
        const school = "University of Ireland"
        const employ = new Intern('Jonbers',5,"j0nbers@gmail.com",school)
        expect(employ.school).toEqual(school)
    })
    it('Fetches the correct role',() => {
        const employ = new Intern('Jonbers',5,"j0nbers@gmail.com","University of Ireland")
        expect(employ.getRole()).toEqual('Intern')
    })
})