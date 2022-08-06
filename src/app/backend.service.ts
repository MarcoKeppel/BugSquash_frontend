import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient) { }

  addTest(url: string, interactions) {

    let params = new HttpParams();
    params.set("target", url);
    params.set("interactions", JSON.stringify(interactions));

    return this.httpClient.get(environment.BACKEND_URL + "/addTest", { params: params });
  }
}
