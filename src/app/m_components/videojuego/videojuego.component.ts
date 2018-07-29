import {
  Component, OnInit/*Hook, son los callback de android en angular*/, DoCheck /*
  cuando hay yn canbio en el componente o en la aplicacion
*/, OnDestroy /*se ejecuta cuando */
} from '@angular/core';

@Component({
  selector: 'app-videojuego',
  templateUrl: 'videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy/*un mundo de posibilidades con la multiple herencia e implementacion*/ {
  public titulo: string;
  public listado: Array<string> = ['game 1', 'game 2', 'game 3'];

  constructor() {
    this.titulo = 'Componente de videojuegos';
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
  }

  public setTitle():void{
    this.titulo='Nuevo titulo';
  }

  ngOnDestroy(): void {
    console.log('holi');
  }
}
