const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


let moreThanThree = users.filter((user) => {return user.languages.length >= 3});
console.log(moreThanThree);

let eachElementUserEmail = users.map((user) => {return user.email});
console.log(eachElementUserEmail);

let totalYearsExperience = users.reduce((total, current) => {return total + current.yearsOfExperience},0);
console.log(totalYearsExperience);

let longestEmail = users.reduce((a, b) => {
    if (a.email.length > b.email.length) {
    return a;
        } else {
        return b;
    }
});
console.log(longestEmail);

let userNamesString = users.reduce((total, current) => {
    return `${total} ${current.name}` },"");
    console.log(`The instructors are ${userNamesString}`);