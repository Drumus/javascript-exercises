const findTheOldest = function(people) {
    const oldestName = people.reduce((oldest,currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    });
    return oldestName;
};

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear(); //return current year
    }
    return death - birth;
}


// Do not edit below this line
module.exports = findTheOldest;
