function calculate() {

    let s1 = parseInt(document.getElementById("q1").value);
    let s2 = parseInt(document.getElementById("q2").value);
    let s3 = parseInt(document.getElementById("q3").value);

    let total = s1 + s2 + s3;

    if(total <= 1){
        document.getElementById("result").innerHTML = "You seem mentally stable 😊";
    }
    else if(total <= 3){
        document.getElementById("result").innerHTML = "Mild stress detected. Take rest 💛";
    }
    else{
        document.getElementById("result").innerHTML = "High stress! Talk to someone or seek help ❤️‍🩹";
    }
}
