let clock = () => {
    let today = new Date();
    let hours = today.getHours();
    let mins = today.getMinutes();
    let sec = today.getSeconds();
    let time = `${hours} : ${mins} : ${sec}`
    console.log(time);
    document.getElementById("current-time").innerText = time;
    setInterval(clock, 1000);
}
clock();

// let clock1 = () =>{
//     let currentDate = new Date();
//     let day = String(currentDate.getDate()).padStart(2, '0');
//     let month = String(currentDate.getMonth()+1).padStart(2,'0');
//     let year = currentDate.getFullYear();
//    currentDate = day + '/' + month + '/' + year;
//    document.write(currentDate);
   
// }
// console.log(clock1())
// clock1();



