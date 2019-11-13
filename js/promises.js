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
