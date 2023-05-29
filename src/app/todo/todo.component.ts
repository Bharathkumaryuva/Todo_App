import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { ITask } from '../model/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{
  tasks : ITask[]=[];
  inprogress : ITask[]=[];
  done : ITask[]=[];
 
 
  ngOnInit(): void {
    this.todoForm=this.fb.group({
      item : ['',Validators.required]
    })
   
  }

  todoForm: any | FormGroup;
  
  constructor(private fb : FormBuilder){} 

  addTask(){
    this.tasks.push({
      description:this.todoForm.value.item,
      done:false
    })
  }
  onEdit(item:ITask,i:number){
  
  }
  updateTask(){
    
  }
  deleteTask(i: number){
     this.tasks.splice(i,1)
  }
  deleteInProgressTask(i: number){
    this.inprogress.splice(i,1)
 }
 deleteDoneTask(i: number){
  this.inprogress.splice(i,1)
}
  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

  }
}
