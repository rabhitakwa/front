import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  url: string = environment.url;
  constructor(private http: HttpClient) {}

  login(data) {
    return this.http.post(this.url + "utilisateur/login", data);
  }
  saveLocalUser(data) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  getLocalUser() {
    let user = localStorage.getItem("user");
    if (user) {
      return user;
    } else {
      return false;
    }
  }
}
