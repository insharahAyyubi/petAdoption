// const pet = document.getElementById('apiParacat');

fetch('https://dogapi.dog/api/v2/facts')
    .then(res => {
    return res.json();
    })
    .then(post => {
    const para = `${post.data[0].attributes.body}`;
    console.log(post);
    document.getElementById('apiParaDog').innerHTML = para;
    })
    .catch(err => console.log(err));

fetch('https://catfact.ninja/fact')
    .then(res => {
    return res.json();
    })
    .then(post => {
    const para = `${post.fact}`;
    console.log(post);
    document.getElementById('apiParaCat').innerHTML = para;
    })
    .catch(err => console.log(err));
