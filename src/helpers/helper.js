import GranEspresso from "../assets/images/home/desktop/image-gran-espresso.png";
import Planalto from "../assets/images/home/desktop/image-planalto.png";
import Piccollo from "../assets/images/home/desktop/image-piccollo.png";
import Danche from "../assets/images/home/desktop/image-danche.png";
import CofeeBean from "../assets/images/home/desktop/icon-coffee-bean.svg";
import GiftIcon from "../assets/images/home/desktop/icon-gift.svg";
import TruckIcon from "../assets/images/home/desktop/icon-truck.svg";
import UnitedKingdom from "../assets/images/about/desktop/illustration-uk.svg";
import Canada from "../assets/images/about/desktop/illustration-canada.svg";
import Australia from "../assets/images/about/desktop/illustration-australia.svg";
import Arrow from "../assets/images/plan/arrow.svg";

export const cofees = [
  {
    image: GranEspresso,
    title: "Gran Espresso",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience",
  },
  {
    image: Planalto,
    title: "Planalto",
    description:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
  },
  {
    image: Piccollo,
    title: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry ",
  },
  {
    image: Danche,
    title: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
  },
];

export const cardItems = [
  {
    image: CofeeBean,
    title: "Best quality",
    description:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    image: GiftIcon,
    title: "Exclusive benefits",
    description:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    image: TruckIcon,
    title: "Free shipping",
    description:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];

export const stepItems = [
  {
    step: "01",
    title: "Pick your coffee",
    description:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    step: "02",
    title: "Choose the frequency",
    description:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    step: "03",
    title: "Receive and enjoy!",
    description:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];
export const headQuartersItems = [
  {
    image: UnitedKingdom,
    country: "United Kingdom",
    address: "68 Asfordby Rd ",
    city: "Alcaston",
    province: "SY6 1YA",
    number: "+44 1241 918425",
  },
  {
    image: Canada,
    country: "Canada",
    address: "1528 Eglinton Avenue",
    city: "Toronto",
    province: "Ontario M4P 1A6",
    number: "+1 416 485 2997",
  },
  {
    image: Australia,
    country: "Australia",
    address: "36 Swanston Street",
    city: "Kewell",
    province: "Victoria ",
    number: "+61 4 9928 3629",
  },
];

export const questions = [
  {
    id: 1,
    question: "How do you drink your coffee?",
    closeArrow: Arrow,
    openArrow: Arrow,
    options: [
      {
        id: 1,
        type: "Capsule",
        answer: "Compatible with Nespresso systems and similar brewers",
      },
      {
        id: 2,
        type: "Filter",
        answer: "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        id: 3,
        type: "Espresso",
        answer:
          "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  },
  {
    id: 2,
    question: "What type of coffee?",
    closeArrow: Arrow,
    openArrow: Arrow,
    options: [
      {
        id: 1,
        type: "Single Origin",
        answer:
          "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        id: 2,
        type: "Decaf",
        answer:
          "Just like regular coffee, except the caffeine has been removed",
      },
      {
        id: 3,
        type: "Blended",
        answer:
          "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  {
    id: 3,
    question: "How much would you like?",
    closeArrow: Arrow,
    openArrow: Arrow,
    options: [
      {
        id: 1,
        type: "250g",
        answer: "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        id: 2,
        type: "500g",
        answer: "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        id: 3,
        type: "1000g",
        answer:
          "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
  },
  {
    id: 4,
    question: "Want us to grind them?",
    closeArrow: Arrow,
    openArrow: Arrow,
    options: [
      {
        id: 1,
        type: "Wholebean",
        answer: "Best choice if you cherish the full sensory experience",
      },
      {
        id: 2,
        type: "Filter",
        answer: "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      {
        id: 3,
        type: "Cafetiére",
        answer: "Course ground beans specially suited for french press coffee",
      },
    ],
  },
  {
    id: 5,
    question: "How often should we deliver?",
    closeArrow: Arrow,
    openArrow: Arrow,
    options: [
      {
        id: 1,
        type: "Every week",
        answer: "$7.20 per shipment. Includes free first-class shipping.",
      },
      {
        id: 2,
        type: "Every 2 weeks",
        answer: "$9.60 per shipment. Includes free priority shipping.",
      },
      {
        id: 3,
        type: "Every month",
        answer: "$12.00 per shipment. Includes free priority shipping.",
      },
    ],
  },
];
