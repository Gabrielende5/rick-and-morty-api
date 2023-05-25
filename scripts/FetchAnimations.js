var urlAnimation = `https://api.sampleapis.com/movies/animation`
fetch(urlAnimation)
    .then(res=>res.json())
    .then(data=>PopularATela(data))
    .catch(erro =>console.log(erro))

function PopularATela(data){
    const div = document.getElementById('animationList');
    const allCards = data.map(item=>`
        <div>
            <h2>${item.title}<h2>
            <img class = "imageAnimation" src="${item.posterURL}" alt = "imagem não achada ${item.title}"/>
        </div>
    `).join('');
    div.innerHTML = allCards;

}