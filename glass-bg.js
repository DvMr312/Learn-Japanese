const btns = document.querySelectorAll(".btnNAG");
const text = document.querySelectorAll(".text");
window.onload = () => {
    text[0].style.display = "block";
    btns[0].style.backgroundColor ="#fff";
}
btns.forEach((ele,index)=>{
    ele.addEventListener("click",()=>{
        for(let i=0;i<text.length;i++){
            text[i].style.display = "none";
            btns[i].style.backgroundColor = "#6366f1"
        }
        btns[index].style.backgroundColor = "#fff";
        text[index].style.display = "block";
    })

});


