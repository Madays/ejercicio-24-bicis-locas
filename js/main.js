/*-------------El campo Nombre y apellido solo acepta caracteres de A-Z --------------*/
    function primerCaracMayusculaN(){
        var nombre;
        nombre = document.getElementById("name").value;
        var arrayNombre=nombre.split(" ");
        var minusculas=""; var arrayNombre1=[];
        for(var i=0;i<arrayNombre.length;i++){
            minusculas = arrayNombre[i].slice(1);
            arrayNombre[i] = arrayNombre[i][0].toUpperCase()+ minusculas;   
        } 
    //return document.getElementById("name").value = arrayNombre;
    arrayNombre = arrayNombre.join(" ");
    
    return document.getElementById("name").value = arrayNombre; 
    }
    function validateName(){    
        var key_code = window.event.keyCode;
        if((65<=key_code)&&(key_code<=90)||(key_code==8)||(key_code==32)||(key_code==13)||(key_code==9)||(key_code==192)||(key_code==20)||(key_code==16)||(key_code==186)){
            primerCaracMayusculaN();           
        }else{
           alert("Solo se acepta caracteres de A-Z");  
        }        
    }
    /*-------------------Apellido-------------------*/
    function primerCaracMayusculaS(){
        var apellidos;
        apellidos = document.getElementById("lastname").value;
        var arrayNombre=apellidos.split(" ");
        var minusculas=""; var arrayNombre1=[];
        for(var i=0;i<arrayNombre.length;i++){
            minusculas = arrayNombre[i].slice(1);
            arrayNombre[i] = arrayNombre[i][0].toUpperCase()+ minusculas;   
        } 
    //return document.getElementById("name").value = arrayNombre;
    arrayNombre = arrayNombre.join(" ");
    
    return document.getElementById("lastname").value = arrayNombre; 
    }
    function validateNameS(){    
        var key_code = window.event.keyCode;
        if((65<=key_code)&&(key_code<=90)||(key_code==8)||(key_code==32)||(key_code==13)||(key_code==9)||(key_code==192)||(key_code==20)||(key_code==16)||(key_code==186)){
            primerCaracMayusculaS();           
        }else{
           alert("Solo se acepta caracteres de A-Z");  
        }        
    }
    /*---------------End----Apellido-------------------*/
    /*---------End----El campo Nombre y apellido solo acepta caracteres de A-Z --------------*/
/*-------------Validar--------------*/
function validateForm(){     
    var nombre, apellidos, correo, contrasena, expresion;
    nombre = document.getElementById("name").value;
    apellidos = document.getElementById("lastname").value;
    correo = document.getElementById("input-email").value;
    contrasena= document.getElementById("input-password").value;
    
    expresion = /\w+@\w+\.+[a-z]/;
    
    if(nombre === ""){
        alert("El campo del nombre esta vacio"); 
        return false;
    }else if(apellidos === ""){
        alert("El campo del apellido esta vacio"); 
        return false;
    }
    if(nombre === "" || apellidos === "" || correo === "" || contrasena === ""){
        alert("Todos los campos son obligatorios"); 
        return false;
    }else if(nombre.length>30){
        alert("El nombre es muy largo");
        return false;
    }else if(apellidos.length>80){
        alert("El apellido es muy largo");
        return false;
    }else if(correo.length>100){
        alert("El correo es muy largo");
        return false;
    }else if(!expresion.test(correo)){
        alert("El correo no es válido");
        return false;
    }else if(contrasena.length<6){
        alert("La contraseña tiene que tener más de 6 caracteres");
        return false;
    }else if(contrasena=="passware"||contrasena=="123456"||contrasena=="098754"){
        alert("Tiene que ser una contraseña diferente");
        return false;
    }
    
    /*---------End----Validar--------------*/
 
}