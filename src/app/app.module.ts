import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionComponent } from './core/shared/components/accordion/accordion.component';
import { HeaderComponent } from './core/shared/components/header/header.component';
import { FooterComponent } from './core/shared/components/footer/footer.component';
import { ArticleBlockComponent } from './core/shared/components/article-block/article-block.component';
import { PartnersLogoComponent } from './core/shared/components/partners-logo/partners-logo.component';
import { ArticleCardComponent } from './core/shared/components/article-card/article-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    HeaderComponent,
    FooterComponent,
    ArticleBlockComponent,
    PartnersLogoComponent,
    ArticleCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
