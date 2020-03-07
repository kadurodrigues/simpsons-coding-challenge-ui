import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CharacterComponent } from './character.component';
import { CharacterService } from './character.service';

@NgModule({
  declarations: [CharacterComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CharacterComponent],
  providers: [CharacterService]
})
export class CharacterModule { }
