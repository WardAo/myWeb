import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    shoppingcartShow = true;
    loginShow = false;
    itemShow = true;
    username = "";
    password = "";
    shoppingcart_click() {
        if (this.shoppingcartShow === true) {
            this.shoppingcartShow = false;
        } 
    };
    exit_click() {
        if (this.shoppingcartShow === false) {
            this.shoppingcartShow = true;
        }
    };
    continue_click() {
        if (this.shoppingcartShow === false) {
            this.shoppingcartShow = true;
        }
    };
    checkout_click() {
        if (this.shoppingcartShow === false) {
            this.shoppingcartShow = true;
        }
    };
    login_click() {
        if (this.itemShow === true) {
            this.itemShow = false;
            this.loginShow = true;
        }
    };
}
