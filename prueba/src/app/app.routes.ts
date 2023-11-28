import { Routes } from '@angular/router';
import {UserListComponent} from './user-list/user-list.component'

export const routes: Routes = [
  //direccionamiento de ruta principal para componente user-list
  {path:'', redirectTo:'/users', pathMatch:'full'},
  {path:'users',component:UserListComponent}

];

