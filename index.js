
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


const newblog=function(){
    const oldBlogid=document.querySelector('div.col-md-8')
    let newBlogPost=document.createElement('div')
    oldBlogid.appendChild(newBlogPost)
    newBlogPost.classList.add('blog-post')
    let h2=document.createElement('h2')
    h2.innerText='New Blog'
    h2.classList.add('blog-post-title')
    let p=document.createElement('p')
    p.innerText='i love this blog'
    p.classList.add('blog-post-met')
    newBlogPost.appendChild(h2)
    newBlogPost.appendChild(p)


}

    const button=document.querySelector('.blog-pagination> .btn.btn-outline-primary')
    button.addEventListener('click', removeBlog)
    function removeBlog(){
        let blogtoRemove=document.querySelector('.blog-post:last-child')
        blogtoRemove.remove()
    }''

    document.querySelectorAll('.blog-post-meta>a').mouseover,function(event) {
        let word=event.target.innerHTML;
        if (word == "mark")
           alert("Yep");
    };
    
    
window.onload = () =>{
    let removeTwitter= document.querySelector(
        "aside div:nth-child(3) ol li:nth-child(2)"
    )
    removeTwitter.remove()
    newSpan()
    newblog()
}
