export const REVIEWS: Reviews[] = [
  {
    productsId: 1,
    name: "Alice Johnson",
    rating: 5,
    review:
      "Absolutely loved the product! The craftsmanship is outstanding, and it arrived well-packaged. Highly recommend it to anyone looking for quality and reliability."
  },
  {
    productsId: 1,
    name: "Michael Smith",
    rating: 4,
    review:
      "Very good overall. The product met my expectations, but shipping took a bit longer than expected. Customer service was helpful in tracking my order, which made the delay more bearable."
  },
  {
    productsId: 1,
    name: "Samantha Brown",
    rating: 3,
    review:
      "The product is decent but not exactly as described. Some features were missing, but it still works fine for basic needs. For the price, I expected a little more attention to detail."
  },
  {
    productsId: 1,
    name: "David Wilson",
    rating: 2,
    review:
      "Not very satisfied. The item arrived damaged, and while the company did offer a replacement, the process was slow and frustrating. I expected better quality control."
  },
  {
    productsId: 2,
    name: "Jessica Lee",
    rating: 1,
    review:
      "Terrible experience. The product broke within days of using it, and customer service was unhelpful. I wouldn't recommend this to anyone."
  },
  {
    productsId: 2,
    name: "Olivia Martinez",
    rating: 5,
    review:
      "This product exceeded my expectations! The design is sleek, and it works perfectly. I've already recommended it to my friends and family. Great job!"
  },
  {
    productsId: 3,
    name: "John Evans",
    rating: 4,
    review:
      "Good value for the money. The product does what it says, but the instructions were a bit unclear. Once I figured it out, everything worked as advertised."
  },
  {
    productsId: 3,
    name: "Emily Clark",
    rating: 3,
    review:
      "Average experience. While the product works, it's not as user-friendly as I hoped. I had to contact support multiple times to understand how to use it effectively."
  },
  {
    productsId: 3,
    name: "Daniel Turner",
    rating: 5,
    review:
      "Fantastic product! I've been using it for weeks now, and it still performs like it's brand new. The attention to detail and durability is impressive."
  },
  {
    productsId: 4,
    name: "Sophia Harris",
    rating: 2,
    review:
      "Disappointed with this purchase. The product feels cheap and doesn't perform as advertised. I might try another brand next time."
  },
  {
    productsId: 5,
    name: "Liam Baker",
    rating: 4,
    review:
      "Happy with the purchase overall. The product is well-built and functional, but it could use a few improvements in terms of design and usability."
  },
  {
    productsId: 5,
    name: "Isabella Wright",
    rating: 1,
    review:
      "Worst purchase I've ever made. The product stopped working within a week, and I couldn't get a refund. Save your money and buy something else."
  },
  {
    productsId: 6,
    name: "Matthew Green",
    rating: 5,
    review:
      "I’m so impressed with this product! It’s exactly what I needed, and the performance is top-notch. I couldn’t be happier with my purchase. Definitely worth the investment!"
  },
  {
    productsId: 6,
    name: "Charlotte King",
    rating: 5,
    review:
      "This product has completely transformed the way I do things! It’s easy to use, reliable, and works exactly as described. I highly recommend it to anyone looking for a high-quality product."
  },
  {
    productsId: 6,
    name: "Ethan Taylor",
    rating: 5,
    review:
      "Incredible! The product exceeded my expectations in every way. It’s built to last, and the functionality is unmatched. Definitely a 5-star product. I’m recommending it to everyone I know."
  },
  {
    productsId: 7,
    name: "Ava Morgan",
    rating: 5,
    review:
      "I’ve been using this for a few weeks now, and it’s still performing perfectly. The attention to detail is remarkable, and the design is modern and sleek. I would buy it again in a heartbeat!"
  },
  {
    productsId: 8,
    name: "Lucas Scott",
    rating: 5,
    review:
      "I’m honestly amazed by this product! It’s worth every penny and more. The quality is exceptional, and it has made my life so much easier. If you're considering buying it, don't hesitate!"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Sport Lisboa Benfica 2024/2025 Jersey",
    slug: "sport-lisboa-benfica",
    thumb: "/jersey-soccer/liga-portugal/benfica/1.webp",
    images: [
      "/jersey-soccer/liga-portugal/benfica/1.webp",
      "/jersey-soccer/liga-portugal/benfica/2.webp",
      "/jersey-soccer/liga-portugal/benfica/3.webp",
      "/jersey-soccer/liga-portugal/benfica/4.webp"
    ],
    brand: "Adidas",
    color: ["Red", "Black"],
    description:
      "Show your passion for Sport Lisboa Benfica with this premium 2024/2025 Adidas jersey. Crafted with lightweight, sweat-wicking fabric for optimal comfort, it’s perfect for both match days and casual outings. The bold red and black design showcases your team pride in style.",
    tag: "Liga Portugal",
    price: { value: 120.0, currency: "€", discount: 20.0 }, // Discount of 20%
    sales: 500,
    stock: 100,
    sizes: ["XS", "S", "M", "L"],
    rating: 4.7
  },
  {
    id: 2,
    name: "Sporting Clube Portugal 2024/2025 Jersey",
    slug: "sporting-clube-portugal",
    brand: "Nike",
    color: ["Green", "White"],
    thumb: "/jersey-soccer/liga-portugal/sporting/1.webp",
    images: [
      "/jersey-soccer/liga-portugal/sporting/1.webp",
      "/jersey-soccer/liga-portugal/sporting/2.webp",
      "/jersey-soccer/liga-portugal/sporting/3.webp",
      "/jersey-soccer/liga-portugal/sporting/4.webp"
    ],
    description:
      "Celebrate Sporting Clube Portugal's 2024/2025 season with this stunning Nike jersey. Its iconic green and white stripes are enhanced with advanced Dri-FIT technology to keep you cool and comfortable throughout the game or during casual wear.",
    tag: "Liga Portugal",
    price: { value: 90.0, currency: "€", discount: 15.0 }, // Discount of 15%
    sales: 300,
    stock: 150,
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5
  },
  {
    id: 3,
    name: "Futebol Clube Porto 2024/2025 Jersey",
    slug: "futebol-clube-porto",
    brand: "New Balance",
    color: ["Blue", "Yellow"],
    thumb: "/jersey-soccer/liga-portugal/porto/1.webp",
    images: [
      "/jersey-soccer/liga-portugal/porto/1.webp",
      "/jersey-soccer/liga-portugal/porto/2.webp",
      "/jersey-soccer/liga-portugal/porto/3.webp",
      "/jersey-soccer/liga-portugal/porto/4.webp"
    ],
    description:
      "Support Futebol Clube Porto with this bold 2024/2025 New Balance jersey. Featuring a striking blue and yellow design, this jersey is built with moisture-wicking fabric for maximum comfort and performance on and off the pitch.",
    tag: "Liga Portugal",
    price: { value: 85.0, currency: "€", discount: 10.0 }, // Discount of 10%
    sales: 400,
    stock: 120,
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6
  },
  {
    id: 4,
    name: "Real Madrid Club de Fútbol 2024/2025 Jersey",
    slug: "real-madrid-club-de-fútbol",
    brand: "Adidas",
    color: ["White"],
    thumb: "/jersey-soccer/la-liga/real-madrid/1.webp",
    images: [
      "/jersey-soccer/la-liga/real-madrid/1.webp",
      "/jersey-soccer/la-liga/real-madrid/2.webp",
      "/jersey-soccer/la-liga/real-madrid/3.webp"
    ],
    description:
      "Celebrate Real Madrid's legendary legacy with the 2024/2025 Adidas jersey. Its clean white design features subtle gold accents, perfect for showcasing your loyalty to the world's most successful football club.",
    tag: "La Liga",
    price: { value: 110.0, currency: "€", discount: 25.0 }, // Discount of 25%
    sales: 600,
    stock: 80,
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8
  },
  {
    id: 5,
    name: "Real Sociedad de Fútbol 2024/2025 Jersey",
    slug: "real-sociedad-de-fútbol",
    brand: "Macron",
    color: ["White", "Blue"],
    thumb: "/jersey-soccer/la-liga/real-sociedad/1.webp",
    images: [
      "/jersey-soccer/la-liga/real-sociedad/1.webp",
      "/jersey-soccer/la-liga/real-sociedad/2.webp"
    ],
    description:
      "Support Real Sociedad in the 2024/2025 season with this vibrant Macron jersey. Featuring a blend of white and blue stripes, this jersey ensures comfort and style for die-hard fans.",
    tag: "La Liga",
    price: { value: 75.0, currency: "€", discount: 20.0 }, // Discount of 20%
    sales: 250,
    stock: 130,
    sizes: ["S", "M", "L", "XL"],
    rating: 4.4
  },
  {
    id: 6,
    name: "Club Athletico Paranaense 2024/2025 Jersey",
    slug: "club-athletico-paranaense",
    brand: "Umbro",
    color: ["Yellow"],
    thumb: "/jersey-soccer/brasileirao/paranaense/1.webp",
    images: [
      "/jersey-soccer/brasileirao/paranaense/1.webp",
      "/jersey-soccer/brasileirao/paranaense/2.webp"
    ],
    description:
      "Stand out in the 2024/2025 season with this bold yellow Umbro jersey for Club Athletico Paranaense. Designed with breathable materials, it’s perfect for cheering on your team or casual outings.",
    tag: "Brasileirão",
    price: { value: 70.0, currency: "€", discount: 15.0 }, // Discount of 15%
    sales: 180,
    stock: 100,
    sizes: ["S", "M", "L", "XL"],
    rating: 4.3
  },
  {
    id: 7,
    name: "Paris Saint-Germain Football Club 2024/2025 Jersey",
    slug: "paris-saint-germain-football-club",
    brand: "Nike",
    color: ["Blue", "White"],
    thumb: "/jersey-soccer/ligue-1/psg/1.webp",
    images: [
      "/jersey-soccer/ligue-1/psg/1.webp",
      "/jersey-soccer/ligue-1/psg/2.webp",
      "/jersey-soccer/ligue-1/psg/3.webp",
      "/jersey-soccer/ligue-1/psg/4.webp"
    ],
    description:
      "Show your allegiance to PSG with this stylish 2024/2025 Nike jersey. The blue and white design features advanced AeroSwift technology for unmatched comfort and breathability.",
    tag: "Ligue 1",
    price: { value: 95.0, currency: "€", discount: 20.0 }, // Discount of 20%
    sales: 450,
    stock: 90,
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6
  },
  {
    id: 8,
    name: "Manchester City Football Club 2024/2025 Jersey",
    slug: "manchester-city-football-club",
    brand: "Puma",
    color: ["Blue"],
    thumb: "/jersey-soccer/premier-league/manchester-city/1.webp",
    images: [
      "/jersey-soccer/premier-league/manchester-city/1.webp",
      "/jersey-soccer/premier-league/manchester-city/2.webp"
    ],
    description:
      "Support Manchester City in their 2024/2025 campaign with this sleek Puma jersey. Featuring a minimalist blue design, it’s a must-have for fans and collectors.",
    tag: "Premier League",
    price: { value: 85.0, currency: "€", discount: 10.0 }, // Discount of 10%
    sales: 350,
    stock: 110,
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5
  },
  {
    id: 9,
    name: "Liverpool FC 2024/2025 Jersey",
    slug: "liverpool-fc",
    brand: "Nike",
    color: ["Red"],
    thumb: "/jersey-soccer/premier-league/liverpool/1.webp",
    images: [
      "/jersey-soccer/premier-league/liverpool/1.webp",
      "/jersey-soccer/premier-league/liverpool/2.webp"
    ],
    description:
      "Show your support for Liverpool FC with the official 2024/2025 home jersey by Nike. Featuring Dri-FIT technology, this iconic red jersey keeps you comfortable and stylish, whether you're at Anfield or cheering from home.",
    tag: "Premier League",
    price: { value: 90.0, currency: "€", discount: 10.0 }, // Discount of 10%
    sales: 500,
    stock: 120,
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8
  },
  {
    id: 10,
    name: "Manchester United 2024/2025 Jersey",
    slug: "manchester-united",
    brand: "Adidas",
    color: ["Red", "Black"],
    thumb: "/jersey-soccer/premier-league/manchester-united/1.webp",
    images: [
      "/jersey-soccer/premier-league/manchester-united/1.webp",
      "/jersey-soccer/premier-league/manchester-united/2.webp",
      "/jersey-soccer/premier-league/manchester-united/3.webp",
      "/jersey-soccer/premier-league/manchester-united/4.webp"
    ],
    description:
      "Celebrate Manchester United's legacy with the official 2024/2025 home jersey by Adidas. Designed with HEAT.RDY technology, this sleek red and black jersey ensures maximum comfort during every match or training session.",
    tag: "Premier League",
    price: { value: 95.0, currency: "€", discount: 15.0 }, // Discount of 15%
    sales: 600,
    stock: 100,
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7
  },
  {
    id: 11,
    name: "FC Bayern München 2024/2025 Jersey",
    slug: "fc-bayern-munchen",
    brand: "Adidas",
    color: ["Red", "White"],
    thumb: "/jersey-soccer/bundesliga/bayern/1.webp",
    images: ["/jersey-soccer/bundesliga/bayern/1.webp", "/jersey-soccer/bundesliga/bayern/2.webp"],
    description:
      "Join FC Bayern fans worldwide with this stunning 2024/2025 home jersey by Adidas. Highlighting the club's traditional red and white colors, it features breathable fabric for unmatched comfort during game days.",
    tag: "Bundesliga",
    price: { value: 92.0, currency: "€", discount: 10.0 }, // Discount of 10%
    sales: 450,
    stock: 110,
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6
  },
  {
    id: 12,
    name: "Inter Miami CF 2024/2025 Jersey",
    slug: "inter-miami-cf",
    brand: "Adidas",
    color: ["Black", "Pink"],
    thumb: "/jersey-soccer/mls/inter-miami/1.webp",
    images: [
      "/jersey-soccer/mls/inter-miami/1.webp",
      "/jersey-soccer/mls/inter-miami/2.webp",
      "/jersey-soccer/mls/inter-miami/3.webp"
    ],
    description:
      "Support Inter Miami CF in style with their 2024/2025 home jersey by Adidas. Featuring a bold black and pink design, this jersey combines aesthetics with comfort to honor the team's spirit.",
    tag: "MLS",
    price: { value: 88.0, currency: "€", discount: 5.0 }, // Discount of 5%
    sales: 320,
    stock: 140,
    sizes: ["S", "M", "L", "XL"],
    rating: 4.4
  }
];

