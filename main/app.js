const matrixGen = require("../functions/matrix-gen");
const input = require("../utils/input");
const checkInput = require("../functions/check-input");
const fs = require("fs");


const outDir = __dirname.replace("/main", "/out");
if(!fs.existsSync(outDir)) fs.mkdirSync(outDir);

(async () => {
    const { default: stringify } = await import("json-stringify-pretty-compact");
    const outputFile = outDir + "/n_dim_pwd.txt";

    let dims = await input("> inserisci le dimensioni del matrix : ");
    if(!checkInput(dims)) {
        console.log("> le dimensioni devono essere in formato d1xd2xd3... con dn intero e maggiore di 0");
    } else {
        
        const n_dimPw = matrixGen(dims);
        const matrixString = stringify(n_dimPw);
        fs.writeFileSync(outputFile, matrixString, { flag: "w" });
        console.log(`> trovi la tua password multidimensionale in ${outputFile}`);
    }
})();