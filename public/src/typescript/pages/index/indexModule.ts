import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';
import { AppComponent } from './components/app/appComponent';
import { IndexRouterModule } from './indexRouterModule';
// import { NavComponent } from '../../components/nav/navComponent';
@NgModule({
  imports:      [ BrowserModule ,FormsModule,IndexRouterModule],
  providers:    [],
  declarations: [AppComponent],
  exports:      [],
  bootstrap:    [AppComponent]
})
export class IndexModule {

}