import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  styleUrls: ['./style.css'],
  templateUrl: './template.html'
})
export class AppComponent implements OnInit, OnDestroy {
  curUrl="";
  constructor(
    private route: ActivatedRoute,
    private router: Router) {
    //   const id: Observable<string> = route.params.map(p => p.id);
    // const url: Observable<string> = route.url.map(s => s.join(''));
    this.route.params.forEach((params: Params) => {
      console.log("params", params);

    });
    this.route.url.forEach((s) => {
      console.log("url", s.join(''));
    });
    this.router.events.subscribe((val) => {
        // see also 
        this.curUrl=val.url;
        console.log("router",val);
    });
  }
  ngOnInit(): void {
    console.log("init");
  }
  ngOnDestroy(): void {
    console.log("destory");
  }
}