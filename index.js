const randomizedid = (length = 10, split = 0) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let resultado = '';
    
    for (let i = 0; i < length; i++) {
      resultado += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    if (split > 0) {
      const output = [];
      for (let i = 0; i < resultado.length; i += split) {
        output.push(resultado.substring(i, i + split));
      }
      resultado = output.join('-');
      if (resultado.endsWith('-')) {
        resultado = resultado.slice(0, -1) + characters.charAt(Math.floor(Math.random() * characters.length));
      }
    }
  
    return resultado;
  };
  
  module.exports = randomizedid;