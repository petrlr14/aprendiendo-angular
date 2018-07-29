import {Component, OnInit, DoCheck} from '@angular/core';
import {Configuracion} from '../../models/configuracion';
import {Zapatillas} from '../../models/Zapatillas';
import {ZapatillaService} from '../../services/zapatilla.service';

@Component({
  selector: 'app-zapatilla',
  templateUrl: 'zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit, DoCheck {
  private _title: string;
  private _zapatillas: Array<Zapatillas> = []/*no olvidar instanciarlo*/;
  private _configuracion;
  private _marca: Array<string>=[];
  public _miMarca:string;

  constructor(
    private _zapatillasService:ZapatillaService
  ) {
    this._title = Configuracion.title;
    this._configuracion = Configuracion;

  }

  ngOnInit(): void {
    this._zapatillas=this._zapatillasService.getZapatillas();/*se obtiene el valor del servicio*/
    this._zapatillas.forEach((item) => {
      if (this._marca.indexOf(item.marca)<-0) {
        this._marca.push(item.marca);
      }
    });
  }

  public pushZapatilla() {
    this._zapatillas.push(new Zapatillas('as', 12, 'das', 'das', false));
    if(this._marca.indexOf(this.zapatillas[this.zapatillas.length-1].marca)<0){
      this._marca.push(this.zapatillas[this.zapatillas.length-1].marca);
    }
  }

  get title(): string {
    return this._title;
  }

  get zapatillas(): Array<Zapatillas> {
    return this._zapatillas;
  }


  get marca(): Array<string> {
    return this._marca;
  }

  ngDoCheck(): void {

  }

  public showMarca(){
    alert(this._miMarca);
  }

  public deleteMarca(index):void{
    console.log(this._marca[index]);
    /*le dice desde donde va a eliminar, y cuantos, con eso solo borra el propio elemento*/
    this._marca.splice(index, 1);
  }

}
