import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './components/comics-component/comics-component';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { CochesApiComponents } from './components/coches-api-components/coches-api-components';
import { PlantillaFuncionSimpleComponent } from './components/plantilla-funcion-simple-component/plantilla-funcion-simple-component';
import { PlantillaFuncionMultipleComponent } from './components/plantilla-funcion-multiple-component/plantilla-funcion-multiple-component';

const routes: Routes = [
  {path: "", component: ComicsComponent},
  {path: "personas", component: PersonasApiComponent},
  {path: "coches", component: CochesApiComponents},
  {path: "plantillas", component: PlantillaFuncionSimpleComponent},
  {path: "plantillasmult", component: PlantillaFuncionMultipleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
