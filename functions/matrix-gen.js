const pwGen = require("./pw-gen");

function matrixGen(dimensions) {

    // converti la stringa delle dimensioni in un array di numeri
    dimensions = dimensions.split('x').map(Number);
    
    // calcola il numero totale di elementi
    let elems = 1;
    dimensions.forEach(el => elems *= el);
    
    // genera la password
    const pw = pwGen(elems);
    
    // funzione ricorsiva per creare la matrice e riempirla con i caratteri della password
    function createMatrix(dims, countObj) {
        if(dims.length === 0) return pw[countObj.count++];
        
        let size = dims[0];
        let restDims = dims.slice(1);
        
        let matrix = [];
        for(let i = 0; i < size; i++) matrix.push(createMatrix(restDims, countObj));
        return matrix;
    }
    
    // usa un oggetto per mantenere il contatore durante la ricorsione
    return createMatrix(dimensions, { count: 0 });
}

module.exports = matrixGen;