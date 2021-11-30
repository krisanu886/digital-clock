let clock = () => {
    let today = new Date();
    let hours = today.getHours();
    let mins = today.getMinutes();
    let sec = today.getSeconds();
    let time = `${hours} : ${mins} : ${sec}`
    console.log(time);
    document.getElementById("watch").innerText = time;
    setInterval(clock, 1000);
}
clock();



