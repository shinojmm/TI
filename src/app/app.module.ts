import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CompTextboxComponent } from './comp-textbox/comp-textbox.component';
import { ListCompComponent } from './list-comp/list-comp.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterCompComponent } from './register-comp/register-comp.component';

const routes: Routes = [
  { path: 'components', component: ListCompComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: RegisterCompComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CompTextboxComponent,
    ListCompComponent,
    RegisterCompComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
