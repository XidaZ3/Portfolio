import { Component, input } from '@angular/core';
import { CredentialItem } from '../content/portfolio-content';

@Component({
  selector: 'app-credentials-section',
  imports: [],
  templateUrl: './credentials-section.html',
  styleUrl: './credentials-section.scss',
})
export class CredentialsSection {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly credentials = input.required<CredentialItem[]>();
}
