import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { knjiga } from './knjige.model';
import { MatPaginator } from '@angular/material/paginator';
import { knjigeService } from './knjige.service';
import { korpaService } from '../korpa.service';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/auth/user.service';
import { Router } from '@angular/router';
import { ItemAddedComponent } from 'src/app/korpa/item-added/item-added.component';

@Component({
  selector: 'app-knjige',
  templateUrl: './knjige.component.html',
  styleUrls: ['./knjige.component.css']
})
export class KnjigeComponent implements OnInit{
  displayedColumns = ['naziv','zanr','broj strana', 'izdavac','datum izdavanja','cena','recenzije','action'];

  knjigeSource = new MatTableDataSource<knjiga>();

  @ViewChild(MatPaginator) paginator !: MatPaginator;


  constructor(private KnjigeService : knjigeService, private KorpaService:korpaService,
               private dialog:MatDialog, private userService:UserService, private router: Router){}

  addBook(naziv: string, cena: number){
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
    this.knjigeSource.data = this.KnjigeService.getKnjige();
  }

  ngAfterViewInit(){
    this.knjigeSource.paginator = this.paginator;

  }

  doFilterKnjiga(filterValue : string){
    this.knjigeSource.filter = filterValue.trim().toLocaleLowerCase();  
  }

}
