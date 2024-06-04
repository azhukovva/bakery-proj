import {
  qb,
  eclairs,
  baguette,
  icon1, 
  img1,
  img2,
  img3,

} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "story",
    title: "Our Story",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Eclair",
    icon: eclairs,
    description: "Indulge in the decadence of our eclairs, where traditional French patisserie meets a modern twist. Our eclairs boast a delicate choux pastry, filled with rich, velvety cream, and topped with a glossy glaze. Each bite is a symphony of textures and flavors, perfected by our master bakers."
  },
  {
    title: "Baguette",
    icon: baguette,
    description: "Experience the timeless charm of our artisan baguettes, a staple of French baking. Our baguettes are handcrafted using traditional techniques, resulting in a crispy, golden crust and a soft, airy interior. Whether enjoyed fresh from the oven or paired with your favorite meal, our baguettes are a testament to our commitment to authentic, high-quality baking."
  },
  {
    title: "qb coffee",
    icon: qb,
    description: "Savor the distinct aroma and robust flavor of our QB coffee, carefully selected from the finest coffee beans around the world. Our expertly trained baristas brew each cup to perfection, ensuring a rich and satisfying coffee experience. Whether you prefer a smooth espresso, a creamy latte, or a refreshing cold brew, our QB coffee is the perfect companion to our delectable pastries."
  },
];


const experiences = [
  {
    title: "March 2021 - April 2022",
    icon: icon1,
    iconBg: "#FFC0ED",
    points: [
      ""
    ],
  },
  {
    title: "Jan 2022 - June 2022",
    icon: icon1,
    iconBg: "#F5F5F5",
    points: [
      "After the croissants came baguettes, toasted bread, sourdough country bread Pain de Campagne and gradually we added more and more types of bread.",
      "Each type is preceded by a 'testing period' during which we hone the recipe to perfection. We fine-tune the ingredients so that they fit together nicely, adjusting the taste, the consistency of the dough, the correct baking of the crust, the amount of filling and many other things.",
      "When it's great, we go to our customers with a new kind.",
    ],
  },
  {
    title: "June 2022 - Nov 2023",
    icon: icon1,
    iconBg: "#FFC0ED",
    points: [
      "Spring 2022, we opened a second bakery in the centre of Brno. Also at Jaselská 2 we bake on site, from the oven straight into your hand. In addition, we built the bakery here so that you can see inside the ovens. You can also watch the production of croissants here.",
      "A year later, at the end of March 2023, we baked our third bakery at Josefska 2, not only can you see inside the ovens and the production, but you can also sit upstairs and have a choice coffee from The QT coffee. This way you can also enjoy a real French breakfast.",
    ],
  },
  {
    title: "Nov 2023 - Present",
    icon: icon1,
    iconBg: "#F5F5F5",
    date: "Jan 2023 - Present",
    points: [
      ""
    ],
  },
];

const events = [
  {
    name: "The Art of French Baking",
    points:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "workshop",
        color: "blue-text-gradient",
      },
      {
        name: "art",
        color: "green-text-gradient",
      },
      {
        name: "group",
        color: "pink-text-gradient",
      },
    ],
    image: img1,
  },
  {
    name: "Behind the Scenes: \nA Day in the Life at Le Doux",
    points: [
      "A typical day for your bakers and baristas.\n",
      "The process of sourcing and selecting ingredients.\n",
      "The journey from mixing bowl to storefront display",
    ],
    tags: [
      {
        name: "live",
        color: "blue-text-gradient",
      },
      {
        name: "free",
        color: "green-text-gradient",
      },
      {
        name: "oneYear",
        color: "pink-text-gradient",
      },
    ],
    image: img2,
  },
  {
    name: "Coffee Pairings: \nThe Perfect Match for Every Pastry",
    points:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "coffee",
        color: "blue-text-gradient",
      },
      {
        name: "qb",
        color: "pink-text-gradient",
      },
    ],
    image: img3,
  },
];

export { services, experiences, events };