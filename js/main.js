function primerCaracMayuscula(){
    var nombre = document.getElementById("name").value;
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
function validateNameSurname(){    
    var key_code = window.event.keyCode;
    if((65<=key_code)&&(key_code<=90)||(key_code==8)||(key_code==32)||(key_code==13)||(key_code==9)||(key_code==192)||(key_code==20)||(key_code==16)||(key_code==186)){
        primerCaracMayuscula();           
    }else{
       alert("Solo se acepta caracteres de A-Z");  
    }        
}

function validateForm(){
	/* Validando nombre y apellido */
    var nombre = document.getElementById("name").value;    
}