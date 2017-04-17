import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Rx'

import { Task } from './../types/task';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/share'
import 'rxjs/add/operator/take'

@Injectable()
export class TaskService {

  taskStream: Observable<Task>;

  constructor(private _http: Http) { }

  InitialiseTasks() {
    this.taskStream = this._http
      .get('https://jsonplaceholder.typicode.com/todos')
      .map((res: any) => res.json())      
      .share();
  }

}
