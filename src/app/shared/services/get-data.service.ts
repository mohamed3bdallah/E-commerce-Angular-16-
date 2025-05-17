import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../components/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(private readonly http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get(`${environment.BaseUrl}/api/v1/products`)
  }
}
