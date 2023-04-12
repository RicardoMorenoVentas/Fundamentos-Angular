import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.css']
})

export class OneWayBindingComponent {

  randomNumber: number = 1;

  boleano:boolean = false

  valor_depende = "¡Pulsame!";



  getRandomNum(){
    let max = 100;
    let min = 1;
    let int_out = Math.round(Math.random() * (max - min) + min);
    this.randomNumber = int_out;
    this.flagText()
  }

  flagText(){
    this.boleano = this.randomNumber % 2 == 0;
    this.valor_depende =  this.boleano ? "El numero es par" : "El numero es impar";
  }
}
