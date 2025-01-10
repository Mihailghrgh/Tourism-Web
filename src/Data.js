import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpg";
import tour3 from "./images/tour-3.jpg";
import tour4 from "./images/tour-4.jpg";
import tour5 from "./images/tour-5.jpg";
import tour6 from "./images/tour-6.jpg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "Endless Hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "Amazing Comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    location: "Bucharest",
    date: "august 26th, 2025",
    days: "6 Days",
    title: "Romanian Adventure",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
    price: "$1500",
  },
  {
    id: 2,
    image: tour2,
    location: "Brasov",
    date: "December 26th, 2025",
    days: "7 Days",
    title: "Best of Brasov",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
    price: "$2100",
  },
  {
    id: 3,
    image: tour3,
    date: "June 3th, 2025",
    location: "Cheile Bicazului",
    days: "8 Days",
    title: "Cheile Bicazului",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
    price: "$1100",
  },
  {
    id: 4,
    image: tour4,
    location: "Hunedoara",
    date: "July 1th, 2025",
    days: "5 Days",
    title: "Castle Corvinilor",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
    price: "$800",
  },
  {
    id: 5,
    image: tour5,
    location: "Timisoara",
    date: "March 2th, 2025",
    days: "8 Days",
    title: "Timisoara",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
    price: "$900",
  },
  {
    id: 6,
    image: tour6,
    location: "Craiova",
    date: "October 3th, 2025",
    days: "4 Days",
    title: "Craiova",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
    price: "$560",
  },
];
