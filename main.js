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

const teamsBirthdays = (teamArray) => {
    for (teamMember of teamArray) {
        console.log(`${teamMember.name}'s birthday is ${teamMember.birthday}.`)
    }
}

let birthdayLog = teamsBirthdays(myTeam)
console.log(birthdayLog)