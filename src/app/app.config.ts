import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({
      "projectId": "simple-crm-12857",
      "appId": "1:818851983904:web:f443d9e5c54af66da40245",
      "storageBucket": "simple-crm-12857.appspot.com",
      "apiKey": "AIzaSyC2rSt6EH8tUsLM34ugqGM2ttVJpEWwMrI",
      "authDomain": "simple-crm-12857.firebaseapp.com",
      "messagingSenderId": "818851983904"
    })), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()),
  ]
   
};
