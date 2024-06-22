const genRandomI = require("./random-i");

/**
 * Generates a pwlen characters long password with several combinations of types of characters within at least one char per type
 * @param {number} pwlen password's length
 * @returns {string} the password
 */
function pwGen(pwlen) {

    let password = "";

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const upLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const specChars = ["!", "@", "#", "$", "%", "&", "*", "-", "_", "=", "+", ".", "?", "€"];
        
    // * mi chiedo se nella password sono inclusi tutti i tipi di caratteri
    let hasNumber = false, hasUp = false, hasLow = false, hasSpec = false;

    // # genera password all'infinito finché non ne genera una con tutti i tipi di caratteri 
    while(!hasNumber || !hasUp || !hasLow || !hasSpec) {

        // * resetto la password ogni volta che viene generata una password non contenente tutti i caratteri
        password = "";
        
        // * resetto anche tutti i check di tipo di carattere
        hasNumber = false; hasUp = false; hasLow = false; hasSpec = false;

        // # finche non esce una password che abbia tutti i tipi di caratteri continua a generare password
        while(password.length < pwlen) {
        
            let randomNumber = numbers[genRandomI(numbers.length)];
            let randomUp = upLetters[genRandomI(upLetters.length)];
            let randomLow = lowLetters[genRandomI(lowLetters.length)];
            let randomSpec = specChars[genRandomI(specChars.length)];
            
            const typesRandom = [randomNumber, randomUp, randomLow, randomSpec];
            const randomChar = typesRandom[genRandomI(typesRandom.length)];

            // * il check che corrisponde al tipo del randomChar diventa true
            if(numbers.includes(randomChar)) hasNumber = true;
            if(upLetters.includes(randomChar)) hasUp = true;
            if(lowLetters.includes(randomChar)) hasLow = true;
            if(specChars.includes(randomChar)) hasSpec = true;
            
            password += randomChar;
        }
    }

    return password;
}

module.exports = pwGen;