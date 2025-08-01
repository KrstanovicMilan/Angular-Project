import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-porudzbina',
  templateUrl: './porudzbina.component.html',
  styleUrls: ['./porudzbina.component.css']
})
export class PorudzbinaComponent {
  constructor(private router : Router){}

  homePage(){
    this.router.navigate(['']);
  }

}
