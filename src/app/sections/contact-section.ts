import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactContent, contactEmail, linkedInUrl } from '../content/portfolio-content';

const formspreeEndpoint = 'https://formspree.io/f/xbdbeqvq';

type SubmissionState = 'idle' | 'sending' | 'sent' | 'error';

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
  readonly phone = signal('');
  readonly projectType = signal('');
  readonly message = signal('');
  readonly submissionState = signal<SubmissionState>('idle');

  async submitForm(): Promise<void> {
    if (!this.isFormReady()) {
      return;
    }

    const content = this.content();
    this.submissionState.set('sending');

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.name(),
          email: this.email(),
          phone: this.phone(),
          projectType: this.projectType(),
          message: this.message(),
          _subject: content.mailSubject,
        }),
      });

      if (!response.ok) {
        throw new Error('Formspree submission failed');
      }

      this.name.set('');
      this.email.set('');
      this.phone.set('');
      this.projectType.set('');
      this.message.set('');
      this.submissionState.set('sent');
    } catch {
      this.submissionState.set('error');
    }
  }

  isFormReady(): boolean {
    return Boolean(
      this.name().trim() &&
        this.email().trim() &&
        this.phone().trim() &&
        this.projectType() &&
        this.message().trim(),
    );
  }
}
