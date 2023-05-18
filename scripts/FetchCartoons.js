var urlCartoon = `https://api.sampleapis.com/cartoons/cartoons2D`
fetch(urlCartoon)
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(erro =>console.log(erro))