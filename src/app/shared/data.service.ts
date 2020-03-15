import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class DataService {
  private aweSource = new Subject<string>();
  aweSource$ = this.aweSource.asObservable();

  private message: string;

  constructor() {}

  getProjectName() {
    return "Angular Bare Bones";
  }

  sendMessage(message: string) {
    this.aweSource.next(message);
  }
}
