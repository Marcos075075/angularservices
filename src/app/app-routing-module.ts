import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './components/comics-component/comics-component';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { CochesApiComponents } from './components/coches-api-components/coches-api-components';

const routes: Routes = [
  {path: "", component: ComicsComponent},
  {path: "personas", component: PersonasApiComponent},
  {path: "coches", component: CochesApiComponents},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
