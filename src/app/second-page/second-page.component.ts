import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})


export class SecondPageComponent implements OnInit{
  username: any;
  name: string = '';
  age: number = 0;
  constructor(private route: ActivatedRoute) {}

  setParams(nameForm:any, ageForm:any){
    this.name = nameForm;
    this.age = ageForm;
  }

  saveParams(){
    let nameForm;
    let ageForm;
    if(document.querySelector('#name')){
      nameForm = (<HTMLInputElement>document.getElementById('name')).value;
    }
    if(document.querySelector('#age')){
      ageForm = (<HTMLInputElement>document.getElementById('age')).value;
    }
    this.setParams(nameForm, ageForm);
  }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username')
  }
}
