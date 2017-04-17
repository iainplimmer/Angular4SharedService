import { Component, OnInit, Input } from '@angular/core';
import { Task } from './../types/task';

@Component({
  selector: 'st-taskitem',
  template: `
    <input [(ngModel)]="task.title" />
  `
})
export class TaskitemComponent implements OnInit {

  @Input()
  task : Task;

  constructor() { 

  }

  ngOnInit() {
    
  }

}
