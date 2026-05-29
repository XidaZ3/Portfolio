import { Component, input } from '@angular/core';
import { HeroContent } from '../content/portfolio-content';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  readonly content = input.required<HeroContent>();
}
