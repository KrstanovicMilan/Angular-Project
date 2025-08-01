import { Component ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User, UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})

export class ProfilComponent {
  isEditing : boolean = false;
  profileForInput!: User; 

  constructor(@Inject(MAT_DIALOG_DATA)  public data: any, public userService : UserService){}

  ngOnInit(){
    this.profileForInput = {
      id : this.data.user.id,
      email: this.data.user.email,
      password : this.data.user.password,
      adresa : this.data.user.adresa,
      telefon : this.data.user.telefon,
      ime : this.data.user.ime,
      prezime : this.data.user.prezime 

    }
  }

  finishEditing(form : NgForm){
    this.data.user.email = this.profileForInput.email;
    this.data.user.password = this.profileForInput.password;
    this.data.user.ime = this.profileForInput.ime;
    this.data.user.prezime = this.profileForInput.prezime;
    this.data.user.adresa = this.profileForInput.adresa;
    this.data.user.telefon = this.profileForInput.telefon;

    console.log(this.data.user);
    console.log(UserService.dummyUserList);
    this.isEditing = true;
    console.log(this.isEditing);


  }
}
