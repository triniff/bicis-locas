function validateForm(){
	//*Obteniedo los valores de los campos
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("input-email").value;
	var contrasena = document.getElementById("input-password").value;
	var bici = document.getElementById("form-control").value;

	//*Validando campos 

	//*Validando nombre
	if(nombre == "" || nombre.length == 0){
        var nuevoSpan = document.createElement("span"); 	//* Creando span
        var hijo = document.getElementById("name");	//* llamando al elemento que le pondre el span
        var padre = hijo.parentNode;	//* llamo al padre de el elemento que le pondre span
        padre.appendChild(nuevoSpan); //* le digo que inserte el span al padre

        var texto = document.createTextNode("Debe ingresar su nombre");
        nuevoSpan.appendChild(texto);
        return nuevoSpan;
	}
	//*Validando apellido

}