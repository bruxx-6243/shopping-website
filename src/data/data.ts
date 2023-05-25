export interface IProduct {
  title: string;
  image: string;
}

export const newArrivals: IProduct[] = [
  {
    title: "Hoodies & Sweatshirt",
    image: "1.png",
  },
  {
    title: "Coats & Parkas",
    image: "2.png",
  },
  {
    title: "Tees & T-Shirt",
    image: "3.png",
  },
];

export const favorites: IProduct[] = [
  {
    title: "Trending on instagram",
    image: "4.png",
  },
  {
    title: "All Under $40",
    image: "5.png",
  },
];
