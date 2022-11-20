import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardApiResponse } from '@ct-core/models/card-api.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private readonly http: HttpClient) { }

  getCards() {
    return this.http.get<CardApiResponse[]>(`${environment.apiUrl}/cards`);
  }
}
