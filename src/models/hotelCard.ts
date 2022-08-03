export interface IHotelCard {
  author: {
    avatar: string;
    name?: string;
  };
  _id: string;
  image: string;
  name: string;
  address: string;
  price: string[];
  images: string[];
  info: [
    {
      bedroom: string;
      bathroom: string;
    }
  ];
  type: string[];
  period: string[];
  coords: string[];
  description: string[];
  amenities: IAmenities[];
  reviews: IReviews[];
  __v: number;
}

interface IAmenities {
  icon: string;
  name: string;
}

interface IReviews {
  author: {
    name: string;
    surname: string;
    avatar: string;
  };
  date: string;
  content: string;
}
