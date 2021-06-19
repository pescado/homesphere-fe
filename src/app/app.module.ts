import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DogListComponent, DogListContainerComponent } from './components';
import { DogService } from './services/dog-service';

@NgModule({
  declarations: [
    AppComponent,
    DogListContainerComponent,
    DogListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
