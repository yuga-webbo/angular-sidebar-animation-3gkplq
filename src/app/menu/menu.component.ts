import { Component, OnInit, ElementRef, Renderer, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private el:ElementRef, private renderer:Renderer) { }

  ngOnInit() {
  }

  @HostListener('click', ['$event.target'])
  onClick(target){
    let item = this.el.nativeElement.querySelector('li');

    alert(item);
  }
}