var urlCartoon = `https://api.sampleapis.com/cartoons/cartoons2D`
fetch(urlCartoon)
    .then(res=>res.json())
    .then(data=>PopularATela(data))
    .catch(erro =>console.log(erro))

function PopularATela(data){
    const div = document.getElementById('cartoonsList');
    const allCards = data.map(item=>`
        <div>
            <h2>${item.title}<h2>
            <img class = "imageCard" src="${item.image}" alt = "imagem não achada ${item.title}"/>
        </div>
    `).join('');
    div.innerHTML = allCards;

}