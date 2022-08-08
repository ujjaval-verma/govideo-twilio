import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { InspectorComponent } from './inspector/inspector.component';
import { InspectorVideoContainerComponent } from './inspector-video-container/inspector-video-container.component';
import { CoordinatorVideoContainerComponent } from './coordinator-video-container/coordinator-video-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CoordinatorComponent,
    InspectorComponent,
    InspectorVideoContainerComponent,
    CoordinatorVideoContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
