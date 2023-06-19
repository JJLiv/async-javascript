
let baseURL = "https://deckofcardsapi.com/api/deck";



function drawCard(count){
    let drawCardURL = `${baseURL}/new/draw/?count=${count}`;
    let draw = axios.get(`${drawCardURL}`);

    draw.then(data => {
        console.log(`${data.value} of ${data.suit}`);
    });
};

drawCard(1);

function drawCardDrawAgain(firstCount, secondCount){
    let firstDrawCardURL = `${baseURL}/new/draw/?count=${count}`;
    let draw = axios.get(`${firstDrawCardURL}`);

    draw.then(data => {
        console.log(`First card is ${data.value} of ${data.suit}`);
        deck_id = data.deck_id;
        return axios.get(`${baseURL}/${deck_id}/draw/?count=${secondCount}`);
    }).then(data => {
        console.log(`Second card is ${data.value} of ${data.suit}`);
    });

};

drawCardDrawAgain(1,1);


