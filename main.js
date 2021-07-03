function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Informe seu nome completo";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Esse email parece inexistente";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 50){
      text = "Mensagem Inválida";
      error_message.innerHTML = text;
      return false;
    }
    alert("Yes, enviado!");
    return true;
  }
