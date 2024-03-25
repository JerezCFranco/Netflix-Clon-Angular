import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MovieSearchService } from '../services/movie-search.service';
import { Title } from '@angular/platform-browser';
// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-browser',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './browser.component.html',
  styleUrl: './browser.component.css',
})
export class BrowserComponent implements OnInit {
  title = 'Netflix Clon';
  searchInput: string = '';
  searchInput2: string = '';
  results: any[] = [];
  resultsTv: any[] = [];
  resultsPopular: any[] = [];
  resultsTvPopular: any[] = [];
  posterPath: string = '';
  movieSelector: string = '';
  tvSelector: string = '';
  // auth = inject(AuthService);
  // name = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  // userProfileImg = JSON.parse(sessionStorage.getItem('loggedInUser')!).picture;
  // email = JSON.parse(sessionStorage.getItem('loggedInUser')!).email;
  modoNocturnoActivo: boolean = false;
  navbarExpanded: boolean = false;
  navcolor: string = '';

  constructor(
    private movieSearchService: MovieSearchService,
    private titleService: Title,
    private elementRef: ElementRef
  ) {}

  toggleModoNocturno() {
    this.modoNocturnoActivo = !this.modoNocturnoActivo;
    const body = this.elementRef.nativeElement.ownerDocument.body;
    if (this.modoNocturnoActivo) {
      body.style.background = 'rgb(15, 15, 15)';
      this.navcolor = 'dark';
    } else {
      body.style.background = 'rgb(229, 229, 229)';
      this.navcolor = 'white';
    }
  }

  toggleNavbar() {
    this.navbarExpanded = !this.navbarExpanded;
  }

  ngOnInit(): void {
    this.toggleModoNocturno();
    this.titleService.setTitle('Netflix Clon');
    this.onRatedMovieClick();
    this.onRatedTvClick();
  }

  // singOut() {
  //   sessionStorage.removeItem('loggedInUser');
  //   this.auth.singOut();
  // }

  async onSearchMovieClick(): Promise<void> {
    try {
      const movies = await this.movieSearchService.searchMovies(
        this.searchInput
      );
      this.results = movies.results;
    } catch (error) {
      console.error('Error al buscar la serie:', error);
    }
  }

  async onSearchTvClick(): Promise<void> {
    try {
      const movies = await this.movieSearchService.searchShow(
        this.searchInput
      );
      this.resultsTv = movies.results;
    } catch (error) {
      console.error('Error al buscar películas:', error);
    }
  }

  async onSearchAllClick(): Promise<void> {
    try {
      await this.onSearchMovieClick();
      await this.onSearchTvClick();
    } catch (error) {
      console.error('Error al buscar películas y shows:', error);
    }
  }

  async onPopularMovieClick(): Promise<void> {
    try {
      const movies = await this.movieSearchService.PopularMovies();
      this.resultsPopular = movies.results.slice(0, 20);
      this.movieSelector = '1';
    } catch (error) {
      console.error('Error al obtener películas populares:', error);
    }
  }

  async onRatedMovieClick(): Promise<void> {
    try {
      const movies = await this.movieSearchService.RatedMovies();
      this.resultsPopular = movies.results.slice(0, 20);
      this.movieSelector = '2';
    } catch (error) {
      console.error('Error al obtener películas populares:', error);
    }
  }

  async onPopularTvClick(): Promise<void> {
    try {
      const movies = await this.movieSearchService.PopularShows();
      this.resultsTvPopular = movies.results.slice(0, 20);
      this.tvSelector = '1';
    } catch (error) {
      console.error('Error al obtener películas populares:', error);
    }
  }

  async onRatedTvClick(): Promise<void> {
    try {
      const movies = await this.movieSearchService.RatedShows();
      this.resultsTvPopular = movies.results.slice(0, 20);
      this.tvSelector = '2';
    } catch (error) {
      console.error('Error al obtener películas populares:', error);
    }
  }
  scrollLeft() {
    const scrollableContainer = document.querySelector('.scrollable-container');
    if (scrollableContainer) {
      let currentPosition = scrollableContainer.scrollLeft;
      const targetPosition = currentPosition - 200;

      const scrollStep = () => {
        if (currentPosition > targetPosition) {
          currentPosition -= 10;
          scrollableContainer.scrollLeft = currentPosition;
          setTimeout(scrollStep, 10);
        }
      };

      scrollStep();
    }
  }
  scrollLeftTv() {
    const scrollableContainerTv = document.querySelector('.scrollable-container-tv');
    if (scrollableContainerTv) {
      let currentPosition = scrollableContainerTv.scrollLeft;
      const targetPosition = currentPosition - 200;

      const scrollStep = () => {
        if (currentPosition > targetPosition) {
          currentPosition -= 10;
          scrollableContainerTv.scrollLeft = currentPosition;
          setTimeout(scrollStep, 10);
        }
      };

      scrollStep();
    }
  }
  scrollRight() {
    const scrollableContainer = document.querySelector('.scrollable-container');
    if (scrollableContainer) {
      let currentPosition = scrollableContainer.scrollLeft;
      const targetPosition = currentPosition + 200;

      const scrollStep = () => {
        if (currentPosition < targetPosition) {
          currentPosition += 10;
          scrollableContainer.scrollLeft = currentPosition;
          setTimeout(scrollStep, 10);
        }
      };

      scrollStep();
    }
  }
  scrollRightTv() {
    const scrollableContainerTv = document.querySelector('.scrollable-container-tv');
    if (scrollableContainerTv) {
      let currentPosition = scrollableContainerTv.scrollLeft;
      const targetPosition = currentPosition + 200;

      const scrollStep = () => {
        if (currentPosition < targetPosition) {
          currentPosition += 10;
          scrollableContainerTv.scrollLeft = currentPosition;
          setTimeout(scrollStep, 10); 
        }
      };
      scrollStep();
    }
  }
}
