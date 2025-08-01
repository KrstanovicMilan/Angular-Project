import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private  userService : UserService, private router: Router){}

  onSubmit(form : NgForm){
    var email = form.value.email;
    var password = form.value.password;
    var user = this.userService.getUser(email);

    if(!user){
      
      alert("Korisnik sa " + email + " email adresom ne postoji");
      return;
    }

    var isPassValid = this.userService.isPasswordCorrect(email,password);
    if(!isPassValid){
      alert("Neispravna lozinka");
      return;
    }
    this.userService.currentUser = user;
    
    this.router.navigate(['']);
  }

  
}
