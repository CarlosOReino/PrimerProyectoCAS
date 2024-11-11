function validarPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const resultado = document.getElementById("resultado");
  
   // Verificar longitud entre 10 y 15 caracteres
   let esValida = password.length >= 10 && password.length <= 15;

    // 1. Verificar al menos dos mayúsculas
    let mayusculas = 0;
    for (let i = 0; i < password.length; i++) {
      if (password[i] >= "A" && password[i] <= "Z") {
        mayusculas++;
      }
    }
    esValida = esValida && mayusculas >= 2;

    // 2. Verificar al menos un carácter especial (* / - # ~)
    const simbolos = "*-/#~";
    let tieneSimbolo = false;
    for (let i = 0; i < password.length; i++) {
      if (simbolos.indexOf(password[i]) !== -1) {
        tieneSimbolo = true;
      }
    }
    esValida = esValida && tieneSimbolo;

    // 3. Verificar al menos tres números entre 5 y 9
    let numerosPermitidos = 0;
    for (let i = 0; i < password.length; i++) {
      if (password[i] >= "5" && password[i] <= "9") {
        numerosPermitidos++;
      }
    }
    esValida = esValida && numerosPermitidos >= 3;
  
    // Verificar que la contraseña y la confirmación coincidan
    const coinciden = password === confirmPassword;
    esValida = esValida && coinciden;
  
    if (esValida) {
      resultado.textContent = "Contraseña válida. Registro completado.";
      resultado.style.color = "green";
      
    } else {
      resultado.textContent = "La contraseña no cumple con los requisitos o no coinciden";
      resultado.style.color = "red";
      
    }
  }
  