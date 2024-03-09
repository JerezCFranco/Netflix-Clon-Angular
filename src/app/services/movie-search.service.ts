import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieSearchService {
  private api_key = '812011deb0fa28d2817112a5204b2960';
  private urlBase = 'https://api.themoviedb.org/3';
  private urlBaseSearch = 'https://api.themoviedb.org/3/search';
  private urlBasePopular = 'https://api.themoviedb.org/3/discover';
  private urlImg = 'https://image.tmdb.org/t/p/w200';
  private lenguageSpanish = 'language=es';
  private lenguageEnglish = 'language=en';

  async searchMovies(searchInput: string): Promise<any> {
    const url = `${this.urlBaseSearch}/movie?&${this.lenguageSpanish}&api_key=${this.api_key}&query=${searchInput}`;

    return await fetch(url).then((response) => response.json());
  }

  async PopularMovies(): Promise<any> {
    const options: any = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTIwMTFkZWIwZmEyOGQyODE3MTEyYTUyMDRiMjk2MCIsInN1YiI6IjY1NDQzYmEzNmJlYWVhMDEyYzhjZjdkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ML5gQ_ny0774BR6H9B8R_ux_mK-HqOr50fLsJNKx4X0',
      },
    };
    const url = `${this.urlBasePopular}/movie?include_adult=true&include_video=false&${this.lenguageSpanish}&page=1&sort_by=popularity.desc`;

    return await fetch(url, options).then((response) => response.json());
  }

  async RatedMovies(): Promise<any> {
    const options: any = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTIwMTFkZWIwZmEyOGQyODE3MTEyYTUyMDRiMjk2MCIsInN1YiI6IjY1NDQzYmEzNmJlYWVhMDEyYzhjZjdkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ML5gQ_ny0774BR6H9B8R_ux_mK-HqOr50fLsJNKx4X0',
      },
    };
    const url = `${this.urlBase}/movie/top_rated?${this.lenguageSpanish}-US&page=1`;

    return await fetch(url, options).then((response) => response.json());
  }

  async searchShow(searchInput: string): Promise<any> {
    const url = `${this.urlBaseSearch}/tv?&${this.lenguageSpanish}&api_key=${this.api_key}&query=${searchInput}`;

    return await fetch(url).then((response) => response.json());
  }

  async PopularShows(): Promise<any> {
    const options: any = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTIwMTFkZWIwZmEyOGQyODE3MTEyYTUyMDRiMjk2MCIsInN1YiI6IjY1NDQzYmEzNmJlYWVhMDEyYzhjZjdkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ML5gQ_ny0774BR6H9B8R_ux_mK-HqOr50fLsJNKx4X0',
      },
    };
    const url = `${this.urlBasePopular}/tv?include_adult=true&include_video=false&${this.lenguageSpanish}&page=1&sort_by=popularity.desc`;

    return await fetch(url, options).then((response) => response.json());
  }

  async RatedShows(): Promise<any> {
    const options: any = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTIwMTFkZWIwZmEyOGQyODE3MTEyYTUyMDRiMjk2MCIsInN1YiI6IjY1NDQzYmEzNmJlYWVhMDEyYzhjZjdkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ML5gQ_ny0774BR6H9B8R_ux_mK-HqOr50fLsJNKx4X0',
      },
    };
    const url = `${this.urlBase}/tv/top_rated?${this.lenguageSpanish}&page=1`;

    return await fetch(url, options).then((response) => response.json());
  }
  constructor() {}
}
