import { Component, computed, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactContent, contactEmail, linkedInUrl } from '../content/portfolio-content';

@Component({
  selector: 'app-contact-section',
  imports: [FormsModule],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {
  readonly content = input.required<ContactContent>();
  readonly contactEmail = contactEmail;
  readonly linkedInUrl = linkedInUrl;

  readonly name = signal('');
  readonly email = signal('');
  readonly projectType = signal('');
  readonly message = signal('');

  readonly mailtoHref = computed(() => {
    const content = this.content();
    const body = [
      `${content.nameLabel}: ${this.name() || '-'}`,
      `${content.emailLabel}: ${this.email() || '-'}`,
      `${content.typeLabel}: ${this.projectType() || '-'}`,
      '',
      this.message() || '-',
    ].join('\n');

    return `mailto:${contactEmail}?subject=${encodeURIComponent(content.mailSubject)}&body=${encodeURIComponent(body)}`;
  });
}
