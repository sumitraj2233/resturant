import images from './images';

const wines = [
  {
    title: 'Chicken Tikka',
    price: '₹256',
    tags: 'Spiced | Perfection',
  },
  {
    title: 'Tandoori Chicken',
    price: '₹519',
    tags: 'Fiery | Delight',
  },
  {
    title: 'Butter Chicken',
    price: '₹440',
    tags: 'Creamy | Indulgence',
  },
  {
    title: 'Chicken Biryani',
    price: '₹301',
    tags: 'Crispy | Delight ',
  },
  {
    title: 'Irish Guinness',
    price: '₹260',
    tags: 'Sweet | Surprise',
  },
];

const cocktails = [
  {
    title: 'Steamed Veg Momos',
    price: '₹200',
    tags: 'Delicate Bites | Crispy Delight ',
  },
  {
    title: "Fried Chicken Momo",
    price: '₹160',
    tags: 'Fiery Fusion | Smoky Temptation ',
  },
  {
    title: 'Schezwan Veg Momos',
    price: '₹100',
    tags: 'Bold Flavors | Meaty Pleasure ',
  },
  {
    title: 'Chocolate Momos',
    price: '₹210',
    tags: 'Fluffy Pairing | Bread Companion ',
  },
  {
    title: 'Mutton Momos',
    price: '₹260',
    tags: 'Fiery Fusion | Meaty Pleasure ',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Flavours of Excellenece',
    subtitle: 'Mastery in crafting unforgettable culinary experiences.',
  },
  {
    imgUrl: images.award01,
    title: 'Culinary Innovation Pioneer',
    subtitle: 'Bridging tradition and modernity with flair.',
  },
  {
    imgUrl: images.award05,
    title: 'Cultural Fusion Ambassador',
    subtitle: 'Embracing diversity through harmonious fusion.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Recognizing our visionary approach to redefining gastronomy.',
  },
];

export default { wines, cocktails, awards };
