import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { casopis } from './casopisi.model';
import { casopisiService } from './casopisi.service';
import { MatPaginator } from '@angular/material/paginator';
import { korpaService } from '../korpa.service';
import { MatDialog } from '@angular/material/dialog';
import { ItemAddedComponent } from 'src/app/korpa/item-added/item-added.component';
import { UserService } from 'src/app/auth/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-casopisi',
  templateUrl: './casopisi.component.html',
  styleUrls: ['./casopisi.component.css']
})
export class CasopisiComponent implements OnInit {
  displayedColumns = ['naziv','domen','broj strana', 'izdavac','datum izdavanja','cena','recenzije','action'];

  casopisiSource = new MatTableDataSource<casopis>();

  @ViewChild(MatPaginator) paginator !: MatPaginator;
 

  constructor(private CasopisiService:casopisiService, private KorpaService:korpaService,
               private dialog:MatDialog, private userService:UserService, private router: Router){}

  addItem(naziv: string, cena: number){
    if(this.userService.currentUser.id!=0)
    {
      this.KorpaService.addItem(naziv,cena);
      this.dialog.open(ItemAddedComponent);
    }
    else{
      this.router.navigate(['/login']);
    }
    
  }

  ngOnInit(){
    this.casopisiSource.data = this.CasopisiService.getCasopisi();
  }

  ngAfterViewInit(){
    this.casopisiSource.paginator = this.paginator;
  
  }

  doFilter(filterValue : string){
    this.casopisiSource.filter = filterValue.trim().toLocaleLowerCase();  
  }

  

}
