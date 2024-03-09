import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MovieSearchService } from './services/movie-search.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Netflix Clon';
  searchInput: string = '';
  results: any[] = [];
  valido: any[] = [];
  resultsPopular: any[] = [];
  posterPath: string = '';

  constructor(
    private movieSearchService: MovieSearchService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Netflix Clon');
  }

  async onSearchClick(): Promise<void> {
    try {
      const movies = await this.movieSearchService.searchMovies(
        this.searchInput
      );
      this.results = movies.results;
      this.valido = movies.results.total_results;
    } catch (error) {
      console.error('Error al buscar películas:', error);
    }
  }

  async onPopularClick(): Promise<void> {
    try {
      const movies = await this.movieSearchService.PopularMovies();
      this.resultsPopular = movies.results.slice(0, 15);
    } catch (error) {
      console.error('Error al obtener películas populares:', error);
    }
  }

  scrollLeft() {
    const scrollableContainer = document.querySelector('.scrollable-container');
    if (scrollableContainer) {
      let currentPosition = scrollableContainer.scrollLeft;
      const targetPosition = currentPosition - 200; // Desplazamiento hacia la izquierda

      const scrollStep = () => {
        if (currentPosition > targetPosition) {
          currentPosition -= 10; // Ajusta la velocidad de desplazamiento cambiando este valor
          scrollableContainer.scrollLeft = currentPosition;
          setTimeout(scrollStep, 10); // Ajusta el tiempo de espera para cada paso
        }
      };

      scrollStep();
    }
  }

  scrollRight() {
    const scrollableContainer = document.querySelector('.scrollable-container');
    if (scrollableContainer) {
      let currentPosition = scrollableContainer.scrollLeft;
      const targetPosition = currentPosition + 200; // Desplazamiento hacia la derecha

      const scrollStep = () => {
        if (currentPosition < targetPosition) {
          currentPosition += 10; // Ajusta la velocidad de desplazamiento cambiando este valor
          scrollableContainer.scrollLeft = currentPosition;
          setTimeout(scrollStep, 10); // Ajusta el tiempo de espera para cada paso
        }
      };

      scrollStep();
    }
  }
}
