/**
 * HCM Maker Growth — Workshop Ledger design reminder
 * This is a realistic client-side demonstration repository. It deliberately mirrors the
 * entities intended for Supabase, while keeping sample data and business rules portable.
 */

import type { BusinessCheck, GrowthScore, Workspace } from "@/lib/hcm-types";

export const defaultBusinessCheck: BusinessCheck = {
  businessName: "Oak & Grain Furniture",
  makerName: "Alex Mercer",
  craftCategory: "Furniture making",
  location: "Hebden Bridge, West Yorkshire",
  website: "oakandgrain.example",
  socialChannels: "Instagram, Pinterest",
  sellingChannels: "Commissions, local markets, website",
  products: "Bespoke dining tables, benches and occasional furniture",
  idealCustomer: "Homeowners who value considered, long-lasting pieces",
  biggestProblem: "Turning interest in the work into more bespoke enquiries",
  discovery: "Instagram, word of mouth and local markets",
  collectsDetails: "Sometimes",
  followsUp: "Not regularly",
  goal90: "Book three bespoke dining-table commissions",
};

export const defaultScore: GrowthScore = {
  overall: 67,
  visibility: 74,
  presentation: 76,
  content: 68,
  enquiries: 52,
  followUp: 39,
  repeat: 43,
  seasonal: 58,
};

export const defaultWorkspace: Workspace = {
  check: defaultBusinessCheck,
  score: defaultScore,
  currentMonth: "September",
  nextMonth: "October",
  reviewOpened: false,
  nextPlanCreated: false,
  actions: [
    {
      id: "walnut-table",
      title: "Promote your walnut dining table",
      description: "Build a short campaign around the finished table and the choices that made it personal.",
      why: "This is one of your strongest products, and autumn is a good moment for customers to plan a statement piece before the festive season.",
      priority: "High",
      due: "18 Sep",
      status: "in-progress",
      expected: "2 qualified commission enquiries",
      category: "Visibility",
      social: "A dining table should earn its place in a home for years. This walnut piece was made around one family's Sunday rituals — quiet grain, softened edges and room for everyone. Thinking about a table made for your own home? Send me a note and we can begin with the space you have.",
      email: "Subject: A table made for the way you gather\n\nI have just finished a bespoke walnut dining table for a family who wanted more room for slow Sunday lunches. If a made-to-measure table is on your mind this autumn, I have a small number of commission conversations available.",
      websiteCopy: "Commission a dining table that fits your room, your routine and the years ahead. Each piece is designed with you, then made by hand in my Yorkshire workshop.",
      storyAngle: "Tell the story of the family ritual the table was designed to support, not just the timber it is made from.",
    },
    {
      id: "bespoke-page",
      title: "Make your bespoke furniture page easier to enquire from",
      description: "Give interested visitors one clear, reassuring next step and show what happens after they get in touch.",
      why: "People can see the work, but the route from admiration to a commission enquiry is still too vague.",
      priority: "High",
      due: "22 Sep",
      status: "to-do",
      expected: "A clearer route to first conversations",
      category: "Enquiries",
      social: "Planning a piece of furniture should feel exciting, not daunting. I have shared a little more about what happens after your first enquiry — from a first sketch to delivery day.",
      email: "Subject: Thinking about a made-to-measure piece?\n\nThe first conversation is simply a chance to talk through the room, what you need from the piece and the materials you are drawn to. There is no need to have every detail worked out before you write.",
      websiteCopy: "Tell me a little about the room and what you need from the piece. I will reply with a few questions and, if it feels like a good fit, we can arrange an initial design conversation.",
      storyAngle: "Explain the gentle first step that removes uncertainty for a future commission customer.",
    },
    {
      id: "previous-customers",
      title: "Contact previous customers about the new collection",
      description: "Reach out to customers whose past purchases make this season's work especially relevant.",
      why: "You have warm relationships with people who already understand the value of your work, but they have not heard from you lately.",
      priority: "High",
      due: "25 Sep",
      status: "to-do",
      expected: "3 personal reconnections",
      category: "Customers",
      social: "Some of the pieces I am finishing this month grew from conversations with past customers — the kind where a home changes and a new need appears. I will be sharing a few new pieces shortly.",
      email: "Subject: A small note from the workshop\n\nI hope you are still enjoying your piece. I am working on a small autumn collection and thought of you because the new work shares some of the same warm timber and quiet details you chose before.",
      websiteCopy: "Past customer? I would be pleased to hear how your piece has settled into your home — and what you might need next.",
      storyAngle: "Show how a past commission becomes part of a longer relationship, not a single transaction.",
    },
    {
      id: "customer-story",
      title: "Publish two customer stories",
      description: "Turn real commissions into useful proof of the way your work improves a home.",
      why: "Customer stories help future buyers picture the process and build trust before an enquiry.",
      priority: "Medium",
      due: "28 Sep",
      status: "complete",
      expected: "More confidence among new website visitors",
      category: "Content",
      social: "Every commission begins with a real life question. For this project, it was: how can a dining room work harder without losing its sense of calm? I have shared the finished answer in the latest workshop story.",
      email: "Subject: From an awkward corner to the centre of the room\n\nA recent commission began with an underused dining space and a family who wanted to gather more often. Here is how we made the piece work for them.",
      websiteCopy: "Read how a bespoke piece took shape around one family's room, routines and favourite materials.",
      storyAngle: "Start with the customer's everyday problem, then show the crafted solution and its life at home.",
    },
    {
      id: "commission-slots",
      title: "Promote your October commission slots",
      description: "Set a clear, warm invitation for customers who are thinking about a piece for winter.",
      why: "A defined window makes the next step timely without putting pressure on the customer.",
      priority: "Medium",
      due: "30 Sep",
      status: "to-do",
      expected: "Two commission conversations booked",
      category: "Seasonal",
      social: "I have opened two October conversations for bespoke furniture planned for the winter months. If you have a room or a gathering in mind, now is a good time to begin.",
      email: "Subject: October commission conversations are open\n\nI have space to begin two new furniture commissions next month. If a table, bench or storage piece has been quietly waiting on your list, I would love to hear what you have in mind.",
      websiteCopy: "Two October commission conversations are now available for pieces to be made over the winter months.",
      storyAngle: "Frame a commission slot as an invitation to start a thoughtful process, never as a hard sell.",
    },
  ],
  customers: [
    { id: "john", name: "John Smith", purchase: "Oak dining table", lastPurchase: "Jan 2025", lastContact: "8 months ago", opportunity: "New collection", notes: "Interested in a matching bench when they have finished their kitchen work.", message: "Hello John, I hope the dining table has settled in well. I am working on a small autumn collection and thought you might like to see a new bench design that could work beautifully alongside it.", followUpDate: "20 Sep", completed: false },
    { id: "sarah", name: "Sarah Jones", purchase: "Coffee table", lastPurchase: "Apr 2025", lastContact: "5 months ago", opportunity: "Related product", notes: "Loved the tactile finish and was considering shelving for the sitting room.", message: "Hello Sarah, I was thinking about your coffee table as I have just finished some open shelving in a similar warm oak. I wondered whether it might suit the sitting room you mentioned.", followUpDate: "24 Sep", completed: false },
    { id: "david", name: "David Brown", purchase: "Dining chairs", lastPurchase: "Oct 2024", lastContact: "11 months ago", opportunity: "Follow-up", notes: "Bought six chairs as part of a renovation. Ask how the finished dining room is working for them.", message: "Hello David, it has been a little while since the chairs left the workshop. I would love to hear how they are working in the finished dining room, and I have a small new collection you may enjoy seeing.", followUpDate: "26 Sep", completed: false },
  ],
  content: [
    { id: "content-1", idea: "Finished project", type: "Instagram post", text: "A dining table should earn its place in a home for years. This finished walnut piece was made around one family's Sunday rituals — quiet grain, softened edges and room for everyone.", status: "Approved" },
    { id: "content-2", idea: "Behind the scenes", type: "Instagram carousel", text: "Before the finish goes on, I slow down. Each surface is checked by hand so the warmth of the walnut remains part of the piece, not hidden beneath it.", status: "Ready for approval" },
  ],
  campaigns: [
    { id: "camp-1", name: "Autumn Walnut Table", goal: "Generate two commission enquiries", audience: "Homeowners planning dining spaces", product: "Walnut dining table", start: "12 Sep", end: "30 Sep", status: "Active" },
  ],
  metrics: { enquiries: 4, newCustomers: 2, repeatCustomers: 1, sales: 3, visits: 186 },
};

