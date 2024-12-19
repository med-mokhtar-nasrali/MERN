import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "https://swapi.py4e.com/api/";

  constructor(private http: HttpClient) {}

  getOne(id: number, type: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${type}/${id}`)
  }
}
