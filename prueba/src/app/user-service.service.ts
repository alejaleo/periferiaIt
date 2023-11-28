import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
//metodo de simulacion de obtencion de usuarios
  getUsers():Observable<any[]>{
    return of([
        {id:1, name:"juan", email:"juan@gmail.com"},
        {id:2, name:"daniel", email:"daniel@gmail.com"},
        {id:3, name:"alejandra", email:"alejandra@hotmail.com"},
        {id:4, name:"felipe", email:"felipe@gmail.com"},
        {id:5, name:"monica", email:"monica@gmail.com"},
        {id:6, name:"daniela", email:"daniela@hotmail.com"},
        {id:7, name:"kimberly", email:"kimberly@jumail.com"},
        {id:8, name:"anderson", email:"anderson@out.com"},
        {id:9, name:"david", email:"david@gmail.com"},
        {id:10, name:"esteban", email:"esteban@out.com"}

    ]);
  }

  constructor() { }
}
