import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  websiteUrl: string;
  routines = [];
  routinesResult = [];
  

  constructor(private httpClient: HttpClient) { }

  addTest(target: string, name: string, result: string, interactions) {

    let params = new HttpParams()
      .set("target", target)
      .set("name", name)
      .set("result", result)
      .set("interactions", JSON.stringify(interactions));

    console.log(params.getAll);

    this.routines.push({
      target: target,
      name: name,
      result: result,
      interactions: interactions,
      results: null
    });

    return this.httpClient.get<any>(environment.BACKEND_URL + "/addTest", { params: params });
  }

  runTest(target) {

    let params = new HttpParams()
      .set("target",  target);

    return this.httpClient.get<any>(environment.BACKEND_URL + "/runTest", { params: params })
  }

}
