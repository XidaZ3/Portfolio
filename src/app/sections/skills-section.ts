import { Component, input } from '@angular/core';
import { SkillGroup } from '../content/portfolio-content';

@Component({
  selector: 'app-skills-section',
  imports: [],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss',
})
export class SkillsSection {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly summary = input.required<string>();
  readonly groups = input.required<SkillGroup[]>();
}
