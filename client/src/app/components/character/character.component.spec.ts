import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CharacterComponent } from './character.component';
import { Store } from '@ngrx/store';
import { TestStore } from '../../stubs/store.stubs';
import { of } from 'rxjs';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;
  let store: TestStore<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterComponent ],
      providers: [
        { provide: Store, useClass: TestStore }
      ]
    }).compileComponents();
  }));

  beforeEach((inject([Store], (testStore: TestStore<any>) => {
    store = testStore;
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    component.character$ = of({
      _id: '01',
      firstName: 'Homer',
      lastName: 'Simpson',
      picture: '',
      age: 40
    });
    fixture.detectChanges();
  })));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should character be displayed', () => {
    const characterName = fixture.nativeElement.querySelector('mat-card-title');
    expect(characterName).toBeDefined();
    expect(characterName.textContent).toEqual('Homer');
  });
});
