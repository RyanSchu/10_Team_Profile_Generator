const Engineer = require('../lib/Engineer')
describe('Engineer',() => {
    it('The github is a string',() => {
        const employ = new Engineer('Peppa',3,"B.Peppa@gmail.com","Bpep")
        expect(typeof employ.github).toEqual("string")
    })
    it('Fetches the correct github',() => {
        const git = "Bpep"
        const employ = new Engineer('Peppa',3,"B.Peppa@gmail.com",git)
        expect(employ.github).toEqual(git)
    })
    it('Fetches the correct role',() => {
        const employ = new Engineer('Peppa',3,"B.Peppa@gmail.com","Bpep")
        expect(employ.getRole()).toEqual('Engineer')
    })
})