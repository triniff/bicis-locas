function validateForm(){
	//Obteniedo los valores de los campos
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("input-email").value;
	var contrasena = document.getElementById("input-password").value;
	var bici = document.getElementById("form-control").value;

	//Validando primera en mayuscula texto
	function priMayuscula (string){
		return string.charAt(0).toUpperCase()
	}

	//Validando campos 
     var nuevoSpan = document.createElement("span"); 	//* Creando span

	//Validando nombre
	if(nombre == "" || nombre.length == 0 || nombre.charAt(0) != priMayuscula(nombre) || /^\s+$/.test(nombre)){
        var hijo = document.getElementById("name");	//* llamando al elemento que le llamere el padre
        var padre = hijo.parentNode;	//* llamo al padre de el elemento que le pondre span
        padre.appendChild(nuevoSpan); //* le digo que inserte el span al padre

        var texto = document.createTextNode("Debe ingresar su nombre");
        nuevoSpan.appendChild(texto);
        return nuevoSpan;
	}
	//Validando apellido
	if(apellido == "" || apellido.length == 0 || apellido.charAt(0) != priMayuscula(apellido) || /^\s+$/.test(apellido)){
        var hijo = document.getElementById("lastname");	//* llamando al elemento que le llamere el padre
        var padre = hijo.parentNode;	//* llamo al padre de el elemento que le pondre span
        padre.appendChild(nuevoSpan); //* le digo que inserte el span al padre

        var texto = document.createTextNode("Debe ingresar su apellido");
        nuevoSpan.appendChild(texto);
        return nuevoSpan;
	}
	//Validando Correo
	if(correo == "" || correo.length == 0 || /^\s+$/.test(correo)){
        var hijo = document.getElementById("input-email");	//* llamando al elemento que le llamere el padre
        var padre = hijo.parentNode;	//* llamo al padre de el elemento que le pondre span
        padre.appendChild(nuevoSpan); //* le digo que inserte el span al padre

        var texto = document.createTextNode("Verifique su e-mail");
        nuevoSpan.appendChild(texto);
        return nuevoSpan;
	}
	//Validando Contraseña
	if(contrasena == "" || contrasena.length == 0 || /^\s+$/.test(contrasena)){
        var hijo = document.getElementById("input-password");	//* llamando al elemento que le llamere el padre
        var padre = hijo.parentNode;	//* llamo al padre de el elemento que le pondre span
        padre.appendChild(nuevoSpan); //* le digo que inserte el span al padre

        var texto = document.createTextNode("La contraseña debe tener al menos 6 caracteres");
        nuevoSpan.appendChild(texto);
        return nuevoSpan;
	}
	//Validando select
	if (bici == "" || bici == 0) {
        var hijo = document.getElementById("form-control");	//* llamando al elemento que le llamere el padre
        var padre = hijo.parentNode;	//* llamo al padre de el elemento que le pondre span
        padre.appendChild(nuevoSpan); //* le digo que inserte el span al padre

        var texto = document.createTextNode("Debes seleccionar al menos un tipo de bici");
        nuevoSpan.appendChild(texto);
        return nuevoSpan;
	}

}