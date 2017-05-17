import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// applying the @Injectable() decorator ​from the start ensures consistency and future-proofing
@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }
}