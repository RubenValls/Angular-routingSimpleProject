import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})

export class FirstPageComponent {
  username: string = '';

  setParams(usernameForm:any){
    this.username = usernameForm;
  }

  saveParams(){
    let usernameForm;
    if(document.querySelector('#username')){
      usernameForm = (<HTMLInputElement>document.getElementById('username')).value;
    }
    this.setParams(usernameForm);
  }
}
