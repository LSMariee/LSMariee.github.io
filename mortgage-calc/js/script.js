function calc() {
    var principal = Number(document.getElementById("principal").value);
    var intrate = Number(document.getElementById("intrate").value);
    var years = Number(document.getElementById("years").value);
    var mnthpay = Number(document.getElementById("mnthpay").value);

    var balance = principal * (((intrate / 12) + 1) ** (12 * years)) - ((mnthpay ((intrate / 12) + 1) ** (12 * years) - 1) / (intrate / 12))
}