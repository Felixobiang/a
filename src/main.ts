import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SocialMediaModule } from './app/social-media/social-media.module';

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
