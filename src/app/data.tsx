import vh1 from '../../images/vh1.jpg'
import vh2 from '../../images/vh2.jpg'
import vh3 from '../../images/vh3.jpg'
import vh4 from '../../images/vh4.jpg'
import vh5 from '../../images/vh5.jpg'
import vh6 from '../../images/vh6.jpg'
import vh7 from '../../images/vh7.jpg'
import vh8 from '../../images/vh8.jpg'
import vh9 from '../../images/vh9.jpg'
import vh10 from '../../images/vh10.jpg'

type VehicleListing = {
    name: string;
    type: 'SUV' | 'Limo' | 'Sedan' | 'Shuttle';
    price: number;
    capacity: number;
    unavailableDates: string[];
    imageUrl: any;
  }
  
  const vehicleListings: VehicleListing[] = [
    {
      name: 'Escalade',
      type: 'SUV',
      price: 50,
      capacity: 6,
      unavailableDates: ['2023-07-28', '2023-07-29'],
      imageUrl: vh1,
    },
    {
      name: 'White Limo',
      type: 'Limo',
      price: 100,
      capacity: 8,
      unavailableDates: ['2023-07-30'],
      imageUrl: vh2
    },
    {
      name: 'Audi A6',
      type: 'Sedan',
      price: 40,
      capacity: 4,
      unavailableDates: ['2023-07-02'],
      imageUrl: vh3,
    },
    {
      name: 'White Shuttle',
      type: 'Shuttle',
      price: 80,
      capacity: 10,
      unavailableDates: ['2023-07-04'],
      imageUrl: vh4,
    },
    {
      name: 'Infiniti QX80',
      type: 'SUV',
      price: 60,
      capacity: 7,
      unavailableDates: ['2023-07-05'],
      imageUrl: vh5,
    },
    {
      name: 'Black Limo',
      type: 'Limo',
      price: 120,
      capacity: 10,
      unavailableDates: ['2023-07-07'],
      imageUrl: vh6
    },
    {
      name: 'Mercedes Maybach',
      type: 'Sedan',
      price: 95,
      capacity: 4,
      unavailableDates: ['2023-07-09', '2023-07-10'],
      imageUrl: vh7
    },
    {
      name: 'Black Shuttle',
      type: 'Shuttle',
      price: 90,
      capacity: 12,
      unavailableDates: [],
      imageUrl: vh8
    },
    {
      name: 'Telluride',
      type: 'SUV',
      price: 55,
      capacity: 6,
      unavailableDates: [],
      imageUrl: vh9
    },
    {
      name: 'Green Limo',
      type: 'Limo',
      price: 110,
      capacity: 9,
      unavailableDates: [],
      imageUrl: vh10
    },
  ];
  
export default vehicleListings;