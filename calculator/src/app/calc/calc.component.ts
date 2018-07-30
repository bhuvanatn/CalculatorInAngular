import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  public num1 :number;
  public num2 :number;

  public result :number;

  addition(){
    this.result = this.num1 + this.num2;
  }
  subtraction(){
    this.result = this.num1 - this.num2;
  }
  multiplication(){
    this.result = this.num1 * this.num2;
  }
  division(){
    this.result = this.num1 / this.num2;
  }

  constructor() { }

  ngOnInit() {
  }

}
