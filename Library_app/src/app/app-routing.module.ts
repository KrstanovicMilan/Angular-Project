import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { KorpaComponent } from "./korpa/korpa.component";
import { KnjigeComponent } from "./produkti/knjige/knjige.component";
import { CasopisiComponent } from "./produkti/casopisi/casopisi.component";
import { CasopisComponent } from "./produkti/casopisi/casopis/casopis.component";
import { ProfilComponent } from "./auth/profil/profil.component";
import { KnjigaComponent } from "./produkti/knjige/knjiga/knjiga.component";

const rute: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'korpa', component: KorpaComponent },
    { path: 'knjige', component: KnjigeComponent },
    { path: 'casopisi', component: CasopisiComponent },
    { path: 'casopis/:id', component: CasopisComponent },
    { path: 'knjige/:id', component: KnjigaComponent },
    { path: 'profil', component: ProfilComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(rute)],
    exports: [RouterModule]
})

export class RoutingModule { }