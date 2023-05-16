const numeros: number[] = [1, 5, 2];

const imprimirTabuadas = (listaNumeros: number[]): string => {

    let tabuadas: string = '';

    listaNumeros.map((numero) => {
        let tabuada: string = '';

        for (let index = 0; index <= 10; index++) {
            const resultado: number = numero * index;
            tabuada = tabuada +
                '\n' +
                `${numero} x ${index} = ${resultado}`

        }

        tabuadas = tabuadas +
            '\n' +
            '--------------------' +
            '\n' +
            tabuada;

    })

    return tabuadas;

}

console.log(imprimirTabuadas(numeros));

