import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DesignComponent } from './pages/design/design.component';
import { WebComponent } from './pages/web/web.component';
import { ChooseComponent } from './pages/choose/choose.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
  {path: 'home', component: PortfolioComponent},
  {path: 'about', component:AboutComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'whatido', component:ChooseComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'design', component:DesignComponent},
  {path: 'item/:id', component:ItemComponent},
  {path: 'search/:term', component:SearchComponent},
  {path: 'web-exp', component:WebComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
