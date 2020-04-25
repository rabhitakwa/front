import { Injectable } from '@angular/core';
import {environment} from './../../../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
url :string = environment.url
  constructor(private http: HttpClient ) { }

  login(data){
   return this.http.post(this.url+"utilisateur/login",data)
  }
}
