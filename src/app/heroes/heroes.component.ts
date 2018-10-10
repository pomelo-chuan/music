import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  }

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log('TCL: HeroesComponent -> hero', hero);
  }

  getHeros(): void {
    this.heroes = this.heroService.getHeroes();
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeros();
  }

}
