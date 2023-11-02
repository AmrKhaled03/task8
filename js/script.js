function validation(){
    var email= document.getElementById("mail").value;
    var password=document.getElementById("pass").value;
    var erro= document.getElementById("error");
    var text='';



if ( email.indexOf("@")==-1 || email.lenght==0){
    text="! please enter a valid email contains @ and email is required";
    erro.innerHTML=text;
    erro.style.color="red";

     return false;
 }

 else if (password.length<9){
 text="! please enter a valid password contains at least 10";

erro.innerHTML=text;

erro.style.color="red";
 return false;
 }
 else{
     window.Location.href=home.html;
    return true; 
 }

}
var modal = document.getElementById('second');

// Get the modal



window.onclick = function(event) {
    if (event.target == modal) {
      
        modal.close();
    }
}

