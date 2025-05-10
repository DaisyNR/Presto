let opener = document.querySelector('.opener');
let circle = document.querySelector('.circle');
let staffMembers = [
    {name: 'Lelly', description: 'bchdsbhd', url: './media/receptionistt.jpg'},
    {name: 'Kelly', description: 'hhh hhh hhh', url: './media/saw.jpg'},
    {name: 'Fric', description: 'lalalal', url: './media/zombie.jpg'},
    {name: 'Frac', description: 'prprp ppp', url: './media/girl.png'},
]

staffMembers.forEach((member)=>{
    let div = document.createElement('div');
    div.classList.add('moved');
    div.style.backgroundImage = `url(${member.url})`;
    circle.appendChild(div);
})

let movedDivs = document.querySelectorAll('.moved');
let check = false;

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
    }

});
