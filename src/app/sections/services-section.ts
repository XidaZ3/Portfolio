import { Component, input } from '@angular/core';
import { ServiceItem } from '../content/portfolio-content';

@Component({
  selector: 'app-services-section',
  imports: [],
  templateUrl: './services-section.html',
  styleUrl: './services-section.scss',
})
export class ServicesSection {
  readonly title = input.required<string>();
  readonly summary = input.required<string>();
  readonly services = input.required<ServiceItem[]>();
}
