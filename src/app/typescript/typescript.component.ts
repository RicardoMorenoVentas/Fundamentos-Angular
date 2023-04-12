import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})

export class TypescriptComponent implements OnInit{


  ngOnInit(): void {
    let any_type:any = 10;
    let unknown_type:unknown = 10;
    console.log('Numero: ' + this.getNumber());
    console.log('String: Hola');
    console.log('Boolean: ' + false);
    console.log('Any: ' + any_type);
    console.log('Unkwnown: ' + unknown_type)
  }

  getNumber(a: void){
    let max = 100;
    let min = 1;
    let int_out = Math.random() * (max - min) + min;
    return int_out;
  }


}





