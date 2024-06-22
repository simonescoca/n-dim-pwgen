const matrixGen = require("../functions/matrix-gen");
const input = require("../utils/input");
const fs = require("fs");


const outDir = __dirname.replace("/main", "/out");
if(!fs.existsSync(outDir)) fs.mkdirSync(outDir);

(async () => {
    const { default: stringify } = await import("json-stringify-pretty-compact");
    const outputFile = outDir + "/n_dim_pwd.txt";

    let dims = await input("> inserisci le dimensioni del matrix : ");
    const n_dimPw = matrixGen(dims);

    const matrixString = stringify(n_dimPw);

    // Scrivi la stringa JSON nel file
    fs.writeFileSync(outputFile, matrixString, { flag: "w" });

    console.log(`> trovi la tua password multidimensionale in ${outputFile}`);
})();