import { Category } from './../../models/Category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the CategoriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoriesProvider {

  url:string='https://5bcce576cf2e850013874767.mockapi.io/task/categories';

  constructor(public http: HttpClient) {
    console.log('Hello CategoriesProvider Provider');
  }

  getCategories():Observable<Category[]>{
   return this.http
    .get(this.url)
    .pipe(
      map((data:Category[])=>{
      console.log(data);
      return data;
    }));
  }
}
