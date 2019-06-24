import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.page.html',
  styleUrls: ['./list-orders.page.scss'],
})
export class ListOrdersPage implements OnInit {

  passedId=null;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.passedId=this.activatedRoute.snapshot.paramMap.get('myid');
  }

}
