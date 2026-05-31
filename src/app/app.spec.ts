import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the English professional profile by default', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'I build web products with Angular, Vue, and Rails',
    );
    expect(compiled.textContent).toContain('Software Engineer at Moku');
    expect(compiled.textContent).toContain('Computer Science, University of Padova');
    expect(compiled.textContent).toContain('How I can help');
    expect(compiled.textContent).toContain('I can build product screens');
  });

  it('should render credibility before services', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const snapshot = compiled.querySelector('#profile') as HTMLElement;
    const work = compiled.querySelector('#work') as HTMLElement;
    const services = compiled.querySelector('#services') as HTMLElement;

    expect(snapshot).toBeTruthy();
    expect(work).toBeTruthy();
    expect(services).toBeTruthy();
    expect(snapshot.compareDocumentPosition(services) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(work.compareDocumentPosition(services) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it('should switch to Italian content', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.language-toggle') as HTMLButtonElement;
    button.click();
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Sviluppo prodotti web con Angular, Vue e Rails',
    );
    expect(compiled.textContent).toContain('Software Engineer presso Moku');
    expect(compiled.textContent).toContain('Come posso aiutare');
    expect(compiled.textContent).toContain('Posso sviluppare schermate di prodotto');
  });
});
