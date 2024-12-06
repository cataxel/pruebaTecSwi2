import {Component, Input} from '@angular/core';
import { User} from '../../models/user.model';
import {NgForOf} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {UserDetailModalComponent} from '../user-detail-modal/user-detail-modal.component';
import {MatList, MatListItem, MatListItemLine, MatListItemTitle} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';

/**
 * Componente que representa una lista de usuarios.
 *
 * Este componente utiliza Angular Material para mostrar una lista interactiva de usuarios.
 * Permite abrir un modal con detalles de un usuario seleccionado.
 */
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    NgForOf,
    MatList,
    MatListItem,
    MatListItemTitle,
    MatListItemLine,
    MatIcon
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  /**
   * Lista de usuarios que se recibe como entrada desde el componente padre.
   * @type {User[]} Arreglo de objetos de tipo User.
   */
  @Input() users: User[] = [];
  /**
   * Constructor del componente.
   *
   * @param dialog Servicio MatDialog de Angular Material utilizado para abrir modales.
   */
  constructor(private dialog: MatDialog) { }
  /**
   * Abre un modal con los detalles de un usuario.
   *
   * @param user Objeto de tipo User que contiene la información del usuario seleccionado.
   */
  openUserDetails(user: User): void {
    this.dialog.open(UserDetailModalComponent,{
      width: '500px',
      data: user
    })
  }
}
