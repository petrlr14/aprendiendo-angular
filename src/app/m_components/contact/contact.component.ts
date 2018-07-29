import { Component, OnInit } from '@angular/core';
import { ContactoUsuarios } from '../../models/ContactoUsuarios';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public user: ContactoUsuarios;
  constructor() {
    this.user = new ContactoUsuarios('', '', '', '');
  }

  ngOnInit() {
  }

  public submit(form) {
    form.reset();/* pone a null los objetos vinculados al form pero en este caso no es bueno */
  }


}
