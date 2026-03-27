// TODO: Replace all placeholder values with real content from client

export const SITE = {
  name: "The Next Step Basketball Training",
  shortName: "TNS Basketball",
  description:
    "Elite basketball training and camps for players of all levels.",
};

export const COACH = {
  name: "Coach Al Blount", // TODO: confirm preferred name
  title: "Head Trainer & Camp Director", // TODO: confirm
  bio: "TODO: replace with real bio text from client.", // TODO: client to provide
  headshotUrl: "https://picsum.photos/seed/coach/400/500", // TODO: real headshot
};

export const HERO = {
  headline: "Your Game. Elevated.", // TODO: confirm with client
  subheadline:
    "Personalized basketball training designed to take your game to the next level.", // TODO: confirm
  backgroundUrl: "https://picsum.photos/seed/basketball/1600/900", // TODO: real action photo
};

export const SERVICES = [
  {
    id: "individual",
    title: "Individual Training",
    description:
      "Personalized 1-on-1 sessions focused on your specific needs — ball handling, shooting mechanics, footwork, and IQ.", // TODO: refine
    icon: "🏀",
    href: "/training",
  },
  {
    id: "group",
    title: "Group Sessions",
    description:
      "Small-group workouts (2–6 players) that combine skill development with competitive reps and team concepts.", // TODO: refine
    icon: "👥",
    href: "/training",
  },
  {
    id: "camps",
    title: "Training Camps",
    description:
      "Multi-day camps for youth players ages 8–18. Full-day and half-day formats available throughout the year.", // TODO: real dates
    icon: "🏕️",
    href: "/training",
  },
];

export const CAMPS = [
  {
    id: "camp-1",
    name: "Summer Elite Camp — Session 1", // TODO: real name
    dates: "July 7–11, 2025", // TODO: real dates
    ages: "Ages 10–14",
    price: "$299",
    spotsLeft: 8, // TODO: real availability or remove
    description:
      "Five days of intensive skill development, film study, and competition. Small groups, max 20 players.", // TODO: refine
  },
  {
    id: "camp-2",
    name: "Summer Elite Camp — Session 2",
    dates: "July 21–25, 2025",
    ages: "Ages 14–18",
    price: "$349",
    spotsLeft: 4,
    description:
      "Advanced camp for high school players. Focus on college-level concepts, positioning, and leadership.", // TODO: refine
  },
  {
    id: "camp-3",
    name: "Youth Fundamentals Camp",
    dates: "June 23–27, 2025",
    ages: "Ages 7–10",
    price: "$199",
    spotsLeft: 12,
    description:
      "Introduction to basketball fundamentals in a fun, positive environment. Perfect for beginners.", // TODO: refine
  },
];

export const CONTACT = {
  email: "blountball1@gmail.com", // TODO: real email address from client
  phone: "(610) 737-8696", // TODO: real phone number from client
  location: "Lehigh Valley, PA",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Programs", href: "/training" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];
