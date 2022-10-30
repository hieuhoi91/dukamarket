export interface IMainFooter {
  title: string;
  content: string[];
}

export const MainFooter: IMainFooter[] = [
  {
    title: 'My Account',
    content: [
      'Search',
      'Product Support',
      'Checkout',
      'Shopping Cart',
      'Wishlist',
      'New Arrivals',
    ],
  },
  {
    title: 'Customer Service',
    content: [
      'Help Center',
      'Contact Us',
      'Report Abuse',
      'Submit a Dispute',
      'Policies & Rules',
      'Online Shopping',
    ],
  },
  {
    title: 'Hot Categories',
    content: [
      'Laptop & Computer',
      'Speaker & Audio',
      'Cellphone',
      'Video Game',
      'Accessories',
      'Delivery & Dispatch',
    ],
  },
];
