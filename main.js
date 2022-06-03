const myTeam = [
    {
        name: 'Krysta',
        birthday: '10/20/95',
        pet: 'none',
    },
    {
        name: 'Tiffani',
        birthday: '10/11/88',
        pet: 'dog & cat'
    },
    {
        name: 'Ben',
        birthday: '11/10/92',
        pet: 'dog'
    },
    {
        name: 'Noah',
        birthday: '09/14/00',
        pet: 'ferret'
    }
]
const teammateNames = () => {
    console.log('These are the teammates names.')
    console.log('Krysta');
    console.log('Tiffani');
    console.log('Ben');
    console.log('Noah');
}

teammateNames();

const teamsBirthdays = (teamArray) => {
    for (const teamMember of teamArray) {
        console.log(`${teamMember.name}'s birthday is ${teamMember.birthday}.`)
    }
}

let birthdayLog = teamsBirthdays(myTeam)
console.log(birthdayLog)


let teamPets = (team) => { 
    for (const teamMate of team) {
        if (teamMate.pet === 'none') {
        console.log(`${teamMate.name} has no pets.`)
        }
        else {
            console.log (`${teamMate.name} has a ${teamMate.pet} as a pet.`)
        }
}
}


let pets = teamPets(myTeam)
console.log(pets)