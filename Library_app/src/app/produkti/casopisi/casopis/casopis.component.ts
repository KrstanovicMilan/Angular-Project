import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { casopisiService } from '../casopisi.service';


@Component({
  selector: 'app-casopis',
  templateUrl: './casopis.component.html',
  styleUrls: ['./casopis.component.css']
})
export class CasopisComponent implements OnInit{
  
  public id: any;
  public nasCasopis:any;
  constructor(private route: ActivatedRoute, private CasopisiService:casopisiService) {}
  
  ngOnInit() {
     this.id = this.route.snapshot.paramMap.get('id');

     this.nasCasopis = this.CasopisiService.getCasopisById(this.id);
     
  }

  

}
