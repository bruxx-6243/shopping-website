export interface IProduct {
  title: string;
  image: string;
}

export const newArrivals: IProduct[] = [
  {
    title: "Hoodies & Sweetshirt",
    image: "images/1.png",
  },
  {
    title: "Coats & Parkas",
    image: "images/2.png",
  },
  {
    title: "Tees & T-Shirt",
    image: "images/3.png",
  },
];

export const favorites: IProduct[] = [
  {
    title: "Trending on instagram",
    image: "images/4.png",
  },
  {
    title: "All Under $40",
    image: "images/5.png",
  },
];
