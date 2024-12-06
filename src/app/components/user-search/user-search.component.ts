import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatFormField, MatInput} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-user-search',
  imports: [
    FormsModule,
    MatInput,
    MatFormField,
    MatIcon
  ],
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.scss'
})
export class UserSearchComponent {
  @Output() search = new EventEmitter<string>();
  searchTerm: string = '';
  /**
   * Metodo que se ejecuta cuando se realiza la búsqueda.
   * Emite el término de búsqueda (en minúsculas y sin espacios en blanco).
   *
   * @param term El término de búsqueda ingresado por el usuario.
   */
  onSearch(term:string) {
    // Emite el término de búsqueda a través del evento 'search'.
    this.search.emit(term.trim().toLowerCase());
  }
}
