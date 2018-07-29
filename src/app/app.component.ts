import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'FirstAngular';
  private _showVideoJuegos = true;
  public button='Show';

  public setshowVideoJuegos() {
    if(this._showVideoJuegos){
      this.button='Hide';
    }else{
      this.button='Show';
    }
    this._showVideoJuegos = !this._showVideoJuegos;
  }

  public getshowVideoJuegos(): boolean {
    return this._showVideoJuegos;
  }
}
