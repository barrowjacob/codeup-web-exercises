const wait = (num) => {
    return new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve();
            }, num);
        })
};
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 1 second'));



function getLastCommit (username){
    return new Promise(function(resolve, reject) {
        resolve(fetch('https://api.github.com/users/' + username + '/events', {headers: {'Authorization': `token ${newGitKey}`}}));
    })
        .then(response => response.json())
            .then(usernames => {
                    let newThing = usernames.filter(u => u.type === "PushEvent");
                    newThing = JSON.stringify(newThing[0].created_at);
                    newThing = newThing.split('').splice(12,9).join('');
                    console.log(`${username}'s last commit was at ${newThing}`);

                })

}
console.log(getLastCommit('barrowjacob'));

//ANOTHER WAY TO DO THIS WHOLE THING:


// you don't need a "new Promise" because fetching is a promise function.
// const lastCommit = (username) => {
//
// // when you fetch something, you get a 'response' object, which can't be read, which is why you do 'resp.json()' which makes it a string.
//
//     fetch(`https://api.gitchub.com/users/${username}/events`, {headers: {'Authorization': `token ${newGitKey}`}})

//     //resp is arbitray designator for response, which is just returned info from fetch

//         .then(resp => resp.json())
//         //data is the clarified info after json
//         .then(data => {
//         .then(data.find(event => event.type === "PushEvent"));
//         .then(event=> event.created_at)
//         .then(date => console.log(date));
//         });
// }
// lastCommit();