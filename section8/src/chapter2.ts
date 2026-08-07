/**
 * keyof 연산자
 */

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
    return person[key];
}

const person = {
    name: "임지유",
    age: 19,
};

getPropertyKey(person, "name"); // 임지유

