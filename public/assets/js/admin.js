
          
$("#buscar").on("click",function(){

  let codigo=$("#codigo").val();
  if(codigo==""){

    //alert("Lo siento no se permite que el codigo sea vacios")
    Swal.fire({
        title: 'Error!',
        text: 'Lo siento el codigo del paciente es obligatorio',
        icon: 'error',
        confirmButtonText: 'Volver a intentar'
      });
   

  }else{
    //alert(codigo);
    let timerInterval
        Swal.fire({
        title: 'Cargado..!',
        html: 'Voy a cerraren <b></b> milesegundos.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
        })


    axios.get('https://tsg6s7x0zb.execute-api.us-east-1.amazonaws.com/prod/product?codigo='+codigo)
  .then(function (response) {
    // handle success
      console.log(response.data);
    $("#monitoreohide").val(response.data["monitoreo"]);

    $("#exampleModal").modal("hide");
    let contenido="";
    contenido +="<tr>";
    contenido +="<td>"+response.data["codigo"]+"</td>";
    contenido +="<td>"+response.data["nombre"]+ " "+ response.data["Apellido"]+ "</td>";
    contenido +="<td>"+response.data["edad"]+"</td>";
    contenido +="<td>"+response.data["condicioncronica"]+"</td>";
    contenido +="<td>"+response.data["clasificacionimc"]+"</td>";
    contenido +="<td>"+response.data["monitoreo"]+"</td>";
    contenido +="<td>"+response.data["pruebaslabotorio"]+"</td>";
    //contenido +="<td>"+response.data["monitoreo"]+"</td>";
    contenido +="<td>"+response.data["resultadoslabo1"]+"</td>";
    //contenido +="<td>"+response.data["condicioncronica"]+"</td>";
    contenido +="<td>"+response.data["diagnosticonuevo"]+"</td>";
    contenido +="<td>"+response.data["evaluacion"]+"</td>";
    contenido +="<td>"+response.data["adherencia"]+"</td>";
    //contenido +="<td>"+response.data["riesgo"]+"</td>";
    //contenido +="<td>"+response.data["adherencia"]+"</td>";
    contenido +="<td>"+response.data["tratamiento"]+"</td>";
    contenido +="<td>"+response.data["tratamiento3"]+"</td>";
    contenido +="<td>"+response.data["tratamiento2"]+"</td>";
    contenido +="<td>"+response.data["tratamiento1"]+"</td>";
    
    //
    contenido +="<td>";
    contenido +="<button type='button' onclick='abrirmolda("+response.data["codigo"]+")' class='btn btn-info' data-bs-toggle='modal' data-original-title='test' data-bs-target='#exampleModaldos'> Edit </button>";
    //contenido +="<button type='button' onclick='abrirmolda("+data["codigo"]+")' class='btn btn-danger' > Delete </button>";
    contenido += "</td>";
    contenido +="</tr>";

    document.getElementById("listatable").innerHTML=contenido;
    

  })
  .catch(function (error) {

    // handle error
    Swal.fire({
        title: 'Error!',
        text: ''+error.response.data["Message"],
        icon: 'error',
        confirmButtonText: 'Volver a intentar'
      });
    //console.log(error);

  })
  .then(function () {
    // always executed
     

        
  });


  /*$.get("https://tsg6s7x0zb.execute-api.us-east-1.amazonaws.com/prod/product?codigo="+codigo,function(data){

  console.log(data);

    //console.log(data["price"]);
    
      /*  $("#monitoreohide").val(data["monitoreo"]);

    $("#exampleModal").modal("hide");
    let contenido="";
    contenido +="<tr>";
    contenido +="<td>"+data["codigo"]+"</td>";
    contenido +="<td>"+data["nombre"]+ " "+ data["Apellido"]+ "</td>";
    contenido +="<td>"+data["pruebaslabotorio"]+"</td>";
    contenido +="<td>"+data["resultadoslabo1"]+"</td>";
    contenido +="<td>"+data["condicioncronica"]+"</td>";
    contenido +="<td>"+data["monitoreo"]+"</td>";
    contenido +="<td>"+data["diagnosticonuevo"]+"</td>";
    contenido +="<td>"+data["evaluacion"]+"</td>";
    contenido +="<td>"+data["sexo"]+"</td>";
    contenido +="<td>"+data["riesgo"]+"</td>";
    contenido +="<td>"+data["adherencia"]+"</td>";
    contenido +="<td>"+data["tratamiento1"]+"</td>";
    contenido +="<td>"+data["tratamiento2"]+"</td>";
    contenido +="<td>"+data["tratamiento3"]+"</td>";
    contenido +="<td>"+data["clasificacionimc"]+"</td>";
    contenido +="<td>"+data["edad"]+"</td>";
    contenido +="<td>"+data["tratamiento"]+"</td>";
    contenido +="<td>";
    contenido +="<button type='button' onclick='abrirmolda("+data["codigo"]+")' class='btn btn-info' data-bs-toggle='modal' data-original-title='test' data-bs-target='#exampleModaldos'> Edit </button>";
    //contenido +="<button type='button' onclick='abrirmolda("+data["codigo"]+")' class='btn btn-danger' > Delete </button>";
    contenido += "</td>";
    contenido +="</tr>";

    document.getElementById("listatable").innerHTML=contenido;
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Datos Cargados Correctamente'
      })*/



    
    

/*})*/


  }
  //alert(codigo);


})

