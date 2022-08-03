export interface ISearchResultHotel {
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
}
