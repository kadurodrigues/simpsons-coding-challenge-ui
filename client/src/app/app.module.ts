import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { CharacterModule } from './components/character/character.module';
import { SearchModule } from './components/search/search.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as characterReducer from './reducers/character.reducer';
import { SearchCharacterEffects } from './effects/search-character.effects';
import { SearchService } from './services/search.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HeaderModule,
    CharacterModule,
    SearchModule,
    StoreModule.forRoot({ state: characterReducer.reducer }),
    EffectsModule.forRoot([SearchCharacterEffects])
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
