# n-dim-pwgen

`n-dim-pwgen` è uno script node.js per generare password multidimensionali e memorizzarle in una matrice di dimensioni specificate.

## Installazione

1. Clona il repository: `git clone https://github.com/simonescoca/n-dim-pwgen.git`.

2. Accedi alla cartella del progetto: `cd n-dim-pwgen`.

3. Installa le dipendenze: `npm i`.

## Utilizzo

Esegui lo script principale: `node main/app.js`. Ti verrà chiesto di inserire le dimensioni della matrice che conterrà la password multidimensionale. Le dimensioni dovranno essere fornite in formato `IxJxK...`, dove I, J e K corrispondono al valore assoluto di ciascuna dimensione. Si possono inserire quante più dimensioni si desiderino e non ci sono limitazioni numeriche di valori.

Questo processo genererà una matrice delle dimensioni specificat contenente la password multidimensionale e salverà il tutto nel file `n-dim-pwgen/out/n_dim_pwd.txt`.