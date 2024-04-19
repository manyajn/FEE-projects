let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".btn");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true ;
let count = 0;

const winpatterns = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6]
[3,4,5],
[6,7,8],
];

const resetgame = () => {
    turnO = true;
    count = 0;
    enableboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("clicked");
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        let iswinner = checkwin();
        if(count === 9 && !iswinner){
            gamedraw();
        }
    });
});
const gamedraw = () => {
    msg.innerText = `game was a draw`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const disableboxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const show = (winner) => {
    msg.innerText = `Congratulations, You Won ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};


const checkwin = () => {
    for(let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

    if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val){
                show(pos1val);
                return true;
            }
        }
    }

};
newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);