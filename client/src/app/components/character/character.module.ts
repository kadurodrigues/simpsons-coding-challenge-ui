import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CharacterComponent } from './character.component';

@NgModule({
  declarations: [CharacterComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CharacterComponent]
})
export class CharacterModule { }
