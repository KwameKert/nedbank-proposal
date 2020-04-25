import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    isLoading: boolean = false;
  constructor() { }

    links: Array<object> = [
     {name: 'dashboard',url: '/property/list', icon: 'home'},
    {name: 'property', url: '/property/add',  icon: 'extension'},
    {name: 'List Property', url: '/property/list', icon: 'assignment'}

    ]
  ngOnInit() {
  }

}
