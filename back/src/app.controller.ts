import { Controller, Get, Param } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { Movie } from './interface/movie';
import { LocalStorage } from 'node-localstorage';

const localStorage = new LocalStorage('./scratch');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAPIKey(): string {
    //return this.appService.getAPIKey();
    return "silence is golden"
  }

  @Get('movie/:moviename') //http://localhost:3000/movie/avatar
  findMovie(@Param() params) {
    return this.appService.findMovie(params.moviename);
  }

  @Get('favs/') //http://localhost:3000/favs/
  getFavs(@Param() params) {
    return JSON.parse(localStorage.getItem('imbdIDs'));
  }

  @Get('favunfav/:imdbID') //http://localhost:3000/favunfav/tt0499544
  favOrUnfavMovie(@Param() params) {
    
    const stored = localStorage.getItem('imbdIDs');
    
    if (stored === null || typeof(stored) == 'undefined') {
      let old_Data = [];
      old_Data.push(params.imdbID);
      localStorage.setItem('imbdIDs', JSON.stringify(old_Data));
      
    } else {
      
      let old_Data = [];
      if(stored != ""){
         old_Data = JSON.parse(stored);
         if(old_Data.includes(params.imdbID)){
          old_Data.splice(old_Data.indexOf(params.imdbID), 1);
         }else{
          old_Data.push(params.imdbID);
         }
      }else{
        old_Data.push(params.imdbID);
      localStorage.setItem('imbdIDs', JSON.stringify(old_Data));
      }
      localStorage.setItem('imbdIDs', JSON.stringify(old_Data));
    }

    return JSON.parse(localStorage.getItem('imbdIDs'));
  }

  @Get('ratings/') //http://localhost:3000/ratings/
  getRatings(@Param() params) {
    return JSON.parse(localStorage.getItem('rating'));
  }

  @Get('rating/:rate/:imdbID') //http://localhost:3000/rating/1/tt0499544
  rating(@Param() params) {
    
    const ratings = localStorage.getItem('rating');

     if (ratings === null || typeof(ratings) == 'undefined') {
      localStorage.setItem('rating', [])
    } else {
      let old_Data = [];
      if(ratings != ""){
         old_Data = JSON.parse(ratings);


         let i = 0;
        while (i < old_Data.length) {
          if(old_Data[i].includes(params.imdbID)){
            old_Data.splice(i, 1)
          }
          i++;
        }

         const rate = {
          imdbID: params.imdbID,
          rating: params.rate
        };
        
        old_Data.push(JSON.stringify(rate));

        
      }
      localStorage.setItem('rating', JSON.stringify(old_Data));
    }

    return JSON.parse(localStorage.getItem('rating'));
  }

}
