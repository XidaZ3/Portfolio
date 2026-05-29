import { Component, input } from '@angular/core';
import { CaseStudy } from '../content/portfolio-content';

@Component({
  selector: 'app-case-studies-section',
  imports: [],
  templateUrl: './case-studies-section.html',
  styleUrl: './case-studies-section.scss',
})
export class CaseStudiesSection {
  readonly title = input.required<string>();
  readonly summary = input.required<string>();
  readonly cases = input.required<CaseStudy[]>();
}
