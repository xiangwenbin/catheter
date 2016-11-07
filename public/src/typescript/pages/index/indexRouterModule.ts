import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicComponent } from './components/dynamic/dynamicComponent';
import { PatientListComponent } from './components/patientList/patientListComponent';
import { HistoryComponent } from './components/history/historyComponent';
import { AwaitDealComponent } from './components/awaitDeal/awaitDealComponent';
import { PageNotFoundComponent } from './components/pageNotFound/pageNotFoundComponent';

import { NavComponent } from '../../components/nav/navComponent';
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'patientList', pathMatch:'full'},
      { path: 'dynamic', component: DynamicComponent },
      { path: 'patientList', component: PatientListComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'awaitDeal', component: AwaitDealComponent },
      { path: '**', component: PageNotFoundComponent }
    ],{ useHash: true })
  ],
  declarations: [DynamicComponent,PatientListComponent,HistoryComponent,AwaitDealComponent,PageNotFoundComponent,NavComponent],

  exports: [
    RouterModule
  ]
})
export class IndexRouterModule { }