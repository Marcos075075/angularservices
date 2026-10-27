import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceCoches } from '../../services/service.coches';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-coches-api-components',
  standalone: false,
  styleUrl: './coches-api-components.css',
  templateUrl: './coches-api-components.html',
})
export class CochesApiComponents implements OnInit{
  public arrayCoches!: Array<Coche>;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceCoches
  ){}

  async ngOnInit(): Promise<void> {
      this.arrayCoches = await this._service.getCochesAsync();
      this._cdr.detectChanges()
  }
}
