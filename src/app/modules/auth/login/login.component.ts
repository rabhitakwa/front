import { Component, OnDestroy, OnInit } from "@angular/core";
import { LoginService } from "src/app/shared/login.service";
import { Router } from "@angular/router";

declare var $;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  email: string = "";
  password: string = "";
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    $("body").addClass("hold-transition login-page");
    $(() => {
      $("input").iCheck({
        checkboxClass: "icheckbox_square-blue",
        radioClass: "iradio_square-blue",
        increaseArea: "20%" /* optional */,
      });
    });
  }

  ngOnDestroy(): void {
    $("body").removeClass("hold-transition login-page");
  }

  login() {
    this.loginService
      .login({ email: this.email, password: this.password })
      .subscribe((data) => {
        let newData: any = data;
        if (newData.loggedIn) {
          this.loginService.saveLocalUser(newData.User);
          this.router.navigate(["members/"]);
        }
      });
  }
}
