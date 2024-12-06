/**
 * Representa las coordenadas geográficas de una dirección.
 */
export interface Geo {
  lat: string;
  lng: string;
}
/**
 * Representa una dirección completa de un usuario o entidad.
 */
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
/**
 * Representa la información de la empresa asociada a un usuario.
 */
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
/**
 * Representa la información de un usuario.
 */
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
