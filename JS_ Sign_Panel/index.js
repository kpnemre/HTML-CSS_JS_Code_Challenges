
function uyeOl() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username !="" && password !=""){
    alert("Üye olma işlemi başarılı");
    const hrefInput = window.location.href = "login.html?username=" + username + "&password=" + password;
    
  }
}

  