export const SIZES = ["XXS", "XS", "S", "M", "L", "XL", "XXL"] as const;

export const BRAND = [...new Set(PRODUCTS.map((product) => product.brand))];

export const TAGS = [...new Set(PRODUCTS.map((product) => product.tag))];

export const COLORS = [...new Set(PRODUCTS.flatMap((product) => product.color))];

export const FILTERS = [
  {
    name: "Tag",
    key: "tag",
    values: TAGS
  },
  {
    name: "Brand",
    key: "brand",
    values: BRAND
  },
  {
    name: "Color",
    key: "color",
    values: COLORS
  }
];

export const PRICE = [
  {
    name: "Low to high",
    key: "low"
  },
  {
    name: "High to low",
    key: "high"
  }
];

export const SORT = [
  {
    name: "Most popular",
    key: "most"
  },
  {
    name: "Best rating",
    key: "best"
  },
  {
    name: "Newest",
    key: "newest"
  }
];

export interface Reviews {
  productsId: number;
  name: string;
  rating: number;
  review: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  thumb?: string;
  images?: string[];
  brand: string;
  color: string[];
  tag: string;
  description: string;
  price: {
    value: number;
    currency: string;
    discount?: number;
  };
  sales: number;
  stock: number;
  sizes: string[];
  rating: number;
}
