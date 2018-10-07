import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { Pessoa } from './pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My project!';
  pessoa: Pessoa = {nome: "", cpf: "", email: ""};
  pessoas: Pessoa[] = [];

   gravar(a: Pessoa): void {
     this.pessoas.push(a);
     this.pessoa = {nome: "", cpf: "", email: ""};
   }
}
