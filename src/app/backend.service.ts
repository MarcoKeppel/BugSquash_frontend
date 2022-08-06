import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient) { }

  addTest(target: string, name: string, result: string, interactions) {

    let params = new HttpParams()
      .set("target", target)
      .set("name", name)
      .set("result", result)
      .set("interactions", JSON.stringify(interactions));

    console.log(params.getAll);

    return this.httpClient.get<any>(environment.BACKEND_URL + "/addTest", { params: params });
  }

  runTest(target) {

    let params = new HttpParams()
      .set("target", "TestHack8");

    return this.httpClient.get<any>(environment.BACKEND_URL + "/runTest", { params: params })
  }
}
