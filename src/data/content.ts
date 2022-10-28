export interface IContent {
  img: string;
  discount: number;
  label_content: string;
  content: string;
}

export const Content: IContent[] = [
  {
    img: 'https://cdn.shopify.com/s/files/1/0606/6867/4281/files/1_7ec03467-4a31-488b-8307-c668dcf8f8e5_720x.png?v=1638759481',
    discount: 30,
    label_content: 'Microsoft',
    content: 'Surface Laptop 14"',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0606/6867/4281/files/2_12c0ab45-c54b-4c98-b327-690d387e5d9e_720x.png?v=1638759493',
    discount: 20,
    label_content: 'Cameras',
    content: 'Best Sport Edition',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0606/6867/4281/files/3_29b5ab10-d9d8-45cc-89b8-6a0828e318c3_720x.png?v=1638759516',
    discount: 60,
    label_content: 'Sneaker',
    content: 'Nike Air Max 90',
  },
];
