import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RelevantLinksComponent } from './relevant-links/relevant-links.component';
import { FooterComponent } from './footer/footer.component';
import { ProfessorsComponent } from './professors/professors.component';
import { AboutComponent } from './about/about.component';
import { ProfessorItemComponent } from './professors/professor-item/professor-item.component';
import { HeaderComponent } from './header/header.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RelevantLinksComponent,
    FooterComponent,
    ProfessorsComponent,
    AboutComponent,
    ProfessorItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/cg/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
