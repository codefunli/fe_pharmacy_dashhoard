import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { LoginAccount } from 'src/app/model/login-account';
import { UserToken } from 'src/app/model/user-token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly URL_BE = 'http://localhost:8080/api/user/';

  constructor(private  http: HttpClient) {
  }

  loginAccount(loginAccount: LoginAccount) {
    return this.http.post<UserToken>(`${this.URL_BE}loginAccount`, loginAccount);
  }


}
