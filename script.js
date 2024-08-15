document.querySelector(".cover").addEventListener('click', function () {
    this.classList.add("fade");
    setTimeout(()=>{
        this.style.display="none";
    },2000);
});