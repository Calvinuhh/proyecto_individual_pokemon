const validation = (input) => {
  let errors = {};
  let regexImage = /^(http|https):\/\/[^\s]+(\.jpg|\.jpeg|\.png|\.gif)$/;

  if (!input.name) {
    errors.name = "Se requiere un nombre";
  }
  if (input.name.length > 15) {
    errors.name = "Debe ser menor a 15 carácteres";
  }

  if (!regexImage.test(input.image)) errors.image = "Ingresa una url valida";
  if (!input.image) errors.image = "La imagen no puede estar vacia";

  if (!input.life) {
    errors.life = "No puede estar vacio";
  }
  if (input.life <= 0) {
    errors.life = "No puede ser menor a 0";
  }

  if (input.attack === "") {
    errors.attack = "No puede estar vacio";
  }

  if (input.defense === "") {
    errors.defense = "No puede estar vacio";
  }

  if (input.life <= 0) {
    errors.life = "No puede ser menor o igual a 0";
  }

  if (input.attack <= 0) {
    errors.attack = "No puede ser menor o igual a 0";
  }

  if (input.defense <= 0) {
    errors.defense = "No puede ser menor o igual a 0";
  }

  if (input.speed <= 0) {
    errors.speed = "No puede ser menor o igual a 0";
  }

  if (input.height <= 0) {
    errors.height = "No puede ser menor o igual a 0";
  }

  if (input.weight <= 0) {
    errors.weight = "No puede ser menor o igual a 0";
  }

  if (!/^([0-9])*$/.test(input.weight) && input.weight) {
    errors.weight = "Solo se permiten numeros positivos";
  }

  if (!/^([0-9])*$/.test(input.height) && input.height) {
    errors.height = "Solo se permiten numeros positivos";
  }

  if (!/^([0-9])*$/.test(input.life)) {
    errors.life = "Solo se permiten numeros positivos";
  }

  if (!/^([0-9])*$/.test(input.attack)) {
    errors.attack = "Solo se permiten numeros positivos";
  }

  if (!/^([0-9])*$/.test(input.defense)) {
    errors.defense = "Solo se permiten numeros positivos";
  }

  if (!/^([0-9])*$/.test(input.speed) && input.speed) {
    errors.speed = "Solo se permiten numeros positivos";
  }

  if (input.types.length <= 0) {
    errors.types = "Debes elegir al menos 2 tipos";
  }

  if (input.types.length >= 2) errors.types = "No puedes elegir mas de 2 tipos";

  function repetidos(arr) {
    const counter = {};
    for (let i = 0; i < arr.length; i++) {
      if (counter[arr[i]]) {
        return true;
      } else {
        counter[arr[i]] = 1;
      }
    }
    return false;
  }

  if (repetidos(input.types) === true)
    errors.types = "No puedes repetir el mismo tipo!";

  if (!errors.types) errors.types = [];

  return errors;
};

export default validation;
