let opener = document.querySelector('.opener');
let circle = document.querySelector('.circle');

let staffMembers = [
    {name: 'Annie', description: `Adetta all accoglienza, coi suoi modi gentili e pacati vi (in)tratterà con le sue amorevoli cure seguendo ogni singolo passo del vostro soggiorno.`, url: './media/receptionistt.jpg'},
    {name: 'Sawmanta', description: `Amante di reality show e addetta all'intrattenimento, ama mettere alla prova gli ospiti con indovinelli, un divertimento adatto a tutta la famiglia.`, url: './media/saw.jpg'},
    {name: 'Ghoulliver', description: 'Addetto alle pulizie, scostantemente alle prese con la manutenzione della struttura, le sue pulizie vi lasceranno a bocca aperta. Nel tempo libero ama fare lunghe passeggiate serali in riva al fiume.', url: './media/zombie.jpg'},
    {name: 'InnocEnza', description: `Responsabile della sicurezza, farà scappare qualsiasi malintenzionato a gambe LEVATE.`, url: './media/pigtails.jpg'},
    {name: `I Fratelli 'Gore'met`, description: `Nonostante il loro aspetto, preparano deliziosi manicaretti con le loro mani di fata. Gestiscono anche il famoso ristorante "Il Faro". Non vi alzerete più dalla tavola...`, url: './media/cook.png'},
]

staffMembers.forEach((member)=>{
    let div = document.createElement('div');
    div.classList.add('moved');
    div.style.backgroundImage = `url(${member.url})`;
    circle.appendChild(div);
});

let movedDivs = document.querySelectorAll('.moved');
let check = false;
let flipCard = document.querySelector('.flipCard');

opener.addEventListener('click', ()=>{

    if(check==false){
        opener.style.transform = 'rotate(180deg)';
        movedDivs.forEach((moved, i)=>{
            let angle = (360*i) / movedDivs.length;
            moved.style.transform = `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;
        });
        check = true;
    }else{
        check = false;
        opener.style.transform = '';
        movedDivs.forEach((moved, i)=>{
            moved.style.transform = ``;
        });
        flipCard.classList.add('d-none');
    }

});

let innerFace = document.querySelector('.innerFace');
let cardName = document.querySelector('#cardName');
let cardDescription = document.querySelector('#cardDescription');


movedDivs.forEach((moved, i)=>{
    moved.addEventListener('click',()=>{
        flipCard.classList.remove('d-none');
        let member = staffMembers[i];
        innerFace.style.backgroundImage = `url(${member.url})`;
        cardName.innerHTML = member.name;
        cardDescription.innerHTML = member.description
    });
});
