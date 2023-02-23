import { Controller, Get, Param } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { Movie } from './interface/movie';

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
}
