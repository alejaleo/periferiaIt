import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { UserServiceService } from '../user-service.service';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

//definicion tabla usuarios
export interface users {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  //definicion de variables iniciales
  load:boolean=false;
  usersData:any=[];
  dataSource:any=[];
  displayedColumns:string[] = ['id', 'name', 'email'];

  constructor(private userService:UserServiceService){}

  ngOnInit(){
     this.getData();
  }
  //funcion para escuchar el servicio de usuario y mostrar datos en la tabla primera vez
  getData(){
    this.userService.getUsers().subscribe((data:any[])=>{
      this.usersData=data;
    })
    this.dataSource=this.usersData;
  }
  //funcion para mostrar la barra de carga
  loading(){
    this.load=true;
    this.dataSource=[];
    setTimeout(() => {
      this.load=false;
      this.getData();
    }, 2000);
  }
  //funcion para el filtrado de los datos de nombre y correo electronico de los usuarios de la tabla
  filter(event:Event){
    this.dataSource=this.usersData;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource=this.dataSource.filter((user:any)=>user.name.includes(filterValue.trim().toLowerCase()) || user.email.includes(filterValue.trim().toLowerCase()))
  }




}
