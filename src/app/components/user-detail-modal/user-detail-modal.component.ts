import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import {User} from '../../models/user.model';
import {MatButton} from '@angular/material/button';

/**
 * Componente que representa una ventana modal.
 *
 * Este componente utiliza Angular Material para mostrar una ventana modal con los detalles de usuarios
 */
@Component({
  selector: 'app-user-detail-modal',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose
  ],
  templateUrl: './user-detail-modal.component.html',
  styleUrl: './user-detail-modal.component.scss'
})
export class UserDetailModalComponent {
  // Constructor que recibe los datos pasados al modal.
  // 'MAT_DIALOG_DATA' inyecta los datos al diálogo.
  constructor(@Inject(MAT_DIALOG_DATA) protected data: User) {
  }
}
