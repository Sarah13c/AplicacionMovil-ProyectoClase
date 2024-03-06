import { Component, Input, OnInit } from '@angular/core';
import { FotoHeroe } from 'src/app/interfaces/fotosHeroe.interface';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss'],
})
export class FotosComponent  implements OnInit {

  @Input () unasFoto: FotoHeroe [] = [];
  constructor() { }

  ngOnInit() {}

}
