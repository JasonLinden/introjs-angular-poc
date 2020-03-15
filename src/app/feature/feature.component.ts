import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/data.service";

import * as introJs from "intro.js/intro.js";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-feature",
  template: ``
})
export class FeatureComponent implements OnInit {
  introJS = introJs();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _dataService: DataService
  ) {}

  ngOnInit() {
    this._dataService.aweSource$.subscribe(data => {
      if (data) {
        this.introJS.setOptions(data.options);
        if (data.multi) {
          this.introJS.oncomplete(() => {
            this.router.navigate([data.multi.navigate, data.multi.params]);
          });
        }
        this.introJS.start();
      }
    });
  }
}
