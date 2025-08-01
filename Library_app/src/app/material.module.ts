

import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort'; 


@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatCardModule,
        MatSortModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatCardModule,
        MatSortModule
    ]
})

export class MaterialModule { }