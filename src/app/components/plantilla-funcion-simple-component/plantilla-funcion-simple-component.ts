import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServicePlantilla } from '../../services/service.plantilla';
import { Plantillas } from '../../models/plantilla';

@Component({
  selector: 'app-plantilla-funcion-simple-component',
  standalone: false,
  styleUrl: './plantilla-funcion-simple-component.css',
  templateUrl: './plantilla-funcion-simple-component.html',
})
export class PlantillaFuncionSimpleComponent implements OnInit{
  public arrayPlantilla!: Array<Plantillas>;
  public funciones!: string

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServicePlantilla
  ){}

  async ngOnInit(): Promise<void> {
      this.funciones = await this._service.getFunciones();
      this._cdr.detectChanges();
  }

  async mostrarPlantilla(func: string): Promise<void> {
    this.arrayPlantilla = await this._service.getPantillaFuncion(func);
    this._cdr.detectChanges();
  }
}
