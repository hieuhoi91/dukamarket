export interface IOutStanding {
  img: string;
  name: string;
  star: number;
  price: number;
  description: string;
  sale: number;
}

export const OutStanding: IOutStanding[] = [
  {
    img: 'https://cdn.shopify.com/s/files/1/0606/6867/4281/products/29_1c610d47-1899-4c17-8c85-b88f0c702b51_540x.jpg?v=1636000698',
    name: 'Pioneer High Performance Hi-Res Wired',
    star: 5,
    price: 65,
    description:
      'Designed by Hans J. Wegner in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of...',
    sale: 35,
  },
];
