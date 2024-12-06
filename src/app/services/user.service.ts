import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiurl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }
  /**
   * Metodo para obtener la lista de usuarios desde la API
   * @returns Observable<User[]> - Retorna un observable con el arreglo de usuarios
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiurl}/users`).pipe(
      catchError( error => {
        console.error('Error al obtener usuarios: ',error);
        throw error;
      })
    );
  }
}
