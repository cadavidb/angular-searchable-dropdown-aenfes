import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchDropdown } from './search-dropdown/search-dropdown';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SearchDropdown],
  bootstrap: [AppComponent],
})
export class AppModule {}
