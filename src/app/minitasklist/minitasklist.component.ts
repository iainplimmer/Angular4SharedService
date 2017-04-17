import { Component, OnInit } from '@angular/core';
import { TaskService } from './../services/task.service';
import { Observable } from 'rxjs/Rx'
import { Task } from './../types/task';

import 'rxjs/add/operator/take'

@Component({
  selector: 'st-minitasklist',
  template: `
  <h4>Mini Task List</h4>
   <ul>
      <li *ngFor="let item of tasks | async">
        <st-taskitem [task]=item></st-taskitem>
      </li>
    </ul>
  `,
  styleUrls: ['./minitasklist.component.css']
})
export class MinitasklistComponent implements OnInit {

  public tasks: Observable<Task>

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    // No need to add the provider as this has been injected in the root component    
    this.tasks = this.taskService.taskStream;    
  }

}
