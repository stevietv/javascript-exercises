const age = function(person) {

    if (!person.yearOfDeath)
        return (new Date().getFullYear()) - person.yearOfBirth;

    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.toSorted((a, b) => age(b) - age(a))[0];
};

// Do not edit below this line
module.exports = findTheOldest;
