import { Component, computed, signal } from '@angular/core';
import { portfolioContent, LanguageCode } from './content/portfolio-content';
import { CaseStudiesSection } from './sections/case-studies-section';
import { ContactSection } from './sections/contact-section';
import { CredentialsSection } from './sections/credentials-section';
import { HeroSection } from './sections/hero-section';
import { ProfessionalSnapshotSection } from './sections/professional-snapshot-section';
import { ServicesSection } from './sections/services-section';
import { SiteFooter } from './sections/site-footer';
import { SkillsSection } from './sections/skills-section';

@Component({
  selector: 'app-root',
  imports: [
    HeroSection,
    ProfessionalSnapshotSection,
    ServicesSection,
    CaseStudiesSection,
    SkillsSection,
    CredentialsSection,
    ContactSection,
    SiteFooter,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly selectedLanguage = signal<LanguageCode>('en');
  protected readonly content = computed(() => portfolioContent[this.selectedLanguage()]);

  protected toggleLanguage(): void {
    this.selectedLanguage.update((language) => (language === 'en' ? 'it' : 'en'));
  }
}
