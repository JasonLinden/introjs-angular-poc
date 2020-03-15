import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/data.service";

import * as introJs from "intro.js/intro.js";

@Component({
  selector: "app-feature",
  template: ``
})
export class FeatureComponent implements OnInit {
  introJS = introJs();

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this._dataService.aweSource$.subscribe(data => {
      if (data) {
        this.introJS.setOptions(data);
        this.introJS.start();
      }
    });
  }
}
