import { Controller, Get, Param } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { Movie } from './interface/movie';
import { LocalStorage } from 'node-localstorage';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAPIKey(): string {
    return this.appService.getAPIKey();
  }

  @Get('movie/:moviename')
  findMovie(@Param() params) {
    return this.appService.findMovie(params.moviename);
  }

  @Get('favunfav/:imdbID')
  favOrUnfavMovie(@Param() params) {
    
    const localStorage = new LocalStorage('./scratch');
    

    const stored = localStorage.getItem('imbdIDs');
    if (stored === null || typeof(stored) == 'undefined') {
      localStorage.setItem('imbdIDs', [])
    } else {
      let old_Data = [];
      if(stored != ""){
         old_Data = JSON.parse(stored);
         if(old_Data.includes(params.imdbID)){
          old_Data.splice(old_Data.indexOf(params.imdbID), 1);
          localStorage.setItem('imbdIDs', JSON.stringify(old_Data));
         }else{
          old_Data.push(params.imdbID);
          localStorage.setItem('imbdIDs', JSON.stringify(old_Data));
         }
      }
      

    }

    return JSON.parse(localStorage.getItem('imbdIDs'));
  }
}
