export interface IFeaturedItem {
  author: {
    avatar: string;
  };
  _id: string;
  image: string;
  name: string;
  address: string;
  price: string[];
  images: string[];
  info: [
    {
      bedroom: number;
      bathroom: number;
    }
  ];
}
