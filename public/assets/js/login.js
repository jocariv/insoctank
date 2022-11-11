
$("#buttonlogin").on("click",function(){

    let emeil= $("#emeil").val();
    let password=$("#password").val();

    if(emeil=="" || password==""){

      Swal.fire({
        title: 'Error!',
        text: 'Email o Password son requeridos',
        icon: 'error',
        confirmButtonText: 'Volver a intentar'
      });
   

    }else{

      urlg='http://insoctankwebapp-dev.us-east-1.elasticbeanstalk.com/loginapp';


      axios.post(urlg, {
  
          login: emeil,
          password: password
          
  
        })
        .then(function (response) {
  
          //console.log(response.data);
          if(response.data=="ok"){
            window.location.replace("http://insoctankwebapp-dev.us-east-1.elasticbeanstalk.com/admin");

          }else{

            Swal.fire({
              title: 'Error!',
              text: 'Email o Password Incorrectos',
              icon: 'error',
              confirmButtonText: 'Volver a intentar'
            });
         


          }
        
  
        })
        .catch(function (error) {
          console.log(error);
        });


    }
   

      


})