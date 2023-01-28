const counter= document.getElementById("counter");
const minus= document.getElementById("minus");
const plus= document.getElementById("plus");
const heart= document.getElementById("heart");
const pause= document.getElementById("pause");
const submit=document.getElementById("submit");

let count = setInterval(timer,1000);
function timer(){
    counter.innerHTML= ++counter.innerHTML;
    if(counter === 1000) {
        clearInterval(count);
    }
}

minus.addEventListener('click', () => --counter.innerHTML)

plus.addEventListener('click', () => ++counter.innerHTML)

pause.addEventListener('click', () =>{
    if(pause.innerHTML === 'pause'){
        clearInterval(count)
        pause.innerHTML = 'resume'
    }else{
        timer()
        pause.innerHTML = 'pause'
    }
})

heart.addEventListener('click',()=>{
    const likes = document.querySelector('.likes')
    const li = document.createElement('li')
    li.innerHTML = `${counter.innerHTML} has been liked`
    likes.appendChild(li)
})

submit.addEventListener('click', () => {
    let comments = document.getElementById('comment-input')
    const list = document.getElementById('list')
    const li = document.createElement('li')
    li.innerHTML = comments.value
    comments.value = " "
    list.appendChild(li)
})