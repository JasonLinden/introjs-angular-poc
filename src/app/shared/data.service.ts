import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class DataService {
  private aweSource = new Subject<{ options: any; multi: any }>();
  aweSource$ = this.aweSource.asObservable();

  private message: string;

  constructor() {}

  getProjectName() {
    return "Angular Bare Bones";
  }

  sendMessage(message: { options: any; multi: any }) {
    this.aweSource.next(message);
  }
}
