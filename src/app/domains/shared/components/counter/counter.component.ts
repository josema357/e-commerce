import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';
  
  constructor () {
    //no async
    //before render
    //one time
    console.log('contructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges){
    //before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
  }

  ngOnInit(){
    //after render
    //one time
    //async, then, subscribe
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log("duration => ", this.duration);
    console.log("duration => ", this.message);
  }

  ngAfterViewInit() {
    //after render
    //children have already been painted 
    console.log("ngAfterViewInit")
    console.log('-'.repeat(10));
  }

  ngOnDestroy(){
    console.log("ngOnDestroy")
    console.log('-'.repeat(10));
  }
}
