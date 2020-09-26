function countdownTimeStart() {
    var minute = parseInt(document.getElementById("minuteId").value);
    const count = new Date((new Date).getTime() + minute*60000);
    // Countdown'ın her 1 saniyede güncellenmesi
    var x = setInterval(function () {
        var now = (new Date).getTime();
        // Zamanlar arası farkın bulunması
        var distance = count - now;
        // Zamanlar arası farkın bulunması
        // Saat, Dakika ve Saniye hesaplama
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Sonuçların button üzerine yazılması
        if (distance > 0) {
            //alertFunction("Molanız Başladı!", 3000, false);
            document.getElementById("btnanamolaid").style.color = 'black';
            document.getElementById("pr").innerHTML = "Remaning Time" + "\n" + hours + ": " + minutes + ": " + seconds;
            // document.getElementById("btnanamolaid").prop('disabled', true);
            document.getElementById("btnanamolaid").disabled = true;
        }
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("btnanamolaid").innerHTML = "Mola Talebi";
            document.getElementById("btnanamolaid").attr('onclick', "countdown()");
        }
    }, 1000);
}