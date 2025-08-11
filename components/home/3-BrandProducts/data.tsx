type Productss ={
  title: string;
  description: string;
  priceRange: string;
  currency: string;
  image: string;
}

export const brandLogos = [
  '/brands/Logos.png',
  '/brands/Logos1.png',
  '/brands/Logos2.png',
  '/brands/Logos3.png',
];

 const Products: Productss[] = [
  {
    title: 'تمريد أملو',
    description: 'مزيج التمر واللوز والزيت الطبيعي بمذاق لذيذ ومغذي.',
    priceRange: '30.00 - 50.00',
    currency: 'AED',
    image: '/products/products1.png',
  },
  {
    title: 'تمريد أملو',
    description: 'جرعة تمر للذواقة. الأفضل لكل وجبة صحية.',
    priceRange: '30.00 - 50.00',
    currency: 'AED',
    image: '/products/products2.png',
  },
  {
    title: 'تمريد أملو',
    description: 'مزيج التمر واللوز والزيت الطبيعي بمذاق لذيذ ومغذي.',
    priceRange: '30.00 - 50.00',
    currency: 'AED',
    image: '/products/products1.png',
  },
  {
    title: 'تمريد أملو',
    description: 'جرعة تمر للذواقة. الأفضل لكل وجبة صحية.',
    priceRange: '30.00 - 50.00',
    currency: 'AED',
    image: '/products/products2.png',
  },
];
export default Products;