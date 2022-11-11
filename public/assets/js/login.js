
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

      urlg='http://localhost/loginapp';


      axios.post(urlg, {
  
          login: emeil,
          password: password
          
  
        })
        .then(function (response) {
  
          //console.log(response.data);
          if(response.data=="ok"){
            window.location.replace("http://localhost/admin");

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