console.log("I am here");

// alert("he is coming")

//alert
//===========================================
const maComing = () => {
    alert("he is coming, open the book")
}

//confirm
//get true and false 
//===========================================
const  askPicnic = () => {
    const response = confirm("are you going to picnic");
    console.log(response);
    if(response === true){
        alert("amake fee ta bKash kore de")
    }
    else {
        console.log("dore gea mor");
    }
}

//prompt 
//to get input
//===========================================
const askName = () => {
    const name = prompt("what is your name")
    if (name) {
        console.log(name);
    }

}

//the will use "model" instead using "alert".


