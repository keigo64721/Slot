//========関数定義部=========
function ChangeValue(num){
    const element = document.getElementById("box"+num);
    let r = (Math.random()*10);
    r=Math.floor(r);
    // console.log(r);
    element.innerHTML = r;
}

function StartSlot(){
    judge1=0;
    judge2=0;
    judge3=0;
    RunSlot(1);
    RunSlot(2);
    RunSlot(3);
}

function RunSlot(num){
    //console.log("running"+num);
    ChangeValue(num);
    slots[num] = setTimeout(function(){RunSlot(num)},interval);
}

function StopSlot(num){
    clearTimeout(slots[num]);
    if(judge1 == 1 && judge2 == 1 && judge3 == 1){
        JudgeResult();
    }
}

function JudgeResult(){
    let text;
    if(result[1] == result[2] && result[1] == result[3]){
        text = "あたり";
        document.getElementById("window").style.backgroundColor = "#FF0000";
    }else{
        text = "はずれ";
        document.getElementById("window").style.backgroundColor = "#0000FF";
    }

    const popup = document.getElementById("popup");
    popup.checked = true;

    const textDocument = document.getElementById("text");
    textDocument.innerHTML = '<p>'+text+'</p>';
}
//=====実行部========
const interval = 1000;
let judge1;
let judge2;
let judge3;
slots = [];
result = [];

document.getElementById("btn1").onclick = function() {
    StartSlot();
}
document.getElementById("btn2").onclick = function(){
    judge1=1;
    result[1] = document.getElementById("box1").textContent;
    console.log(result[1]);
    StopSlot(1);
}
document.getElementById("btn3").onclick = function(){
    judge2=1;
    result[2] = document.getElementById("box2").textContent;
    console.log(result[2]);
    StopSlot(2);
}
document.getElementById("btn4").onclick = function(){
    judge3=1;
    result[3] = document.getElementById("box3").textContent;
    console.log(result[3]);
    StopSlot(3);
}