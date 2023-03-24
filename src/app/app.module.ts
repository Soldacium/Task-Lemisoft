import { NotificationsModule } from './shared/components/notifications/notifications.module';
import { TabsModule } from './shared/components/tabs/tabs.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LinkModule } from '@shared/directives/link.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from '@shared/directives/button.directive';
import { LoadingModule } from '@shared/components/loading/loading.module';
import { NotFoundModule } from '@shared/components/not-found/not-found.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LinkModule,
    TabsModule,
    ButtonModule,
    LoadingModule,
    NotFoundModule,
    NotificationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
