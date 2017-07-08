import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Reviews provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Reviews {

  data: any;
  data2: any;

  constructor(public http: Http) {
    this.data = null;
    this.data2 = null;
  }
  getBikes(){
    if(this.data){
       return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get('http://localhost:8050/api/bikes')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
      });
    });
  }

  getHotels(){
    if(this.data2){
       return Promise.resolve(this.data2);
    }
    return new Promise(resolve => {
      this.http.get('http://localhost:8050/api/hotels')
        .map(res => res.json())
        .subscribe(data2 => {
          this.data2 = data2;
          resolve(this.data2);
      });
    });
  }

createhotel(hotel){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:8080/api/hotels', JSON.stringify(hotel), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });

  }
//   createReview(review){

//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');

//     this.http.post('http://localhost:8080/api/reviews', JSON.stringify(review), {headers: headers})
//       .subscribe(res => {
//         console.log(res.json());
//       });

//   }

//   deleteReview(id){

//     this.http.delete('http://localhost:8080/api/reviews/' + id).subscribe((res) => {
//       console.log(res.json());
//     });

//   }


}
