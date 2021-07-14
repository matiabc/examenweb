import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{CatalogoComponent} from '../app/catalogo/catalogo.component'
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { QuejasComponent } from './quejas/quejas.component';

const routes: Routes = [
  {path: 'catalogo',component: CatalogoComponent},
  {path: 'quejas', component: QuejasComponent},
  {path: 'home', component: HomeComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'footer', component: FooterComponent}


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
