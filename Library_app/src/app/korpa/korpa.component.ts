import { Component } from '@angular/core';
import { korpaService } from '../produkti/korpa.service';
import { korpaItem } from '../produkti/korpa.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PorudzbinaComponent } from './porudzbina/porudzbina.component';

@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html',
  styleUrls: ['./korpa.component.css']
})
export class KorpaComponent {
  displayedColumns = ['naziv','cena','kvantitet','action'];
  
  korpaSource = new MatTableDataSource<korpaItem>();

  constructor(private KorpaService:korpaService, private dialog : MatDialog) {}

  kvantitetMinus(id:number){
    this.KorpaService.kvantitetMinus(id);

  }
  kvantitetPlus(id:number){
    this.KorpaService.kvantitetPlus(id);

  }
  isdisabled(id:number) : boolean
  {
    var item = this.KorpaService.getkorpaItemById(id);
    if(item.kvantitet==1)
    {
      return true;
    }
    else{
      return false;
    }
  }

  ukupnaCena():number{
    

    var ukupnaCena = 0;

    korpaService.korpaItems.forEach(item=>{
      ukupnaCena = ukupnaCena + item.cena * item.kvantitet;
    })

    return ukupnaCena;

  }

  porudzbina(){
    this.dialog.open(PorudzbinaComponent);
    this.KorpaService.delItems();
    this.korpaSource.data = this.KorpaService.getkorpaItems();

  }

  delItem(id:number)
  {
    this.KorpaService.delItem(id);
    this.korpaSource.data = this.KorpaService.getkorpaItems();
  }

  isEmpty():boolean{
    var items:Array<korpaItem> = this.KorpaService.getkorpaItems();
    if(items[0]==undefined)
    {
      return true;
    }
    else{
      return false;
    }
  }

  ngOnInit(){
    
    this.korpaSource.data = this.KorpaService.getkorpaItems();
  
  }



}
