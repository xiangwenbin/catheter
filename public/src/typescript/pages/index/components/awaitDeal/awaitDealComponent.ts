import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'my-awaitDeal',
  styleUrls: ['./style.css'],
  templateUrl: './template.html'
})
export class AwaitDealComponent {
  constructor(private route: ActivatedRoute, private router: Router) {
    //   const id: Observable<string> = route.params.map(p => p.id);
    // const url: Observable<string> = route.url.map(s => s.join(''));
    this.route.params.forEach((params: Params) => {
      console.log("params", params);

    });
    this.route.url.forEach((s) => {
      console.log("url", s.join(''));
    });
    
  }
}