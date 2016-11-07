import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/appComponent';
@NgModule({
  imports:      [ BrowserModule ],
  providers:    [],
  declarations: [AppComponent],
  exports:      [],
  bootstrap:    [AppComponent]
})
export class IndexModule {

}