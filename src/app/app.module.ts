import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskitemComponent } from './taskitem/taskitem.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { MinitasklistComponent } from './minitasklist/minitasklist.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskitemComponent,
    TasklistComponent,
    MinitasklistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
