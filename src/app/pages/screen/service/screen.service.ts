import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpParamsOptions} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pageable} from "../../../shared/services/pageable.service";
import { DxSliderModule } from "devextreme-angular";

export interface Movie {
  movieSeq : string;
  krName: string;
  enName: string;
  releaseDate: string;
  detail: string;
  fee: string;
}

export interface Screen {
  screenSeq : string;
  movieSeq: string;
  screenRoomSeq: string;
  screenDate : string;
  screenRound: string;
  startTime: string;
  endTime: string;

  basicFee: string;
  discountFee: string;
  totalFee: string;
  movie: Movie;

}

const URL = '/dna/practice/screen';

@Injectable()
export class ScreenService {

  constructor(private http: HttpClient) {
  }

  list(params: Pageable): Observable<any> {
    return this.http.get<any>(`${URL}/selectAll`, {params: params as any});
  }

  find(screenRoomSeq: number): Observable<Screen> {
    return this.http.get<any>(`${URL}/${screenRoomSeq}`);
  }

  create(screenRoom: Screen): Observable<Screen> {
    return this.http.post<any>(`${URL}/insert`, screenRoom);
  }

  update(id: number, employee: Screen): Observable<Screen> {
    return this.http.put<any>(`${URL}/${id}`, employee);
  }

  delete(id: number): Observable<Screen> {
    return this.http.delete<any>(`${URL}/${id}`);
  }

}
