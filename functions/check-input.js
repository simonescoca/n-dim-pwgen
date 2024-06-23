function checkInput(input) {

    if(input.includes("x")) {
        input = input.split("x");
        
        if(!input.includes("")) {
            input = input.map(Number);

            if(!input.includes(NaN)) {

                let res = true;
                input.forEach(el => {
                    if(el < 1) res = false;
                });

                return res;
            }
        }
    }

    return false;
}

module.exports = checkInput;