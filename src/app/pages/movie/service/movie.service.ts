import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpParamsOptions} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pageable} from "../../../shared/services/pageable.service";

export interface Movie {
  movieSeq : string;
  krName: string;
  enName: string;
  releaseDate: string;
  detail: string;
  fee: string;
}

const URL = '/dna/practice/movie';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) {
  }

  list(params: Pageable): Observable<any> {
    return this.http.get<any>(`${URL}/selectAll`, {params: params as any});
  }

  find(movieSeq: number): Observable<Movie> {
    return this.http.get<any>(`${URL}/${movieSeq}`);
  }

  create(movie: Movie): Observable<Movie> {
    return this.http.post<any>(`${URL}/insert`, movie);
  }

  update(id: number, movie: Movie): Observable<Movie> {
    return this.http.put<any>(`${URL}/${id}`, movie);
  }

  delete(id: number): Observable<Movie> {
    return this.http.delete<any>(`${URL}/${id}`);
  }

}
