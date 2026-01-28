export type Testimonial = {
  id: string;
  name: string;
  role: string;
  image: string;
  headline: string;
  quote: string;
  variant: "daniel" | "jonathan" | "jeanette" | "patrick" | "kira";
};

export const testimonials: Testimonial[] = [
  {
    id: "daniel",
    name: "Daniel Clifford",
    role: "Verified Graduate",
    image: "/images/image-daniel.jpg",
    headline:
      "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    quote:
      "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here...",
    variant: "daniel",
  },
  {
    id: "jonathan",
    name: "Jonathan Walters",
    role: "Verified Graduate",
    image: "/images/image-jonathan.jpg",
    headline: "The team was very supportive and kept me motivated",
    quote:
      "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer...",
    variant: "jonathan",
  },
  {
    id: "jeanette",
    name: "Jeanette Harmon",
    role: "Verified Graduate",
    image: "/images/image-jeanette.jpg",
    headline: "An overall wonderful and rewarding experience",
    quote:
      "Thank you for the wonderful experience! I now have a job I really enjoy...",
    variant: "jeanette",
  },
  {
    id: "patrick",
    name: "Patrick Abrams",
    role: "Verified Graduate",
    image: "/images/image-patrick.jpg",
    headline:
      "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    quote:
      "The staff seem genuinely concerned about my progress which I find really refreshing...",
    variant: "patrick",
  },
  {
    id: "kira",
    name: "Kira Whittle",
    role: "Verified Graduate",
    image: "/images/image-kira.jpg",
    headline: "Such a life-changing experience. Highly recommended!",
    quote:
      "Before joining the bootcamp, I’ve never written a line of code. I needed some structure...",
    variant: "kira",
  },
];
