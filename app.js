document.getElementById("incrementbTN").addEventListener("click",incrementCounter);

document.getElementById("DecrementbTN").addEventListener("click",DecrementCounter);

document.getElementById("resetbtn").addEventListener("click",ResetCounter);

let counterdisplay = document.getElementById("counterDisplay");
let countervalue = 0;

function updatecounterdisplay(){
      counterdisplay.textContent=countervalue;
}

function incrementCounter(){
     countervalue++;
     updatecounterdisplay();
}

function DecrementCounter(){
  countervalue--;
  updatecounterdisplay();
}

function  ResetCounter(){
    countervalue=0;
    updatecounterdisplay();

}