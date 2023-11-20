function calc() {
    var p = Number(document.getElementById("p").value);
    var intrate = Number(document.getElementById("intrate").value);
    var years = Number(document.getElementById("years").value);
    var mnthpay = Number(document.getElementById("mnthpay").value);
    var ratedec = intrate / 100;
    var exponent = 12 * years

    var balance = p (1 + ratedec / 12) ** exponent - (mnthpay((1 + ratedec/12) ** exponent - 1)) / (ratedec / 12);
    msg = "Remaining Loan Balance: " + balance.toFixed(2);
    document.getElementById('balance').innerHTML = msg;
}