import {  NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({

    declarations: [
        AppComponent
      ],
      imports: [
        CommonModule,
        AppRoutingModule,
        BrowserModule,
        CoreModule,
        SharedModule
        
      ],
      exports:[],
      providers: [],
      bootstrap: [AppComponent],
      

      
})

export class AppModule {}