import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { knjigeService } from '../knjige.service';

@Component({
  selector: 'app-knjiga',
  templateUrl: './knjiga.component.html',
  styleUrls: ['./knjiga.component.css']
})
export class KnjigaComponent implements OnInit{
  public id: any;
  public naseKnjige:any;
  constructor(private route: ActivatedRoute, private KnjigeService : knjigeService) {}
  
  ngOnInit() {
     this.id = this.route.snapshot.paramMap.get('id');

     this.naseKnjige = this.KnjigeService.getKnjigaById(this.id);
     
  }


}
