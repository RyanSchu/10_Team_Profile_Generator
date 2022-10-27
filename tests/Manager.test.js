const Manager = require('../lib/Manager')
describe('Engineer',() => {
    it('The office number is a number',() => {
        const employ = new Manager('Sminty',4,"Smnty_Drop@gmail.com",301)
        expect(typeof employ.officeNumber).toEqual("number")
    })
    it('Fetches the correct role',() => {
        const employ = new Manager('Sminty',4,"Smnty_Drop@gmail.com",301)
        expect(employ.getRole()).toEqual('Manager')
    })
})