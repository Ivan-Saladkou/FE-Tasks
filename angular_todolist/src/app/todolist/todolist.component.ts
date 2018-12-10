import { Component, OnInit } from '@angular/core';


class Task{
  constructor(heading:string,dscrpt:string,done:boolean) {
    this.header=heading;
    this.completed=done;
    this.discription=dscrpt;
 }
public header:string;
public discription:string;
public completed:boolean;
}
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent implements OnInit {

  

  tasks: Task[] = 
  [
      {header: "Заголовок", discription:"Описание", completed:false },
     
  ];
  addTask(head: string, dscr: string): void {
       
     
      this.tasks.push(new Task(head, dscr,false));
  }
  ngOnInit() {
  }
}
  


