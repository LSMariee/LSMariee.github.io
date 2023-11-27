function calc() {
    var principal = Number(document.getElementById("principal").value);
    var intrate = Number(document.getElementById("intrate").value);
    var years = Number(document.getElementById("years").value);
    var mnthpay = Number(document.getElementById("mnthpay").value);
    var ratedec = intrate / 100;
    var exponent = 12 * years;


    var balance = principal * (1 + ratedec / 12) ** exponent - (mnthpay * ((1 + ratedec/12) ** exponent - 1)) / (ratedec / 12);
    var msg = "<br>Remaining Loan Balance: $" + balance.toFixed(2);
    var out = document.getElementById("out");
    out.innerHTML = msg;

}

function reset() {
    document.getElementById('out').innerHTML = "";
}