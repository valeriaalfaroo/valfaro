import { Component } from '@angular/core';

@Component({
  selector: 'app-semana5',
  templateUrl: './semana5.component.html',
  styleUrls: ['./semana5.component.css']
})
export class Semana5Component {

  userData={
    name:'',
    lastname:'',
    email:'',
  }; 

  onSubmit(){
    console.log(this.userData); 
  }
}

