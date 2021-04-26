const Intern = require ('../lib/Intern');

//name, email, id, role and school  name  for intern 
const internTest = new Intern ('Briana', 'Briana@gmail.com', 3 , 'Intren', 'UOM')

describe('Intern', () => {
    it('has a name', () =>{
        expect(internTest.name).toEqual(expect.any(String))
        expect(internTest.name.length).toBeGreaterThan(2)

    })
    it('has an email id', () =>{
        expect(internTest.email).toEqual(expect.stringContaining('@'))
    })

    it('has an id that is a number', () => {
        expect(internTest.id).toEqual(expect.any(Number))
    })

    it('has a role of engineer', () => {
        expect(internTest.role).toBe('Intern')
    })

    it('has a school name', () => {
        keys = Object.keys(internTest )
        optionKey = keys[4]
        expect(optionKey).toBe('school')
        expect(internTest.school).toEqual(expect.any(String))
    })
})

