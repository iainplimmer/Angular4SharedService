import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskService]
})
export class AppComponent {
  title = 'Sync Task List With RxJS!';
  constructor (private taskService: TaskService) {

    //  We provide the service into the root component only, then initialise the tasks so that 
    //  we can just call the public object that is available on them
    this.taskService.InitialiseTasks();
  }
}
