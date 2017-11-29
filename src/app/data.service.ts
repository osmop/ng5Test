import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {
  private goals= new BehaviorSubject<any>(['Initial goal', 'Another life goal']);
  goal= this.goals.asObservable();

  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }

}
