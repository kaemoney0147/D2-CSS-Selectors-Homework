
let navbarSpan=document.querySelector('.nav')
let newSpan=function(){
    const navSpan=document.createElement('span')
    navSpan.innerText='chat'
    navbarSpan.appendChild(navSpan)
}

newSpan()

const mainHeading=document.querySelector('.display-4')
mainHeading.style.color='blue'

const jumbotronBackground=document.querySelector('.jumbotron')
jumbotronBackground.style.backgroundColor='red'

window.onload = () =>{
    let removeTwitter= document.querySelector(
        "aside div:nth-child(3) ol li:nth-child(2)"
    )
    removeTwitter.remove()
    newSpan()
}
