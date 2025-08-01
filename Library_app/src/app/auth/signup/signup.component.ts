import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  errorExists = false;
  errorText = "";

  constructor(private userService: UserService, private router : Router){}

    onSubmit(form : NgForm){
        if(!this.userService.getUser(form.value.email)){
          this.errorExists = false;
          var newUser  = this.userService.registerUser(form.value.ime, form.value.prezime, form.value.telefon,
            form.value.adresa, form.value.email,form.value.password);
          this.router.navigate(['']);
        }else{
          this.errorExists = true;
          this.errorText = "User with this email already exists!";

        }
    }

}
