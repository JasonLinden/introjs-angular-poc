import { Component, OnInit, AfterViewInit } from "@angular/core";
import { DataService } from "../shared/data.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-page-two",
  template: `
    <p>
      page-two works!
    </p>
  `,
  styles: []
})
export class PageTwoComponent implements AfterViewInit {
  constructor(
    private _dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngAfterViewInit() {
    let id = this.route.snapshot.paramMap.get("id");

    if (id) {
      this.setUpIntroJs();
    }
  }

  // configs can be stored in constants file
  setUpIntroJs() {
    this._dataService.sendMessage({
      options: {
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
        ],
        doneLabel: "Done"
      },
      multi: null
    });
  }
}
