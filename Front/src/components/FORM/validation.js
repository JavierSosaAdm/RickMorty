
const validation = (userData) => {
    const validEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const errors = {};

    if (!validEmail.test(userData.username)) {
        errors.username = 'El email es invalido';
    }

    if (!userData.username) {
        errors.username = 'Este campo no puede estar vacio'
    } 

    if (userData.username.length > 35) {
        errors.username = 'el email exede los 35 caracteres'
    }

    if (!userData.username.match(/\d/)){ // el match es un booleano que verifica las coincidencias.
        errors.password = 'La contraseña debe tener al menos un número'; 
    }

    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = 'La contraseña debe contener al menos 6 carácteres y menos de 10'
    }
    return errors;
}

export default validation;