import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyArdgTTteuc369TK5QB9QqZ_3ZZHgVBfp4",

  authDomain: "agendaae-73bbb.firebaseapp.com",

  projectId: "agendaae-73bbb",

  storageBucket: "agendaae-73bbb.appspot.com",

  messagingSenderId: "873047582548",

  appId: "1:873047582548:web:da0d0e562ae5b156e38ac1"

};


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp({ ...firebaseConfig })),
    provideFirestore(() => getFirestore()),
    IonicModule.forRoot(),
    AppRoutingModule,    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
