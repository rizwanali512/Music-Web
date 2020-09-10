import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  imports: [ MatButtonModule, MatCheckboxModule ],
  exports: [ MatButtonModule, MatCheckboxModule ]
})

export class MaterialModule {

}