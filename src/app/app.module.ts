import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CandidateComponent } from './components/candidate/candidate.component';
import { LanguageComponent } from './components/language/language.component';
import { MainComponent } from './components/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    LanguageComponent,
    MainComponent,
    ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule,RouterModule,HttpClientModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
