// console.log('Lets start JS practice');
const headings = document.getElementsByTagName('h2');
for(const heading of headings){
    heading.style.color = 'red';
}

document.getElementById('bag-heading').style.backgroundColor = 'yellow';

const cards = document.getElementsByClassName('card');
for(const card of cards){
    card.style.backgroundColor = 'lightblue';
    card.style.borderRadius = '20px';
}

function changeBG(){
    console.log('Button has been clicked')
}

const buttonList = document.getElementsByClassName('btn');
for(const button of buttonList){
    button.addEventListener('click', function(event){
        console.log(event.target.innerText);
        if(event.target.innerText == 'Buy Now'){
            // event.target.style.display = 'none'; // display none process
            event.target.parentNode.removeChild(event.target); // remove child from parentNode process
        }
    })
}

const emailInput = document.getElementById('email-confirm');
emailInput.addEventListener('keyup', function(){
    if(emailInput.value == 'email'){
        document.getElementById('submit-button').removeAttribute('disabled');
    }else{
        document.getElementById('submit-button').setAttribute('disabled',true);
    }
})

const images = document.getElementsByTagName('img');
for(const image of images){
    image.addEventListener('mouseover', function(){
        // console.log(image)
        image.style.opacity = '75%';
    })
    image.addEventListener('mouseout', function(){
        // console.log(image)
        image.style.opacity = '100%';
    })
}

function doubleClick(){
    document.getElementById('sub').style.backgroundColor = 'hotpink';
}