import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit{
  username: any;
  name: any;
  age: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username');
    this.name = this.route.snapshot.paramMap.get('name');
    this.age = this.route.snapshot.paramMap.get('age');
  }
}
