import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesBDService {

  constructor(private http:HttpClient) { }

  //Metodo que me trae todos los heroes


  getHeroes(unComo:string){
    return this.http.get(`${URL_SERVICIO_HEROES}/heroes`, {}).pipe(
      map((res:any)=>{
        console.log('HERORES', res);
        return res;
      })
    );
  }
}
