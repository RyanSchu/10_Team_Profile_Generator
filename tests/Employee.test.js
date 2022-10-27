const Employee = require('../lib/Employee')

describe('Employee',() => {
    describe('Attributes', () =>{
        it('creates an object with a name string', () => {
            const employ = new Employee('Steve',1,"steve@gmail.com")
            expect(typeof employ.name).toEqual("string")
        })
        it('creates an object with an employee number', () => {
            const employ = new Employee('Steve',1,"steve@gmail.com")
            expect(typeof employ.id).toEqual("number")
        })
        it('creates an object with a name string', () => {
            const employ = new Employee('Steve',1,"steve@gmail.com")
            expect(typeof employ.email).toEqual("string")
        })
    })

    describe('Methods', () => {
        it('returns the name of the employee', () => {
            const name = "Lacey"
            const employ = new Employee(name,2,"Lacey@gmail.com")
            expect(employ.getName()).toEqual
        })
    })
})