function abrirmolda(id){

  $.get("https://tsg6s7x0zb.execute-api.us-east-1.amazonaws.com/prod/product?codigo="+id,function(data){

    //let  monitoreo=$("#monitoreohide").val();
    $("#codigoid").val(id);
    $("#sexo").val(data["sexo"]);
    $("#pruebaslabotorio").val(data["pruebaslabotorio"]);
    //$("#diagnosticonuevo").val(data["diagnosticonuevo"]);
    $("#tratamiento").val(data["tratamiento"]);
    $("#riesgo").val(data["riesgo"]);
    $("#nombre").val(data["nombre"]);
    $("#Apellido").val(data["Apellido"]);
    $("#adherencia").val(data["adherencia"]);
    $("#clasificacionimc").val(data["clasificacionimc"]);
    $("#edad").val(data["edad"]);
    $("#condicioncronica").val(data["condicioncronica"]);
    $("#resultadoslabo1").val(data["resultadoslabo1"]);


    //evaluación
     let contenido="";
      contenido +='<option value="">--Seleccionar--</option>';
      contenido +='<option value="mejora" > Mejora</option>';
      contenido +='<option value="retroceso" >Retroceso</option>';
      contenido +='<option value="estancamiento" >Estancamiento</option>';
    document.getElementById("evaluacion").innerHTML=contenido;

    //monitoreo
    let monitoreo="";
    monitoreo +='<option value="">--Seleccionar--</option>';
    monitoreo +='<option value="normal" > Normal</option>';
    monitoreo +='<option value="alto" >Alto</option>';
     
    document.getElementById("monitoreo").innerHTML=monitoreo;

    //tabulado
    let tabulado="";
    tabulado +='<option value="">--Seleccionar--</option>';
    tabulado +='<option value="limitesuperior" > Limite Superior</option>';
    tabulado +='<option value="alto" >Alto</option>';
    tabulado +='<option value="alto" >Alto</option>';
    tabulado +='<option value="normal" >Normal</option>';
    tabulado +='<option value="muyalto" >Muyalto</option>';
     
    document.getElementById("tabuladouno").innerHTML=tabulado;

    let tramientouno="";
    tramientouno +='<option value="">--Seleccionar--</option>';
    tramientouno +='<option value="medicamento1">Medicamento 1</option>';
    tramientouno +='<option value="medicamento2" >Medicamento 2</option>';
    tramientouno +='<option value="medicamento3" >Medicamento 3</option>';
    
     
    document.getElementById("tratamientouno").innerHTML=tramientouno;

    let tramientodos="";
    tramientodos +='<option value="">--Seleccionar--</option>';
    tramientodos +='<option value="Blanda"> Blanda</option>';
    tramientodos +='<option value="Cetogénica" >Cetogénica</option>';
    tramientodos +='<option value="Detox" >Detox</option>';
    tramientodos +='<option value="Balanceada" >Balanceada</option>';
    tramientodos +='<option value="Baja en  Azucar" >Baja en  Azucar</option>';
    tramientodos +='<option value="Baja en Carbohidratos" >Baja en Carbohidratos</option>';
    
     
    document.getElementById("tratamientodos").innerHTML=tramientodos;


    let tramientotres="";
    tramientotres +='<option value="">--Seleccionar--</option>';
    tramientotres +='<option value="Reposo">Reposo</option>';
    tramientotres +='<option value="Actividad Física Leve" >Actividad Física Leve</option>';
    tramientotres +='<option value="Actividad Física Moderada" >Actividad Física Moderada</option>';
    tramientotres +='<option value="Actividad Física Regular" >Actividad Física Regular</option>';
    
    
     
    document.getElementById("tratamientotres").innerHTML=tramientotres;

    let adherencia="";
    adherencia +='<option value="">--Seleccionar--</option>';
    adherencia +='<option value="SI">Si</option>';
    adherencia +='<option value="NO" >No</option>';
    
     
    document.getElementById("adherenciados").innerHTML=adherencia;

    
    
   
      


  })
}

