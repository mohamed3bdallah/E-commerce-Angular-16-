import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/components/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  register(userData: object): Observable<any> {
    return this.http.post(
      `${environment.BaseUrl}/api/v1/auth/signup`,
      userData
    );
  }

  logIn(userData: object): Observable<any> {
    return this.http.post(
      `${environment.BaseUrl}/api/v1/auth/signin`,
      userData
    );
  }
}
