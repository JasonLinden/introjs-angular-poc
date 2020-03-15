import { Component, OnInit } from "@angular/core";

import { DataService } from "../shared/data.service";

@Component({
  selector: "home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  projectName: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.projectName = this.dataService.getProjectName();
  }

  startIntro() {
    this.dataService.sendMessage({
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
        ]
      },
      multi: null
    });
  }

  // configs can be stored in constants file - create a tree structure for multiple pages
  startMulti() {
    this.dataService.sendMessage({
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
        doneLabel: "Awe Done bru"
      },
      multi: {
        navigate: "page-two",
        params: 12
      }
    });
  }
}
