import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapeNewArticlesComponent } from './scrape-new-articles.component';

describe('ScrapeNewArticlesComponent', () => {
  let component: ScrapeNewArticlesComponent;
  let fixture: ComponentFixture<ScrapeNewArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrapeNewArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrapeNewArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
