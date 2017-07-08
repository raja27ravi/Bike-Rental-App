import { BikeModel } from '../../models/bikemodel/bikemodel';


export class BikeService {
private bikes : BikeModel   ;


addBikes(bike : BikeModel){

this.bikes = bike;
//console.log(this.bikes);
}

getBikes()
{
return this.bikes;
}

}
