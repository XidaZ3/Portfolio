import { Component, input } from '@angular/core';
import { SnapshotItem } from '../content/portfolio-content';

@Component({
  selector: 'app-professional-snapshot-section',
  imports: [],
  templateUrl: './professional-snapshot-section.html',
  styleUrl: './professional-snapshot-section.scss',
})
export class ProfessionalSnapshotSection {
  readonly title = input.required<string>();
  readonly items = input.required<SnapshotItem[]>();
}
