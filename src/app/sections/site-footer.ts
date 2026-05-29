import { Component, input } from '@angular/core';
import { FooterContent } from '../content/portfolio-content';

@Component({
  selector: 'app-site-footer',
  imports: [],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  readonly content = input.required<FooterContent>();
}
