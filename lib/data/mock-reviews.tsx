export interface Review {
  id: string;
  name: string;
  text: string;
  approved: boolean;
  featured: boolean;
  created_at: string;
}

export const MOCK_REVIEWS: Review[] = [
  {
    id: "rv-001",
    name: "Chidi Okafor",
    text: "I ordered the Lagos Drift and honestly wasn't expecting much at that price point, but I was completely wrong. The leather is soft, the sole is thick enough to handle our roads, and my feet didn't ache once after a full day out. I've already recommended it to three people.",
    approved: true,
    featured: true,
    created_at: "2025-05-14T10:22:00Z",
  },
  {
    id: "rv-002",
    name: "Adaeze Nwosu",
    text: "The Eko Grace fits like it was made for my foot. Slim, elegant, and the cushioned footbed is a dream. I wore it to a wedding and got so many compliments. Will definitely be ordering more colours if they drop.",
    approved: true,
    featured: true,
    created_at: "2025-05-20T14:05:00Z",
  },
  {
    id: "rv-003",
    name: "Emeka Eze",
    text: "Delta Cross is solid. The non-slip sole is no joke — I walked through a wet market and didn't slip once. My only gripe is the sizing ran slightly wide for me, but nothing a thin insole won't fix.",
    approved: false,
    featured: false,
    created_at: "2025-06-01T09:18:00Z",
  },
  {
    id: "rv-004",
    name: "Funmi Adeyemi",
    text: "Abuja Slide is everything I needed for a casual everyday palm. The woven strap is comfortable and the arch support is genuinely there — not just a marketing claim. Wore it for a whole weekend without a single blister.",
    approved: true,
    featured: true,
    created_at: "2025-06-03T16:44:00Z",
  },
  {
    id: "rv-005",
    name: "Tunde Fashola",
    text: "Delivery was fast and packaging was clean. The Port Classic is a good palm but I expected the sole to be a bit softer. Still wears well and looks great with jeans. Decent value overall.",
    approved: false,
    featured: false,
    created_at: "2025-06-07T11:30:00Z",
  },
  {
    id: "rv-006",
    name: "Ngozi Dike",
    text: "I bought the Enugu Wrap and it's beautiful but the strap adjustment on mine was a bit stiff at first. Loosened up after two days of wear. The jute texture sole is very unique and the heat resistance is real — perfect for Lagos afternoons.",
    approved: false,
    featured: false,
    created_at: "2025-06-09T08:55:00Z",
  },
  {
    id: "rv-007",
    name: "Seun Balogun",
    text: "These are quality palms. I've bought from so many Nigerian footwear brands and most don't last past three months. My Lagos Drift is still going strong at five months and looks almost new. Zufeet actually cares about the product.",
    approved: true,
    featured: true,
    created_at: "2025-06-11T13:20:00Z",
  },
  {
    id: "rv-008",
    name: "Kemi Rasheed",
    text: "The Eko Grace is cute but the strap on mine snapped after about six weeks. It wasn't from rough use either, just regular wear. Customer service was helpful and offered a replacement but I wasn't fully satisfied.",
    approved: false,
    featured: false,
    created_at: "2025-06-13T17:02:00Z",
  },
  {
    id: "rv-009",
    name: "Babatunde Coker",
    text: "Ordered the Delta Cross for my wife and she hasn't taken it off. The sizing guide on the site was accurate which I really appreciated — too many brands get that wrong. Will order the men's version for myself next.",
    approved: true,
    featured: false,
    created_at: "2025-06-15T10:48:00Z",
  },
  {
    id: "rv-010",
    name: "Ifeoma Anyanwu",
    text: "Port Classic is a no-frills workhorse and that's exactly what I needed. Wore it on a site visit across uneven ground and my feet were fine the whole day. The wide fit is a blessing — most palms are too narrow for my feet.",
    approved: true,
    featured: false,
    created_at: "2025-06-17T09:10:00Z",
  },
  {
    id: "rv-011",
    name: "Dayo Martins",
    text: "Abuja Slide arrived quickly and feels premium in hand. The foam insole breaks in really nicely. I just wish there were more colour options — the current selection is a bit limited for women who want variety.",
    approved: true,
    featured: true,
    created_at: "2025-06-18T15:33:00Z",
  },
  {
    id: "rv-012",
    name: "Oluwasegun Ajayi",
    text: "I had an issue with my order — wrong size shipped. Reached out and the team sorted it within 48 hours with no drama. The correct pair arrived and the quality is exactly what was shown on the site. Good recovery.",
    approved: false,
    featured: false,
    created_at: "2025-06-19T12:00:00Z",
  },
];
