export interface IHomeSlide {
  main_label: string;
  label: string;
  detail: string;
  image: string;
}

export interface IHighlightItem {
  name: string;
  category: string;
  image: string;
}

export const homeSlide: IHomeSlide[] = [
  {
    main_label: 'Gaming Headset',
    label: 'Brilliant Lighting Effect',
    detail: 'Wireless Connection With TV, Computer, Laptop, SmartPhone',
    image:
      'https://cdn.shopify.com/s/files/1/0606/6867/4281/files/slide1_1080x.png?v=1638523289',
  },
  {
    main_label: 'Sport Edition',
    label: 'Red Special Edition',
    detail: 'Wireless Connection With TV, Computer, Laptop, SmartPhone',
    image:
      'https://cdn.shopify.com/s/files/1/0606/6867/4281/files/slide2_1080x.png?v=1638523346',
  },
  {
    main_label: 'Sport Edition',
    label: 'Best Choice Of Your',
    detail: 'Wireless Connection With TV, Computer, Laptop, SmartPhone',
    image:
      'https://cdn.shopify.com/s/files/1/0606/6867/4281/files/slide3_1080x.png?v=1638523367',
  },
];
export const highlightItems: IHighlightItem[] = [
  {
    name: 'Canyon Star Raider',
    category: 'Headphone & Audio',
    image:
      'https://cdn.shopify.com/s/files/1/0606/6867/4281/files/img-slide1_360x.png?v=1638517482',
  },
  {
    name: 'Phone Galaxy S20',
    category: 'Cellphone & Tablets',
    image:
      'https://cdn.shopify.com/s/files/1/0606/6867/4281/files/img-slide2_360x.png?v=1638517589',
  },
  {
    name: 'Galaxy Buds Plus',
    category: 'Wireless Earbuds',
    image:
      'https://cdn.shopify.com/s/files/1/0606/6867/4281/files/img-slide3_360x.png?v=1638517865',
  },
  {
    name: 'Chair Swoon Lounge',
    category: 'Decor & Furniture',
    image:
      'https://cdn.shopify.com/s/files/1/0606/6867/4281/files/img-slide4_360x.png?v=1638518011',
  },
];
