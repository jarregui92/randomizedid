const randomizedid = (length = 10, split = 0, char = '-') => {
  const charAdmited = ['-', '_'];

  if (isNaN(length) || isNaN(split)) {
    return 'Los parametros deben de ser Numericos';
  }
  if (!charAdmited.includes(char)) {
    return 'Los parametros separadores deben ser - o _';
  }

  let resultado = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    resultado += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  if (split > 0) {
    const output = [];
    for (let i = 0; i < resultado.length; i += split) {
      output.push(resultado.substring(i, i + split));
    }
    resultado = output.join(char);
    if (resultado.endsWith(char)) {
      resultado = resultado.slice(0, -1) + characters.charAt(Math.floor(Math.random() * characters.length));
    }
  }

  return resultado;
};

module.exports = randomizedid;