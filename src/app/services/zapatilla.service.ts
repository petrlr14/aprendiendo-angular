import {Injectable} from '@angular/core';
import {Zapatillas} from '../models/Zapatillas';

@Injectable()
export class ZapatillaService {/*se importa en app.module.ts */

  private _zapatillas:Array<Zapatillas>;

  constructor() {
    this._zapatillas=[
      new Zapatillas('Gucci', 12, 'gucci', 'das', true),
      new Zapatillas('Gucci', 12, 'gucci', 'das', true),
      new Zapatillas('Gucci', 12, 'gucci', 'das', true),
      new Zapatillas('Gucci', 12, 'gucci', 'das', true)
    ];
  }


  getZapatillas(): Array<Zapatillas> {
    return this._zapatillas;
  }

}
