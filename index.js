const randomizedid = (length = 10, split = 0) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const arrString = characters.split('');
    const mezcla = [];
    let output = [];
    let resultado;
    for (let i = 0; i < length; i++) {
        mezcla.push(arrString[Math.floor(Math.random() * arrString.length)])
    }
    resultado = mezcla.join('');

    if (split != 0) {
        for (let i = 0; i <= resultado.length; i++) {
            let initIndex = i;
            let endIndex = i + split;
            output.push(resultado.substring(initIndex, endIndex));
            i = endIndex
        }
        output = output.join('-');
        if(output.slice(-1) == '-'){
            output = output.substring(0, output.length -1);
            output = output+arrString[Math.floor(Math.random() * arrString.length)]
        }
    }else{
        output = resultado;
    }
    
    return output
};

module.exports = randomizedid;