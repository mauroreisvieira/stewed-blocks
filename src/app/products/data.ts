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
    name: "Performance Fitness Dress",
    slug: "performance-fitness-dress",
    category: "Dresses",
    color: ["Black", "Gray"],
    description:
      "Stay active in style with the Performance Fitness Dress, designed for high mobility and comfort. Made with moisture-wicking fabric, this dress keeps you cool and dry during workouts while offering a sleek, flattering silhouette.",
    tag: "Activewear",
    price: { value: 120.0, currency: "€" },
    sales: 500,
    stock: 100,
    sizes: ["XS", "S", "M", "L"],
    rating: 4.7
  },
  {
    id: 2,
    name: "Flowy Training Shorts",
    slug: "flowy-training-shorts",
    category: "Shorts",
    color: ["Blue", "White"],
    description:
      "Upgrade your workout wardrobe with the Flowy Training Shorts. Crafted from breathable and stretchable fabric, these shorts are perfect for intense training or relaxed exercises.",
    tag: "Athletic Shorts",
    price: { value: 40.0, currency: "€" },
    sales: 300,
    stock: 150,
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5
  },
  {
    id: 3,
    name: "Athleisure Oversized Hoodie",
    slug: "athleisure-oversized-hoodie",
    category: "Oversized Wear",
    color: ["Beige", "Navy"],
    description:
      "Stay cozy with the Athleisure Oversized Hoodie. Made from soft, warm fabric, it’s perfect for layering after workouts or lounging at home. The oversized fit ensures maximum comfort.",
    tag: "Oversized Wear",
    price: { value: 70.0, currency: "€" },
    sales: 200,
    stock: 120,
    sizes: ["One Size"],
    rating: 4.8
  },
  {
    id: 4,
    name: "Silk Training T-Shirt",
    slug: "silk-training-t-shirt",
    category: "T-Shirts",
    color: ["Pink", "Black"],
    description:
      "The Silk Training T-Shirt offers a luxurious twist on athletic wear. Its soft, breathable silk-blend fabric provides unmatched comfort and elegance during workouts or casual outings.",
    tag: "Luxury Activewear",
    price: { value: 50.0, currency: "€" },
    sales: 450,
    stock: 90,
    sizes: ["S", "M", "L"],
    rating: 4.6
  },
  {
    id: 5,
    name: "Lightweight Fitness Sneakers",
    slug: "lightweight-fitness-sneakers",
    category: "Sneakers",
    color: ["White", "Black"],
    description:
      "Designed for agility and support, the Lightweight Fitness Sneakers are perfect for running, training, or everyday wear. Their breathable mesh upper and cushioned sole ensure all-day comfort.",
    tag: "Athletic Shoes",
    price: { value: 90.0, currency: "€" },
    sales: 600,
    stock: 75,
    sizes: ["36", "38", "40", "42"],
    rating: 4.9
  },
  {
    id: 6,
    name: "Compression Socks",
    slug: "compression-socks",
    category: "Socks",
    color: ["Gray", "Navy"],
    description:
      "Boost circulation and reduce fatigue with Compression Socks. Designed for high-performance athletes, these socks provide comfort and support during intense workouts or long days.",
    tag: "Performance Gear",
    price: { value: 15.0, currency: "€" },
    sales: 800,
    stock: 200,
    sizes: ["S", "M", "L"],
    rating: 5
  },
  {
    id: 7,
    name: "Soft Knit Sweater",
    slug: "soft-knit-sweater",
    category: "Sweaters",
    color: ["Green", "Beige"],
    description:
      "The Soft Knit Sweater is the perfect post-workout layer. Its lightweight knit fabric keeps you warm without adding bulk, making it ideal for cool-downs or casual wear.",
    tag: "Cozy Activewear",
    price: { value: 60.0, currency: "€" },
    sales: 350,
    stock: 85,
    sizes: ["S", "M", "L", "XL"],
    rating: 4.4
  },
  {
    id: 8,
    name: "Reflective Running Tights",
    slug: "reflective-running-tights",
    category: "Shorts",
    color: ["Black", "Reflective Silver"],
    description:
      "Stay safe and stylish during night runs with Reflective Running Tights. Designed with high-visibility elements, they offer comfort, stretch, and support for all fitness activities.",
    tag: "Athletic Bottoms",
    price: { value: 50.0, currency: "€" },
    sales: 400,
    stock: 95,
    sizes: ["S", "M", "L"],
    rating: 4.7
  },
  {
    id: 9,
    name: "Seamless Training Tank Top",
    slug: "seamless-training-tank-top",
    category: "T-Shirts",
    color: ["Coral", "White"],
    description:
      "Experience ultimate comfort with the Seamless Training Tank Top. Its lightweight, breathable material ensures unrestricted movement and a perfect fit during any workout.",
    tag: "Training Essentials",
    price: { value: 35.0, currency: "€" },
    sales: 550,
    stock: 120,
    sizes: ["XS", "S", "M", "L"],
    rating: 4.6
  },
  {
    id: 10,
    name: "High-Waisted Workout Leggings",
    slug: "high-waisted-workout-leggings",
    category: "Shorts",
    color: ["Black", "Wine"],
    description:
      "The High-Waisted Workout Leggings provide support and style. With a compressive fit and moisture-wicking fabric, they’re perfect for high-intensity workouts or casual wear.",
    tag: "Athletic Bottoms",
    price: { value: 60.0, currency: "€" },
    sales: 700,
    stock: 80,
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8
  },
  {
    id: 11,
    name: "Breathable Fitness Cap",
    slug: "breathable-fitness-cap",
    category: "Shorts",
    color: ["Navy", "Gray"],
    description:
      "Keep cool and protect yourself from the sun with the Breathable Fitness Cap. Designed with lightweight, moisture-wicking material, it’s perfect for outdoor workouts.",
    tag: "Athletic Shorts",
    price: { value: 20.0, currency: "€" },
    sales: 400,
    stock: 100,
    sizes: ["One Size"],
    rating: 4.4
  },
  {
    id: 12,
    name: "Fleece-Lined Joggers",
    slug: "fleece-lined-joggers",
    category: "Sweaters",
    color: ["Charcoal", "Olive"],
    description:
      "Stay warm and comfortable in Fleece-Lined Joggers. Ideal for colder days, these joggers feature a soft interior lining and an adjustable waistband for a perfect fit.",
    tag: "Cozy Activewear",
    price: { value: 65.0, currency: "€" },
    sales: 250,
    stock: 90,
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5
  },
{
    id: 13,
    name: "Seamless Yoga Leggings",
    slug: "seamless-yoga-leggings",
    category: "Leggings",
    color: ["Lavender", "Black"],
    description:
      "Experience ultimate comfort with the Seamless Yoga Leggings. Designed for stretch and flexibility, they are perfect for yoga, Pilates, or lounging.",
    tag: "Yoga Essentials",
    price: { value: 55.0, currency: "€" },
    sales: 480,
    stock: 100,
    sizes: ["XS", "S", "M", "L"],
    rating: 4.8
  },
  {
    id: 14,
    name: "High-Performance Compression Leggings",
    slug: "high-performance-compression-leggings",
    category: "Leggings",
    color: ["Dark Gray", "Navy"],
    description:
      "Stay supported during intense workouts with High-Performance Compression Leggings. Designed to improve circulation and reduce muscle fatigue, they are a must-have for high-impact activities.",
    tag: "Athletic Bottoms",
    price: { value: 65.0, currency: "€" },
    sales: 600,
    stock: 85,
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7
  },
  {
    id: 15,
    name: "Sculpting Fitness Leggings",
    slug: "sculpting-fitness-leggings",
    category: "Leggings",
    color: ["Wine Red", "Olive"],
    description:
      "Achieve a sleek and sculpted look with Sculpting Fitness Leggings. Featuring a high-waist design and body-contouring fabric, these leggings provide comfort and style for any activity.",
    tag: "Shaping Gear",
    price: { value: 70.0, currency: "€" },
    sales: 350,
    stock: 75,
    sizes: ["XS", "S", "M", "L"],
    rating: 4.6
  },
  {
    id: 16,
    name: "Thermal Running Leggings",
    slug: "thermal-running-leggings",
    category: "Leggings",
    color: ["Black", "Charcoal"],
    description:
      "Stay warm during winter runs with Thermal Running Leggings. Featuring a fleece-lined interior, these leggings provide insulation without compromising on flexibility or breathability.",
    tag: "Cold-Weather Gear",
    price: { value: 75.0, currency: "€" },
    sales: 300,
    stock: 65,
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5
  }
];

export const SIZES = ["XXS", "XS", "S", "M", "L", "XL", "XXL"] as const;

export const CATEGORIES = [...new Set(PRODUCTS.map((product) => product.category))];

export const TAGS = [...new Set(PRODUCTS.map((product) => product.tag))];

export const COLORS = [...new Set(PRODUCTS.flatMap((product) => product.color))];

export const FILTERS = [
  {
    name: "Tag",
    key: "tag",
    values: TAGS
  },
  {
    name: "Category",
    key: "category",
    values: CATEGORIES
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
  category: string;
  color: string[];
  tag: string;
  description: string;
  price: {
    value: number;
    currency: string;
  };
  sales: number;
  stock: number;
  sizes: string[];
  discount?: number;
  rating: number;
}
