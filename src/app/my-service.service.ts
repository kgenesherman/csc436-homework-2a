import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService 

  {constructor(){}

  like = false;
  
  likeImage(param: boolean): boolean{
	  return !param;
  }
}
