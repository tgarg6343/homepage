import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {SearchConfig} from '../config/search.config';
import 'rxjs/add/operator/map';
@Injectable()
export class SearchService {

  constructor(private http:Http) { }

  getAllProducts(){
    console.log(SearchConfig.searchProducts);
    return this.http.get(SearchConfig.searchProducts).
    map((data)=> data.json(),
  (err)=> console.log("in service"+err))
  }
}
