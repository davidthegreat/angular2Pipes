import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  	<h1>Hello {{name | uppercase}}</h1>
  	<h1>Hello {{name | lowercase}}</h1>
  	<h1>{{today | date:'medium'}}</h1>
  	<h1>Today is {{today | date:'longDate'}} and it is {{today | date:'shortTime'}}</h1>
  	<h1> {{name}}'s birthday is {{birthday | date:'longDate'}}</h1>
  	<h1>{{number | currency:'GBP':'true' }}</h1>
  	<h1>{{promise| async}}</h1>
  `,
})
export class AppComponent  { 
	name:any;
	today:any;
	birthday:any;
	number:any;
	promise:any;

	constructor(){
		this.name = 'John Doe';
		this.today = new Date();
		this.birthday = new Date(1993, 9, 12);
		this.number = 5;

		this.promise = new Promise(funcrion(resolve, reject){
			setTimeout(function(){
				resolve('Hey, I am a promise');
			},2000);
		});
	}
}
