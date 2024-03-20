import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project';

  name: string = "Jorge";
  age: number = 32;
  friends: Array<string> = ["2", "3"]
  random: Array<any> = ["Hola", true, 25]

  ngOnInit() {
    this.executets()
  }

  executets() {
    const nombre: string = "marco";
    const numero: number = 3;
    const arrayNumero: number[] = [3, 33];
    const trueFalse: boolean = true;
    const trueFalseArray: boolean[] = [true, false, true];
    let datoVacio: number;

    datoVacio = 5;
    datoVacio = 23;

    const numero1: number = 1;
    const numero2: number = 2;

    const operadores: string[] = ["+", "-", "*", "/", "&&", "||", "===", "!=="];
    const comparacion: boolean = (1 === 1);
    const comparacion2: boolean = (numero1 === numero2);

    console.log(comparacion);
    console.log(comparacion2);

    console.log("tiene que devolver:true", comparacion);
    console.log("tiene que devolver:false", comparacion2);

    console.log("tiene que devolver:true", numero1!==numero2)
    console.log("tiene que devolver:true", 2 !== numero2)

    console.log("operador &&:true&&true", true&&true);
    console.log("operador &&:true&&true", true&&false);
    console.log("operador &&:true&&true", false&&true);
    console.log("operador &&:true&&true", false&&false);

    console.log("operador ||:true||true", true||true);
    console.log("operador ||:true||true", true||false);
    console.log("operador ||:true||true", false||true);
    console.log("operador ||:true,||true", false||false);

    console.log("pregunta1:devuelve true",(numero1!== 2)|| false);
    console.log("pregunta2:devuelve false",(numero1!== 1)|| false);
    console.log("pregunta3:devuelve true",(numero1!== 1)|| true);
    console.log("pregunta4:devuelve false",(numero1!== 1) && false);

    let condicion: boolean = true;
    if(condicion){
      console.log("entramos en el if");

    } else {
      console.log("no entramos en el if")
    }

  }




}