export interface IBanners {
  main: IBannerFields;
  second: IBannerFields;
  last: IBannerFields;
}

interface IBannerFields {
  image: string;
  title?: string;
  description?: string;
}
