import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { Movie } from './interface/movie';


@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  private readonly movie: Movie[] = [];

  //http://www.omdbapi.com/?i=tt0499549 @todo list favs
  
  getAPIKey(): string {
    let apiKey = process.env.APIKEY;
    return apiKey;
  }

  findMovie(movieName) {
    //http://localhost:3000/movie/avatar
    let apiKey = this.getAPIKey();
    const url = "https://www.omdbapi.com/?apikey="+apiKey+"&s="+movieName;
    return this.httpService.get(url).pipe(
      map(response => response.data)
    );
  }


}
