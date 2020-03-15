import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/data.service";

import * as introJs from "intro.js/intro.js";

@Component({
  selector: "app-feature",
  template: ``
})
export class FeatureComponent implements OnInit {
  introJS = introJs();

  constructor(private _dataService: DataService) {
    this.introJS.setOptions({
      steps: [
        {
          intro: "Hello world!"
        },
        {
          element: document.querySelector("#step1"),
          intro: "This is a tooltip."
        },
        {
          element: document.querySelectorAll("#step2")[0],
          intro: "Ok, wasn't that fun?",
          position: "right"
        },
        {
          element: "#step3",
          intro: "More features, more fun.",
          position: "left"
        },
        {
          element: "#step4",
          intro: "Another step.",
          position: "bottom"
        },
        {
          element: "#step5",
          intro: "Get it, use it."
        }
      ]
    });
  }

  ngOnInit() {
    this._dataService.aweSource$.subscribe(data => {
      if (data) this.introJS.start();
    });
  }
}
