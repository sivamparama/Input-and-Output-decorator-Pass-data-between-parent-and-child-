import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}! <button (click)="sendDataToParent()">click</button></h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input("aliasName") name: string;
  @Output("sndData") sendData: EventEmitter<any>= new EventEmitter<any>();

  @Input () testMethode:any;

sendDataToParent(){
  //this.testMethode("deffernt way")
  this.sendData.emit("Testing the transfer");
}
}