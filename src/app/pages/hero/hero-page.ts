import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.html',
  imports: [UpperCasePipe],
})
export class HeroPage {
  protected readonly title = signal('hero');

  protected name = signal('ironman');
  protected age = signal(45);

  // las señales computadas son de solo lectura, no se pueden modificar, solo se pueden leer
  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  // cada vez que la señal name cambie, la señal capitalizeName se actualizará,e s decir se vuelve a llamar la función
  capitalizeName = computed(() => this.name().toUpperCase());

  protected getHeroDescription(): string {
    return `${this.name()} - ${this.age()}`;
  }

  protected changeHero(): void {
    this.name.set('spiderman');
  }

  protected changeAge(): void {
    this.age.set(20);
  }

  protected resetForm(): void {
    this.name.set('ironman');
    this.age.set(45);
  }
}
