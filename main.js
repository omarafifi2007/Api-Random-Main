const dog_card = document.getElementById('dog_card')
const fox_card = document.getElementById('fox_card')
const dog_btn = document.getElementById('dog_btn')
const fox_btn = document.getElementById('fox_btn')

fox_btn.addEventListener('click' , getRandomFox)
dog_btn.addEventListener('click' , getRandomDog)


function getRandomDog(){
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
        if(data.url.includes('.mp4')){
            getRandomDog()
        }else{
            dog_card.innerHTML = `<img src="${data.url}" />`
        }
      
    })
}


function getRandomFox(){
    fetch('https://randomfox.ca/floof/')
    .then(res => res.json())
    .then(data => {
        fox_card.innerHTML = `<img src="${data.image}" />`
    })
}
