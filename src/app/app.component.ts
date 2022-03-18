import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'angular-quickstart';

  constructor(private http: HttpClient){

  }

  ngOnInit(){
    this.http.post('https://staging-dreamy.herokuapp.com/orders', {
      email: 'nfriend.developer@gmail.com',
      name: 'Nathan Friend'
    }).subscribe(data =>{
      console.log(data)
    });
  }

  onCreateUser(postData: { email: string, name: string } ){
    
  }

  onCreateOrder(){

  }


}
