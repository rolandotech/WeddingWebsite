const img = (id, extra = "w=1600&q=80") =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&${extra}`;

export const wedding = {
  groom: {
    first: "Rolando",
    full: "Rolando M. Mendoza Jr.",
  },
  bride: {
    first: "Danica",
    full: "Danica M. Galas",
  },
  names: "Rolando & Danica",
  date: {
    iso: "2026-12-18T14:00:00+08:00",
    display: "Friday, 18 December 2026",
    formal: "the eighteenth of December, two thousand twenty-six",
    short: "18 · 12 · 2026",
  },
  location: {
    city: "Bacolod, Negros Occidental",
    short: "Bacolod",
  },
  intro:
    "In Bacolod, two families become one. With grateful hearts, we invite you to witness our vows at Lupit Church and to linger with us through an evening of warmth, music, and quiet joy.",
  storyLead:
    "Ours is not a story of grand coincidence, but of a slow, certain unfolding — the kind that feels, looking back, as though it had always been waiting.",
  chapters: [
    {
      numeral: "I",
      title: "The Meeting",
      date: "Autumn 2019",
      image: img("photo-1441974231531-c6227db76b6e", "w=1200&q=80"),
      alt: "Sunlit forest canopy",
      body: "They met at a family gathering in the hills, where the air was cool and the afternoon stretched without hurry. Rolando was the quiet one by the garden wall. Danica was laughter in a linen dress. A shared glance, then a conversation that outlasted the coffee, then the long drive home with a name that would not leave the mind.",
    },
    {
      numeral: "II",
      title: "Becoming Us",
      date: "2020 — 2024",
      image: img("photo-1502082553048-f009c37129b9", "w=1200&q=80"),
      alt: "A quiet garden path",
      body: "The years that followed were made of ordinary days that somehow felt like gifts: markets on Saturdays, letters when they were apart, patience in the hard seasons, and a friendship that grew sturdier than romance alone. They learned the shape of each other’s silences, and how to make a home of them.",
    },
    {
      numeral: "III",
      title: "The Promise",
      date: "December 2025",
      image: img("photo-1518531933037-91b2f5f229cc", "w=1200&q=80"),
      alt: "Lush green leaves",
      body: "He asked beneath the old mango tree at her family’s garden — no audience, no spectacle, only the late light and a question spoken softly. She answered before he had quite finished. That evening they walked the same path they always had, only now it led somewhere named.",
    },
    {
      numeral: "IV",
      title: "Forever Begins",
      date: "December 2026",
      image: img("photo-1464366400600-7168b8af9bc3", "w=1200&q=80"),
      alt: "Outdoor wedding ceremony chairs among trees",
      body: "And so we arrive here: a garden, a gathering of the people who shaped us, and a promise spoken in daylight. We hope you will stand with us as Rolando and Danica begin the long, green work of a life together.",
    },
  ],
  details: [
    {
      id: "ceremony",
      kicker: "The Ceremony",
      time: "Two o’clock in the afternoon",
      place: "Lupit Church",
      venue: "Sacred Heart Shrine",
      address: "MW5W+R4W, Lizares St, Bacolod, 6100 Negros Occidental",
      mapsUrl:
        "https://www.google.com/maps/place/Lupit+Church/@10.6599394,122.9451098,219m/data=!3m1!1e3!4m6!3m5!1s0x33aed1cae1de277d:0x5703603b1cf06e55!8m2!3d10.659613!4d122.9453265!16s%2Fg%2F11f3dg48rb?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
      note: "Guests are invited to be seated by 1:40 in the afternoon. The rite will last approximately forty-five minutes.",
    },
    {
      id: "reception",
      kicker: "The Reception",
      time: "Five o’clock in the afternoon",
      place: "Garden Royale",
      venue: "Goldenfield Commercial Complex",
      address: "Araneta Ave, Singcang, Bacolod, 6100 Negros Occidental",
      mapsUrl:
        "https://www.google.com/maps/place/Garden+Royale/@10.6497431,122.9384674,219m/data=!3m1!1e3!4m14!1m7!3m6!1s0x33aed02e9c35e421:0x4f684c1de7f54bab!2sGoldenfield+Commercial+Complex!8m2!3d10.6499474!4d122.9376573!16s%2Fg%2F1tzvt280!3m5!1s0x33aed02c3b1ab6af:0x14601ff09f68c0d9!8m2!3d10.6496631!4d122.9387722!16s%2Fg%2F12qh6__0q?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
      note: "Cocktails, dinner, and dancing as the evening unfolds at Garden Royale.",
    },
  ],
  program: [
    { time: "1:00 PM", title: "Arrival", copy: "Guests are welcomed at Lupit Church on Lizares Street." },
    { time: "2:00 PM", title: "Ceremony", copy: "The exchange of vows and rings." },
    { time: "3:00 PM", title: "Photographs", copy: "Portraits with family after the rite." },
    { time: "5:00 PM", title: "Reception", copy: "Guests gather at Garden Royale, Goldenfield Commercial Complex." },
    { time: "6:30 PM", title: "Dinner", copy: "A shared table, toasts, and the first dance." },
    { time: "8:00 PM", title: "Celebration", copy: "Dancing until the night grows quiet." },
  ],
  gallery: [
    { src: img("photo-1519741497674-611481863552", "w=1400&q=80"), alt: "Couple sharing a kiss at their wedding", tall: true },
    { src: img("photo-1470071459604-3b5ec3a7fe05", "w=1200&q=80"), alt: "Mist over a green hillside" },
    { src: img("photo-1490750967868-88aa4486c946", "w=1200&q=80"), alt: "Soft garden flowers" },
    { src: img("photo-1522673607200-164d1b6ce486", "w=1200&q=80"), alt: "Couple walking together outdoors", tall: true },
    { src: img("photo-1519225421980-715cb0215aed", "w=1400&q=80"), alt: "Elegant reception table setting" },
    { src: img("photo-1520854221256-17451cc331bf", "w=1200&q=80"), alt: "Wedding bouquet of white flowers" },
    { src: img("photo-1441974231531-c6227db76b6e", "w=1400&q=80"), alt: "Sun through a forest canopy", tall: true },
    { src: img("photo-1465495976277-4387d4b0b4c6", "w=1200&q=80"), alt: "Wedding ceremony in nature" },
    { src: img("photo-1469474968028-56623f02e42e", "w=1400&q=80"), alt: "Golden light over a green valley" },
  ],
  hero: {
    image: img("photo-1465495976277-4387d4b0b4c6", "w=2000&q=80"),
    alt: "An intimate outdoor wedding among trees",
  },
  closing: {
    image: img("photo-1470071459604-3b5ec3a7fe05", "w=2000&q=80"),
    alt: "A misty green landscape at dusk",
    message:
      "With love and gratitude, we look toward the day we gather in Bacolod. Until then, you are already in our hearts.",
  },
  dressCode: {
    title: "Garden Formal",
    intro:
      "Dress as you would for an evening in a cultivated garden — polished, at ease, and in conversation with the landscape. We ask our guests to honor a palette of earth and leaf.",
    palette: [
      { name: "Forest", hex: "#2a4735" },
      { name: "Sage", hex: "#8b9a7d" },
      { name: "Ivory", hex: "#f6f1e7" },
      { name: "Champagne", hex: "#d4c4aa" },
      { name: "Taupe", hex: "#8c6b4f" },
      { name: "Beige", hex: "#e6dccb" },
    ],
    gentlemen:
      "A barong Tagalog in ivory or jusi, or a tailored suit in forest, taupe, or warm grey. Black shoes. Pocket squares in sage or champagne are welcome.",
    ladies:
      "Floor-length or tea-length gowns in sage, champagne, ivory, or muted earth. Flowing fabrics, gentle movement. We kindly request no white, no scarlet, and no athletic attire.",
  },
  registry: {
    intro:
      "Your presence at our wedding is the gift we most desire. Should you wish to honor us further, we have set aside a small, quiet way to do so.",
    notes: [
      {
        title: "A home of our own",
        copy: "Contributions toward the beginning of our household may be given in a sealed envelope on the day, or by arrangement with our families.",
      },
      {
        title: "A season of travel",
        copy: "We hope to walk new gardens together after the wedding. Those who wish to share in that chapter may speak with Rolando’s parents.",
      },
    ],
  },
};

export const mapsSearch = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
