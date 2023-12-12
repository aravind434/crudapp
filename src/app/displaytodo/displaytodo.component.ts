import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-displaytodo',
  templateUrl: './displaytodo.component.html',
  styleUrls: ['./displaytodo.component.css']
})
export class DisplaytodoComponent {
  @Input() todofromparent:any;
  @Input() index: any;
  @Output() delEvent = new EventEmitter();
  @Output() doneEvent = new EventEmitter();
  @Output() undoEvent = new EventEmitter();


  del(){
    //debugger;
    this.delEvent.emit(this.index);
  }

  Done() {
    this.doneEvent.emit(this.index);
  }
  
  Undo() {
    this.undoEvent.emit(this.index);
  }

}
