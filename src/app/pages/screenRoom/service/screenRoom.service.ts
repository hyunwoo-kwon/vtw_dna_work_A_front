import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpParamsOptions} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pageable} from "../../../shared/services/pageable.service";

export interface ScreenRoomSeat {
  screenRoomSeatSeq: string;
  screenRoomSeq: string;
  seatRow: string;
  seatColumn: string;
  useYn:string;
}

export interface ScreenRoom {
  screenRoomSeq : string;
  totalSeatRow: string;
  totalSeatColumn: string;
  screenRoomSeatList: ScreenRoomSeat[];

}

const URL = '/dna/practice/screenRoom';

@Injectable()
export class ScreenRoomService {

  constructor(private http: HttpClient) {
  }

  list(params: Pageable): Observable<any> {
    return this.http.get<any>(`${URL}/selectAll`, {params: params as any});
  }

  find(screenRoomSeq: number): Observable<ScreenRoom> {
    return this.http.get<any>(`${URL}/${screenRoomSeq}`);
  }

  create(screenRoom: ScreenRoom): Observable<ScreenRoom> {
    return this.http.post<any>(`${URL}/insert`, screenRoom);
  }

  update(id: number, employee: ScreenRoom): Observable<ScreenRoom> {
    return this.http.put<any>(`${URL}/${id}`, employee);
  }

  delete(id: number): Observable<ScreenRoom> {
    return this.http.delete<any>(`${URL}/${id}`);
  }

}
