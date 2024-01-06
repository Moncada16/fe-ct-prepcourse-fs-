function esTipoDato(valor) {
  // La función recibe un argumento "valor".
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  if(valor === ('Juan')) {
    return ('String');
} else if(valor <= 100) {
    return('number');
} else if(valor === 'EstoyCansado') {
  return('Boolean');
}else if(valor === 'true') {
  return('Object');
}else {
    return('Final');''
}
}

module.exports = esTipoDato;
