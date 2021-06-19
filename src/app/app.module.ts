import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DogListContainerComponent } from './components/dog-list-container/dog-list-container.component';
import { DogListComponent } from './components/dog-list/dog-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DogListContainerComponent,
    DogListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
