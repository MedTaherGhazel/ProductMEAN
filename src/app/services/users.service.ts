import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:8088/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type','Cookie');
    return this.http.get<any[]>(this.apiUrl,{ withCredentials:true});
  }

  deleteUser(userId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete(url);
  }

  getUserById(UserId: number): Observable<any> {
    const url = `${this.apiUrl}/${UserId}`;
    return this.http.get(url);
  }

  updateUser(userId: any, user: Object){
    const url = `${this.apiUrl}/${userId}`;
    return this.http.put(url, user);
  }
}