$("#update").on("click",function(){

   //let urlg='http://localhost/form';
   let urlg='http://localhost/form';
   
   const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege...'
  }
 

  let  codigo= $("#codigoid").val();
  let evaluacion=document.getElementById("evaluacion").value;
  let monitoreo=document.getElementById("monitoreo").value;
  let tratamiento1=document.getElementById("tratamientouno").value;
  let tratamiento2=document.getElementById("tratamientodos").value;
  let tratamiento3=document.getElementById("tratamientotres").value;
  let adherencia=document.getElementById("adherenciados").value;
  let Obervaciones=$("#Obervaciones").val();


 
  let sexo= $("#sexo").val();
  let pruebaslabotorio= $("#pruebaslabotorio").val();
  let diagnosticonuevo=  $("#diagnosticonuevo").val();
  let tratamiento= $("#tratamiento").val();
  let riesgo=  $("#riesgo").val();
  let nombre= $("#nombre").val();
  let Apellido= $("#Apellido").val();
  //let adherencia= $("#adherencia").val();
  let clasificacionimc=  $("#clasificacionimc").val();
  let edad=  $("#edad").val();
  let condicioncronica=  $("#condicioncronica").val();
  let resultadoslabo1= $("#resultadoslabo1").val();
  
  //alert(codigo+Obervaciones+adherencia);
  
  let data={

    codigo: parseInt(codigo),
    evaluacion:evaluacion,
    monitoreo: monitoreo,
    tratamiento1: tratamiento1,
    tratamiento2: tratamiento2,
    tratamiento3: tratamiento3,
    sexo: sexo,
    pruebaslabotorio: pruebaslabotorio,
    diagnosticonuevo: diagnosticonuevo,
    tratamiento: tratamiento,
    riesgo: riesgo,
    nombre: nombre,
    Apellido: Apellido,
    adherencia: adherencia,
    clasificacionimc: clasificacionimc,
    edad: parseInt(edad),
    condicioncronica: condicioncronica,
    resultadoslabo1: resultadoslabo1,
    Obervaciones:Obervaciones

 }

 

       axios.post(urlg, data,{
              headers: headers
            })
            .then(function (response) {

                console.log(response);
                $("#exampleModaldos").modal("hide");

                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: 'Datos Modificados Correctamente'
                  })



            })
            .catch(function (error) {
                console.log(error);
            });

 /* $.ajax({
      type:"POST",
      url:urlg+"/form",
      dataType: "json",
      headers: headers,
      body:JSON.stringify(data),
      processData:false,
      cache:false,
      success:function(data){
          console.log( data);

      },

      error : function(xhr,errmsg,err) {
                      console.log(xhr.status + ": " + xhr.responseText);
                      }
  })*/


})

//logout
$("#log-out").on("click",function(){

    let data=0;
    urlg='http://localhost/logout';

    axios.post(urlg, {
  
        data:data

      })
      .then(function (response) {

        //console.log(response.data);
        window.location.replace("http://localhost");

      })
      .catch(function (error) {
        console.log('error');
      });



})


