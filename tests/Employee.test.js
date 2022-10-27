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
            expect(employ.getName()).toEqual(name)
        })
        it('returns the id of the employee', () => {
            const id = 2
            const employ = new Employee("Lacey",id,"Lacey@gmail.com")
            expect(employ.getId()).toEqual(id)
        })
        it('returns the email of the employee', () => {
            const email = "Lacey@gmail.com"
            const employ = new Employee("Lacey",2,email)
            expect(employ.getEmail()).toEqual(email)
        })
        it('returns the "Employee"', () => {
            const employ = new Employee("Lacey",2,"Lacey@gmail.com")
            expect(employ.getRole()).toEqual("Employee")
        })
    })
})