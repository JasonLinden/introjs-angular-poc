import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <router-outlet></router-outlet><app-feature></app-feature>
  `
})
export class AppComponent {
  constructor() {}
}
