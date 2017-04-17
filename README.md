# Synclist

Synopsis
--------
Project created to explore sharing services in an Angular4 application using RXJS. RXJS is *only* being used in the place of a promise. That will need more exploration as it's a massive surface area and to be honest I get how it works but not how i can use it effectively. One for another day.

The Objective
-------------
1.  Create a service that can be shared in multiple components so that we only call it once.
2.  Create two components that consume the service.
3.  Changing a value in one of the components reflects in both.

The Solution
------------
We create a service called TaskService, initialise it in the main app.component then inject the service into the other components, referring to the value that has been initilised in the app.component.

It's quite simple, but took a little while to get my head around how it could be achieved.

Using NgModel we can then reflect the changes back into the service and across other shared components.



(This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
