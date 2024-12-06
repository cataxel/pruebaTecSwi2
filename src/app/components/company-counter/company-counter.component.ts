import {Component, Input, SimpleChanges} from '@angular/core';
import {User} from '../../models/user.model';

/**
 * Componente que cuenta el número de empresas únicas asociadas a una lista de usuarios.
 */
@Component({
  selector: 'app-company-counter',
  imports: [],
  templateUrl: './company-counter.component.html',
  styleUrl: './company-counter.component.scss'
})
export class CompanyCounterComponent {
  // Propiedad de entrada que recibe una lista de usuarios desde el componente padre.
  @Input() users: User[] = [];
  // Propiedad que almacena el número de empresas únicas encontradas.
  uniqueCompanyCount = 0;

  constructor() {  }

  /**
   * Método que se ejecuta automáticamente cada vez que cambian las propiedades de entrada.
   * @param changes - Contiene información sobre los cambios en las propiedades de entrada.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['users']) {
      this.countUniqueCompanies();
    }
  }
  /**
   * Método privado que cuenta las empresas únicas basándose en la lista de usuarios.
   */
  private countUniqueCompanies(): void {
    // Crea un conjunto (Set) con los nombres de las empresas para eliminar duplicados
    const companyNames = new Set(this.users.map((user: User) => user.company.name));
    // Asigna el tamaño del conjunto (número de empresas únicas) a la propiedad `uniqueCompanyCount`.
    this.uniqueCompanyCount = companyNames.size;
  }
}
