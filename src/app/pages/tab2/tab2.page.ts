import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  mostrar: boolean = true;
  evento:any = {nombre: 'dia1',
                lugar:'cali',
                fecha:'2024/12/31'
              };

  constructor() {
  }

  cambiarEstado() {

    const nombre = '';
    let nombre2 = '';

    this.mostrar = !this.mostrar;
    console.log(this.mostrar);
  }
  
}
