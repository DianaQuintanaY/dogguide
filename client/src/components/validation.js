export const validate = (userData) => {

    let errors = {};
    const formatoImagenRegex = /\.(jpg|jpeg|png)$/;

    if(!userData.name) errors.name = 'Este campo no puede estar vacio';
    if( userData.name?.length > 35) errors.name = 'El nombre no puede superar los 35 caracteres';
    if(!formatoImagenRegex.test(userData.image)) errors.image = 'La imagen debe ser en formato "jpg", "jpeg" o "png" ';
    if( isNaN(userData.heightMin) || userData.heightMin <= 0) errors.heightMin = 'El min debe ser un numero mayor a 0';
    if( isNaN(userData.heightMax) || userData.heightMax <= 0) errors.heightMax = 'El max debe ser un numero mayor a 0';
    if( isNaN(userData.weightMin) || userData.weightMin <= 0) errors.weightMin = 'El min debe ser un numero mayor a 0';
    if( isNaN(userData.weightMax) || userData.weightMax <= 0) errors.weightMax = 'El max debe ser un numero mayor a 0';
    if( isNaN(userData.life_span) || userData.life_span <= 0) errors.life_span = 'Debe ser un numero mayor a 0';

    return errors
};
