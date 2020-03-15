import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { DataService } from "./shared/data.service";
import { FeatureComponent } from "./feature/feature.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  declarations: [AppComponent, AppRoutingModule.components, FeatureComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
