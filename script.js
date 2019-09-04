function validation(){
  var Name = document.getElementById("name").value;
  var Email = document.getElementById("email").value;
  var Title = document.getElementById("title").value;
  var Message = document.getElementById("message").value;
  var Error_message = document.getElementById("Error_message");
  var text;

  Error_message.style.padding = "10px";

  if(Name.length <= 4){
    text = "Please Enter A Valid Name";
    Error_message.innerHTML = text;
    return false;
  }
  if(Email.indexOf("@") == -1 || Email.length < 6){
    text = "Please Enter A valid Email";
    Error_message.innerHTML = text;
    return false;
  }
  if(Message.length <= 20){
    text = "Please Enter A valid Message";
    Error_message.innerHTML = text;
    return false;
  }

  alert("Form Submitted Successfully");
  return true;
}
