import { Component } from '@angular/core';
import {UserListComponent} from './components/user-list/user-list.component';
import {UserSearchComponent} from './components/user-search/user-search.component';
import {User} from './models/user.model';
import {UserService} from './services/user.service';
import {CompanyCounterComponent} from './components/company-counter/company-counter.component';

/**
 * Componente que representa la app principal.
 *
 * Este componente inicializa las listas, la llamada al servicio de usuarios para consumir el endpoint
 * y maneja un metodo para filtrar
 */
@Component({
  selector: 'app-root',
  imports: [UserListComponent, UserSearchComponent, CompanyCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // Propiedades del componente para almacenar los usuarios y los usuarios filtrados
  users: User[] = [];
  filteredUsers: User[] = [];

  constructor(private userService: UserService) {  }
  // Metodo de ciclo de vida de Angular que se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
    // Llamada al servicio para obtener los usuarios y almacenarlos en las propiedades del componente
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.filteredUsers = users;
    });
  }
  // Metodo para filtrar los usuarios por nombre o correo
  filterUser(searchTerm: string): void {
    if (!searchTerm) {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter(user =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }
}
