$(document).ready(function(){
    let shuffleURL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    axios.get(shuffleURL).then(data => {
        let deckID = data.deck_id
        return deckID
    });

    let $drawCard = $('#draw-card-btn');
    
    $drawCard.on("click", function(){
        let draw = axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`);
        draw.then(data => {
            let card = data.cards[0];
            // let cardValue = card.value;
            // let cardSuit = card.suit;
            let cardImageURL = card.image;
            let cardImage = $(`<li><img src=${cardImageURL}></li>`) 
            $("#cards").append(cardImage)
        })
    })
})