import {Component, OnInit} from '@angular/core';
import {PeticionesService} from '../../services/peticiones.service';


@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css']
})
export class ExternoComponent implements OnInit {

  public person: any;
  public id: string;
  public fecha:any;

  public new_user:any; 

  constructor(private _peticiones: PeticionesService) {
    this.id='2';
  }

  ngOnInit() {
    this.fecha=new Date();
    this.loadUser();
    this.new_user={
      name:"",
      job:""
    };
  }

  loadUser() {
    /*me subscribo para obtener el resultado, y creo dos callbacks, uno es para recojer
* el resultado, y el otro para recoger el error
* */
    this.person=false;/*para que poder poner el cargando */
    this._peticiones.getUser(this.id).subscribe(result => {
      this.person = result.data;
    }, error => {
      console.log(<any>error);
      /*captura ANY error*/
    });
  }

  onSubmit(form){
    this._peticiones.addUser(this.new_user).subscribe((response)=>{
      console.log(response);
      form.reset();
    }, (error)=>{
      console.log(error);
    });
  }

}
