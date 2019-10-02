import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  providers: [MyServiceService],
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {
  
  like=false;
  constructor(public myServiceService: MyServiceService) {

	}

  ngOnInit() {

    this.like = this.myServiceService.like

  }
  
   likeClicked(): boolean {
	 console.log(`LIKE clicked`);
	 return this.myServiceService.likeImage(this.like); 

	}

}
