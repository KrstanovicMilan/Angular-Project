import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { KorpaComponent } from './korpa/korpa.component';
import { KnjigeComponent } from './produkti/knjige/knjige.component';
import { CasopisiComponent } from './produkti/casopisi/casopisi.component';
import { casopisiService } from './produkti/casopisi/casopisi.service';
import { CasopisComponent } from './produkti/casopisi/casopis/casopis.component';
import { korpaService } from './produkti/korpa.service';
import { ItemAddedComponent } from './korpa/item-added/item-added.component';
import { UserService } from './auth/user.service';
import { ProfilComponent } from './auth/profil/profil.component';
import { KnjigaComponent } from './produkti/knjige/knjiga/knjiga.component';
import { knjigeService } from './produkti/knjige/knjige.service';
import { PorudzbinaComponent } from './korpa/porudzbina/porudzbina.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent,
    KorpaComponent,
    KnjigeComponent,
    CasopisiComponent,
    CasopisComponent,
    ItemAddedComponent,
    ProfilComponent,
    KnjigaComponent,
    PorudzbinaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [casopisiService,korpaService,UserService,knjigeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
