# Room manager
A Spring Boot and Angular project.

A very simple (one class) meeting room manager project. 

Development for didactic purposes, not representing a suitable format for production environments.

The Project that is part of Santander Bootcamp Fullstack Developer, promoted by [Santander](https://app.becas-santander.com/) and [Digital Innovation One](https://web.digitalinnovation.one/). Classes presented by [Kamila Santos](https://github.com/Kamilahsantos).

## Back-end
Spring boot REST API.

To start the back-end server run: `mvn spring-boot:run`

With that a server will be started at url http://localhost:8080/api/v1. After the startup it will be possible to make http requests on that.

For data load, run *HTTP POST* on `http://localhost:8080/api/v1/rooms`

For check the load, run *HTTP GET* on `http://localhost:8080/api/v1/rooms`

## Front-end
Angular 12 App.
To start the app run: `ng serve`

With that a server will be started at url http://localhost:4200/

Enjoy!