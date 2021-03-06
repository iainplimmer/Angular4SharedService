import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import { Task } from './../types/task';
import { TaskService } from './../services/task.service';

@Component({
  selector: 'st-tasklist',
  template: `
   <h4>Full Task List</h4>
   <ul>
      <li *ngFor="let item of tasks | async">
        <st-taskitem [task]=item></st-taskitem>
      </li>
    </ul>
  `,
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  public tasks: Observable<Task>

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    // No need to add the provider as this has been injected in the root component    
    this.tasks = this.taskService.taskStream;
  }

}
