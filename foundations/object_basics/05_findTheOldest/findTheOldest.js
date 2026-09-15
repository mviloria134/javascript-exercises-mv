function getAge(person) {
    return (person.yearOfDeath) ? 
        person.yearOfDeath - person.yearOfBirth : 
        new Date().getFullYear() - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const age = getAge(person);
        const oldestAge = getAge(oldest);
        return (age > oldestAge) ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
