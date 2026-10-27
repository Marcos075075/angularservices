import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plantillas } from '../../models/plantilla';
import { ServicePlantilla } from '../../services/service.plantilla';

@Component({
  selector: 'app-plantilla-funcion-multiple-component',
  standalone: false,
  styleUrl: './plantilla-funcion-multiple-component.css',
  templateUrl: './plantilla-funcion-multiple-component.html',
})
export class PlantillaFuncionMultipleComponent implements OnInit{
  // @ViewChild("selectfunciones") selectFunciones!: ElementRef;
  public arrayPlantilla!: Array<Plantillas>;
  public funciones!: Array<string>

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServicePlantilla
  ){}

  async ngOnInit(): Promise<void> {
      this.funciones = await this._service.getFunciones2();
      this._cdr.detectChanges();
  }

  async mostrarPlantilla(selectElement: HTMLSelectElement): Promise<void> {
    let aux = [];
    for(let opcion of selectElement.options){
      if (opcion.selected == true) {
        aux.push(opcion.value);
      }
    }
    this.arrayPlantilla = await this._service.getPlantillasFunciones(aux);
    this._cdr.detectChanges();
  }
  // async mostrarPlantilla(): Promise<void> {
  //   let aux = [];
  //   //el control html select tiene una propiedad options
  //   for (let opcion of this.selectFunciones.nativeElement.options){
  //     if (opcion.selected == true){
  //       aux.push(opcion.value);
  //     }
  //   }
  //   this.arrayPlantilla = await this._service.getPlantillasFunciones(aux);
  //   this._cdr.detectChanges();
  // }

}