import { Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  private _name:string;
  private _followers:number;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit() {
    /*Me subscribo al parametro que se ingresa en la url
    * cuando se recarga la pagina, o mas bien cuando se cambia la ruta,
    * se vuelve a crear el objeto, y así obtengo el ul
    * */
    this._route.params.subscribe((params:Params)=>{
      this._name=params.nombre;
      this._followers=+params['followers'];/*con ese + casteo a number*/
      console.log(typeof params['followers'],  typeof this._followers);
      /*o tambien se puede así, como parametro asociativo o clave-valor
      * this.name=params['nombre'];
      * */
    });
  }

  get name():string{
    return this._name;
  }

  get followers():number{
    return this._followers;
  }

  public redirigir(){
    this._router.navigate(['/home']);
  }
}
