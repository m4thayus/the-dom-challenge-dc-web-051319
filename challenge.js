let counter = document.getElementById("counter");
let plus = document.getElementById("+");
let minus = document.getElementById("-");
let like = document.getElementById("<3");
let likes = document.getElementsByClassName("likes");
let pause = document.getElementById("pause");
let submit = document.getElementById("submit");

function incrementCounter() {
    counter.innerText = parseInt(counter.innerText, 10) + 1;
};

function decrementCounter() {
    counter.innerText = parseInt(counter.innerText, 10) - 1;
};

function addLike(num) {
    let listItem = document.getElementById(num);
    if (listItem) {
        array = listItem.innerText.split(" ");
        let count = parseInt(array[2], 10) + 1;
        listItem.innerText = `${num} has ${count} like(s).`;
    }
    else {
        let newListItem = document.createElement('li');
        newListItem.id = num
        newListItem.innerText = `${num} has 1 like(s).`;
        likes[0].append(newListItem);
    }
};

function startTimer() {
    timer = window.setInterval(incrementCounter, 1000);
};

function disableButtons() {
    buttons = document.querySelectorAll("button");
    buttons.forEach( (button) => {
        button.disabled = true;
    });
    pause.disabled = false;
};

function enableButtons() {
    buttons = document.querySelectorAll("button");
    buttons.forEach( (button) => {
        button.disabled = false;
    });
};

function addComment(comment) {
    let comments = document.getElementsByClassName("comments")
    newComment = document.createElement('p');
    newComment.innerText = comment
    comments[0].append(newComment);
};

// start timer on doc load
document.addEventListener('DOMContentLoaded', (event) => {
    startTimer();
});

// plus and minus buttons
plus.addEventListener('click', (event) => {
    incrementCounter();
});

minus.addEventListener('click', (event) => {
    decrementCounter();
});

// like button
like.addEventListener('click', (event) => {
    num = counter.innerText;
    addLike(num);
});

// pause and resume
pause.addEventListener('click', (event) => {
    if (pause.innerText == "pause") {
        window.clearInterval(timer);
        disableButtons();
        pause.innerText = "resume";
    }
    else {
        startTimer()
        enableButtons();
        pause.innerText = "pause";
    }
});

// comments
submit.addEventListener('click', (event) => {
    let comment = document.getElementById("comment-form");
    addComment(comment[0].value);
    event.preventDefault();
    comment.reset();
});