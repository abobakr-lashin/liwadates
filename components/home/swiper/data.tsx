import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Products {
  title: string;
  description: string;
  priceRange: string;
  currency: string;
  image: string;
  icons?: HTMLAnchorElement | StaticImport;
}
type swiperdata={
    Products:Products[];
    ClassNameSwiperNext?: string;
    ClassNameSwiperPrev?: string;
    slidesPerViewbag: number;
    slidesPerViewSmall: number;
}

export default swiperdata