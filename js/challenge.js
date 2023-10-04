document.addEventListener('DOMContentLoaded',()=>{
    const counterDisplay = document.getElementById("counter");
    const minusButton = document.getElementById("minus");
    const plusButton = document.getElementById("plus");

    const heartButton = document.getElementById("heart");
    const pauseButton = document.getElementById("pause");
    const likesList = document.querySelector(".likes");
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    const submitButton = document.getElementById("submit");
    const restartButton =document.getElementById("restart");
    const commentList = document.getElementById("list");

    let counterValue = 0;
    let timerInterval;
    let isPaused = false;
    //add 1
    function increaseCounter(){
        counterValue++;
        counterDisplay.textContent=counterValue;
    }
    //minus 1
    function decrementCounter(){
        counterValue--;
    }
    function likeCounter(){
        const li=document.createElement('li');
        li.textContent=`Number ${counterValue} has been liked!`;
        likesList.appendChild(li);
    }
    function togglePause(){
        isPaused = !isPaused;
        minusButton.disabled=isPaused;
        plusButton.disabled=isPaused;
        heartButton.disabled=isPaused;
        submitButton.disabled=isPaused;

        if(isPaused){
            clearInterval(timerInterval);
            pauseButton.textContent="resume";
        }else{
            timerInterval=setInterval(incrementCounter,1000);
            pauseButton.textContent="pause";
        }
    }
    function restartCounter(){
        counterValue=0;
        counterDisplay.textContent=counterValue;
    }
    function addComment(){
        const commentText=commentInput.value.trim();
        if(commentText){
            const commentDiv=document.createElement("div");
            commentDiv.textContent=commentText;
            commentList.appendChild(commentDiv);
            commentInput.value="";
        }
    }
    timerInterval= setInterval(increaseCounter,1000);

    minusButton.addEventListener('click',decrementCounter);
    plusButton.addEventListener('click',increaseCounter);
    heartButton.addEventListener('click',likeCounter);
    pauseButton.addEventListener('click',togglePause);
    submitButton.addEventListener('click',(e)=>{
        e.preventDefault();
        addComment();
    });
    restartButton.addEventListener('click',restartCounter);
});