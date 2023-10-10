import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDisplyComponent } from './news-disply/news-disply.component';

const routes: Routes = [
  {path:'',component:NewsDisplyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
