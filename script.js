let body = document.body;
let url = 'https://api.github.com/users/Zhenyapechenya';
let parameters = window.location.search;
let username = parameters.slice(parameters.indexOf('=')+1);
if (parameters !== '') {
    url = `https://api.github.com/users/${username}`;
}

fetch(url)
    .then(res => res.json())
    .then(json => {
        console.log(json.avatar_url);
        console.log(json.name);
        console.log(json.bio);
        console.log(json.html_url);

        let img = new Image();   // Создает новый элемент img 
        img.src = json.avatar_url;
        body.append(img);

        body.append(json.name);
    })
// fetch(url)
//     .then(res => res.json())
//     .then(json => console.log(json.bio))
//     .catch(err => console.log(err));