export function calculateScore(check: BusinessCheck): GrowthScore {
  const followUp = check.followsUp === "Regularly" ? 76 : check.followsUp === "Sometimes" ? 56 : 34;
  const repeat = check.collectsDetails === "Yes" && check.followsUp !== "Not regularly" ? 70 : check.collectsDetails === "Sometimes" ? 48 : 36;
  const visibility = check.socialChannels.trim().length > 4 ? 69 : 48;
  const content = check.discovery.toLowerCase().includes("social") || check.socialChannels.trim().length > 4 ? 66 : 44;
  const enquiries = check.website.trim().length > 3 ? 56 : 42;
  const seasonal = check.goal90.trim().length > 8 ? 61 : 46;
  const presentation = check.products.trim().length > 10 && check.idealCustomer.trim().length > 8 ? 70 : 53;
  const values = [visibility, presentation, content, enquiries, followUp, repeat, seasonal];
  const overall = Math.round(values.reduce((total, value) => total + value, 0) / values.length);
  return { overall, visibility, presentation, content, enquiries, followUp, repeat, seasonal };
}

export function localWorkspace(): Workspace {
  try {
    const stored = window.localStorage.getItem("hcm-maker-growth-workspace");
    return stored ? { ...defaultWorkspace, ...JSON.parse(stored) } : structuredClone(defaultWorkspace);
  } catch {
    return structuredClone(defaultWorkspace);
  }
}
