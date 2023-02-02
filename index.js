var button = document.getElementById('btnGet');
var modal = document.getElementById('myModal');
var closeModal = document.getElementsByClassName('close')[0];

button.onclick = function() {
    modal.style.display = "block";
}

closeModal.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal){
    modal.style.display = "none";
    }
}

var myAlert = document.getElementById('myAlert');
var closeAlert = document.getElementsByClassName('close2')[0];

closeAlert.onclick = function(){
    myAlert.style.display = "none";
}

 /* function sendMail(){
    var parametros = {
        from_name:  document.getElementById('from_name').value,
        to_email:  document.getElementById('to_email').value 
    }
    emailjs.send("service_fm6dowf","template_dv3f1a8", parametros).then(function(res){
        console.log('sucesso!' + res.status);
    }); 
}*/
 
function sendMail(){
    var name = document.getElementById('from_name').value;
    var email = document.getElementById('to_email').value;

    if(email != true && name == false || email == false && name != true){
        /* alert('preeencha os campos obrigatório'); */
        document.getElementById('demo').innerHTML = 'Os campos são obrigatórios';
    }else{
        emailjs.send("service_i6g6kcn","template_dv3f1a8",{
            from_name:  name,
            to_email:  email 
            }).then(function (){
                    myAlert.style.display = "block";
                    modal.style.display = 'none';
    
            });
    }
}