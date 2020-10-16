fetch('https://api.github.com/users/Zhenyapechenya')
    .then(res => res.json())
    .then(json => console.log(json.name))
    .catch(err => console.log(err));