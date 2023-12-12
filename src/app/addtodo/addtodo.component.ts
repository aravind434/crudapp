import { Component } from '@angular/core';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent {
  todoList:any[] = [];
  todoname : string = '';
  // todoId : number = 0;

  addToDo() {
    let todo = {
      todoName : this.todoname,
      status : false,

      // id : this.todoId
    }
    this.todoList.push(todo);
    // this.todoId++;
  };

  delTask(index:any) {
    this.todoList.splice(index,1);
  }

  DoneTask(index:any){
    this.todoList[index].status = true;
  }

  UndoTask(index:any) {
    this.todoList[index].status = false;
  }
}
