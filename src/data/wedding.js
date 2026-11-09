const img = (id, extra = "w=1600&q=80") =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&${extra}`;

const publicFile = (path) => `${import.meta.env.BASE_URL}${path}`;

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
    iso: "2026-12-18T13:00:00+08:00",
    display: "Friday, 18 December 2026",
    formal: "the eighteenth of December, two thousand twenty-six",
    short: "18 · 12 · 2026",
  },
  location: {
    city: "Bacolod, Negros Occidental",
    short: "Bacolod",
  },
  hashtag: "#RolandoAndDanica",
  hashtags: ["#RolandoAndDanica", "#RD2026"],
  song: publicFile("theme-song.mp3"),
  rsvpBy: "November 30, 2026",
  rsvpNote:
    "We are so excited to celebrate our wedding day with you! To ensure an intimate and enjoyable experience for everyone, we have reserved seating for each guest individually. We kindly ask that each invitation is for ONE (1) PERSON ONLY. Please RSVP by November 30, 2026 to confirm your attendance. We can’t wait to share this unforgettable day with you!",
  intro:
    "In Bacolod, two families become one. With grateful hearts, we invite you to witness our vows at Sacred Heart Seminary and Shrine and to linger with us through an evening of warmth, music, and quiet joy.",
  welcome:
    "We are so excited to share this special day with you! Here, you’ll find all the details about our wedding day, including venue locations, event schedules, and more. Please explore the site, RSVP, and learn a little more about our journey together. We can’t wait to celebrate with you and create memories that will last a lifetime.",
  story: {
    title: "Our Love Story",
    names: "Rolando & Danica",
    image: img("photo-1441974231531-c6227db76b6e", "w=1200&q=80"),
    alt: "Sunlit forest canopy",
    paragraphs: [
      "Fifteen years ago, at Sto. Niño Parish, two young souls crossed paths without knowing that one day, their story would lead them to forever.",
      "Rolando, a sacristan server, and Danica, who was just beginning her journey as a youth member and catechist, shared a glance that neither of them knew would last a lifetime.",
      "Their love story began during their high school and college years. Life wasn’t always easy, and perhaps they were still too young to commit to a serious relationship. Danica was the second of five children, while Rolando, also known as “Jay-R,” was the youngest of five.",
      "What started as a secret relationship, known only to the two of them, slowly grew into something more meaningful. They kept their relationship private because they knew they were still young, but their feelings for each other continued to grow.",
      "Life had its own way of revealing their love. When Danica was hospitalized due to appendicitis, Jay-R didn’t hesitate to visit her at the hospital and introduce himself. From then on, Danica’s family came to know and accept him. The same happened with Jay-R’s family, who welcomed Danica when he introduced her during one of their family gatherings.",
      "But life had more surprises in store for them. Their journey was filled with unexpected twists, challenges, highs, and lows, yet they never gave up on each other.",
      "There were times when Jay-R would save part of his school allowance just to wait for Danica outside UNO-R after her work or classes. He would treat her to siomai, street food, or fast food. There were even times when he joined boxing activities at school and used his allowance to take her to the movies.",
      "These may have seemed like simple gestures, but they became some of the most treasured memories of their relationship. They taught them that love isn’t measured by how much you can give, but by the sincerity and effort behind every little thing.",
      "And through the years, they created countless memories together, proving that even during their hardest days, there was always a reason to keep going and a reason to choose each other.",
      "On November 23, 2023, they took another beautiful step in their journey when they got engaged. After 15 years of growing together, overcoming challenges, and creating memories, they have finally decided to step into another chapter of their lives — marriage.",
      "As they begin this new journey, they are truly grateful to their families for their endless love, support, guidance, and blessings. They are also thankful to the friends who have been part of their story from the very beginning and those who continue to stand by their side today.",
      {
        emphasis: true,
        text: "And now, the two young souls who once shared a simple glance at Sto. Niño Parish are standing before everyone, ready to make a promise that goes beyond words.",
      },
      "What started as a secret love during their younger years has become a lifetime commitment. From simple dates and small sacrifices to facing life’s greatest challenges, every moment has brought them to where they are today.",
      "Their journey reminds us that love isn’t about having a perfect story or an easy path. It’s about growing together, choosing each other despite life’s uncertainties, and finding a reason to stay even when things get difficult.",
      {
        emphasis: true,
        text: "Fifteen years ago, they never knew where that simple glance would lead them. Today, they know exactly where they want to go — together, hand in hand, into forever.",
      },
      "And this time, there are no more secrets, no more waiting, and no more wondering what tomorrow holds. Just two hearts, one promise, and a lifetime of love still waiting to unfold.",
      {
        emphasis: true,
        text: "Their story doesn’t end here. In fact, this is where their forever begins. ❤️",
      },
    ],
  },
  details: [
    {
      id: "ceremony",
      kicker: "The Ceremony",
      time: "One o’clock in the afternoon",
      place: "Sacred Heart Seminary and Shrine - Bacolod",
      venue: "Lizares Street",
      address: "MW5W+R4W, Lizares St, Bacolod, 6100 Negros Occidental",
      mapsUrl:
        "https://www.google.com/maps/place/Lupit+Church/@10.6599394,122.9451098,219m/data=!3m1!1e3!4m6!3m5!1s0x33aed1cae1de277d:0x5703603b1cf06e55!8m2!3d10.659613!4d122.9453265!16s%2Fg%2F11f3dg48rb?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
      note: "Guests are invited to be seated by 1:00 in the afternoon. The rite will last approximately forty-five minutes.",
      image: publicFile("venues/sacred-heart.png"),
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
      image: img("photo-1519225421980-715cb0215aed", "w=1600&q=80"),
    },
  ],
  program: [
    { time: "1:00 PM", title: "Arrival", copy: "Guests are welcomed at Sacred Heart Seminary and Shrine on Lizares Street." },
    { time: "1:00 PM", title: "Ceremony", copy: "The exchange of vows and rings." },
    { time: "2:00 PM", title: "Photographs", copy: "Portraits with family after the rite." },
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
    image: img("photo-1519741497674-611481863552", "w=2000&q=80"),
    alt: "The couple sharing a kiss",
  },
  closing: {
    image: img("photo-1470071459604-3b5ec3a7fe05", "w=2000&q=80"),
    alt: "A misty green landscape at dusk",
    message:
      "With love and gratitude, we look toward the day we gather in Bacolod. Until then, you are already in our hearts.",
  },
  dressCode: {
    title: "Dress Code",
    ninong: {
      title: "Ninong",
      copy: "White long-sleeve barong, black pants and shoes",
      image: img("photo-1617137968427-85924c800a22", "w=900&q=80"),
      alt: "Sample look: white long-sleeve barong with black trousers",
    },
    ninang: {
      title: "Ninang",
      copy: "Beige long dress",
      image: img("photo-1515886657613-9f3515b0c78f", "w=900&q=80"),
      alt: "Sample look: beige long dress",
    },
    palette: [
      { name: "Forest", hex: "#2a4735", image: img("photo-1441974231531-c6227db76b6e", "w=600&q=80") },
      { name: "Sage", hex: "#8b9a7d", image: img("photo-1469474968028-56623f02e42e", "w=600&q=80") },
      { name: "Ivory", hex: "#f6f1e7", image: img("photo-1515886657613-9f3515b0c78f", "w=600&q=80") },
      { name: "Champagne", hex: "#d4c4aa", image: img("photo-1519741497674-611481863552", "w=600&q=80") },
      { name: "Taupe", hex: "#8c6b4f", image: img("photo-1445205170230-11324d5434ae", "w=600&q=80") },
      { name: "Beige", hex: "#e6dccb", image: img("photo-1524504388940-b1c1722653e1", "w=600&q=80") },
    ],
    notes: [
      "We kindly request that all guests honor the dress code by avoiding overly casual attire such as polo shirts, slippers, denim, and jeans. Please avoid mini dresses.",
      "Please adhere to the specified dress code and color motif provided. Dressing accordingly is deeply appreciated, as it will contribute to the elegance and harmony of our celebration.",
      "We look forward to seeing you in your finest that complements our chosen theme!",
    ],
  },
  couplePhotos: [
    { src: img("photo-1519741497674-611481863552", "w=2000&q=80"), alt: "Rolando and Danica" },
    { src: img("photo-1522673607200-164d1b6ce486", "w=2000&q=80"), alt: "Rolando and Danica together" },
  ],
  entourage: {
    parents: [
      { title: "Parents of the Groom", names: "To be presented" },
      { title: "Parents of the Bride", names: "To be presented" },
    ],
    sponsors: "Principal sponsors will be presented on the day.",
  },
  registry: {
    intro:
      "With all that we have, we've been truly blessed. Your presence and prayers are all that we request, but if you desire to give nonetheless, a monetary gift is the one we suggest.",
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
  faq: [
    {
      q: "RSVP",
      a: "We are so excited to celebrate our wedding day with you! To ensure an intimate and enjoyable experience for everyone, we have reserved seating for each guest individually. We kindly ask that each invitation is for ONE (1) PERSON ONLY. Please RSVP by November 30, 2026 to confirm your attendance.",
    },
    {
      q: "Is there parking space available for my car?",
      a: "Yes, there is parking available at both Sacred Heart Seminary and Shrine and Garden Royale. Please take note that it is first come, first served, so you might not want to be late.",
    },
    {
      q: "I said “NO” to the RSVP but I had a change of plans — I can attend now! What should I do?",
      a: "Please check with us first. Unfortunately, we have a strict guest list. Kindly inform us if your schedule clears up so we can try to accommodate you. If seats become available, we will let you know as soon as possible. Please do not attend unannounced, as we may not have any available seats for you.",
    },
    {
      q: "When is the appropriate time to leave?",
      a: "This event took us months to plan, and we want to celebrate it with the people that are very dear to our hearts. We want you to have fun! Celebrate with us until the end of the program.",
    },
    {
      q: "How can I help the couple have a great time during their wedding?",
      a: "Pray with us for favorable weather and continued blessings as we enter this new chapter. RSVP as soon as your schedule is cleared. Dress according to our motif. Be on time. Follow the seating arrangement at the reception. Stay until the end of the program. Join the activities and enjoy!",
    },
    {
      q: "May I invite a “plus one” to the event?",
      a: "As much as we would love to accommodate all our friends and family, we have a limited number of guests. This event is strictly by invitation only. Each invitation admits one person. Guests not found on the guest list will not be allowed to enter.",
    },
    {
      q: "What if I RSVP’d but cannot attend?",
      a: "We would love to have you at our wedding, but we understand that there are circumstances beyond our control. Please let us know as soon as possible so we can reallocate your seat.",
    },
    {
      q: "Can I sit anywhere at the reception?",
      a: "Please don’t. The seating arrangement is planned for everyone’s convenience. You’ll be seated with friends or people who share your company. Our coordinators will gladly help you find your designated seat after registration.",
    },
    {
      q: "Am I allowed to take pictures and/or videos during the ceremony?",
      a: "We request everyone to keep the ceremony camera-free. While our I Do’s are unplugged, our reception is not — you’ll have plenty of chances to take pictures there. Please use our official hashtags.",
    },
    {
      q: "Do we really need to RSVP? We already said “YES” to the couple.",
      a: "Yes, please. We need your formal RSVP to consolidate guest details and finalize the headcount for catering and seating.",
    },
  ],
};

export const mapsSearch = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
