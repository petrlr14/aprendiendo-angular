import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name:'calculadora'
})
export class CalculadoraPipe implements PipeTransform{
    /*value1 es el que va antes del pipe, y value2 son los argumentos despues del :
    * seria mejor que fuera con ... para que sean mas de un valor
    */
    transform(value1: any, value2: any) {
        let operaciones=`
            Suma: ${value1+value2} 
            Resta: ${value1-value2}
            Multiplicacion: ${value1*value2}
            Division: ${value1/value2}
        `;
        return operaciones;
    }

}