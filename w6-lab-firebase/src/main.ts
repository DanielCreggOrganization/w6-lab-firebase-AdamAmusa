import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyB6JtKHy04wnROas_R2_-OuQ9SDuZDgCk4",
      authDomain: "angularlab-abda3.firebaseapp.com",
      projectId: "angularlab-abda3",
      storageBucket: "angularlab-abda3.appspot.com",
      messagingSenderId: "188204722627",
      appId: "1:188204722627:web:98e998b7526d38ba19f576",
      measurementId: "G-SBF5GVSRMV"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
});


