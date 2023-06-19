
let baseURL = 'http://numbersapi.com';

function favNumFact(num){
    $.getJSON(`${baseURL}/${num}?json`).then(data => {
        console.log(data)
    });
    
};

favNumFact(67);

let favNums = [5,7,9];

function favNumsFacts(nums){
    $.getJSON(`${baseURL}/${nums}?json`).then(data => {
        console.log(data);
    });
};

favNumsFacts(favNums);


function fourFactsfromNum(num){
    Promise.all(
        Array.from({ length: 4 }, () => {
            return $.getJSON(`${baseURL}/${num}?json`);
        })
    ).then(facts => {facts.forEach(data => console.log(data.text))});
};

fourFactsfromNum(67);

