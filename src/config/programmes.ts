export type Programme = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
  icon: "group" | "shop" | "leaf" | "home" | "book" | "shield";
};

// Ticket sizes, tenures and pricing are deliberately left out: they are
// disclosed in writing to each borrower before sanction.
export const programmes: Programme[] = [
  {
    slug: "shg",
    title: "Self-Help Group Loans",
    summary:
      "Credit for women's self-help groups, so members can borrow together, repay together and build a shared credit record.",
    points: [
      "Group lending with collective responsibility",
      "Repayment aligned to the group's meeting cycle",
      "Regular group meetings and bookkeeping support",
    ],
    icon: "group",
  },
  {
    slug: "jlg",
    title: "Joint Liability Group Loans",
    summary:
      "Collateral-free loans for small groups of 4–10 people who stand by each other's repayments.",
    points: [
      "No collateral or guarantor required",
      "Small, step-up loan cycles as trust builds",
      "Doorstep disbursement and collection",
    ],
    icon: "shield",
  },
  {
    slug: "enterprise",
    title: "Micro-Enterprise Loans",
    summary:
      "Working capital for kirana stores, tailoring units, street vendors, dairy and other small businesses run from the household.",
    points: [
      "Stock, tools and equipment purchase",
      "Repayment schedule matched to business cash flow",
      "Basic business planning guidance",
    ],
    icon: "shop",
  },
  {
    slug: "livelihood",
    title: "Agri & Livelihood Loans",
    summary:
      "Support for farming inputs, livestock, poultry and allied activities that keep rural households earning.",
    points: [
      "Seeds, fertiliser and small farm equipment",
      "Livestock and poultry purchase",
      "Seasonal repayment options",
    ],
    icon: "leaf",
  },
  {
    slug: "household",
    title: "Household Needs Loans",
    summary:
      "Small loans for essentials such as sanitation, safe drinking water, solar lighting and home repairs.",
    points: [
      "Toilet construction and water connections",
      "Clean energy and solar lamps",
      "Minor home improvement",
    ],
    icon: "home",
  },
  {
    slug: "literacy",
    title: "Financial Literacy",
    summary:
      "Free training sessions on saving, budgeting, responsible borrowing, digital payments and government schemes.",
    points: [
      "Village-level awareness camps",
      "Help opening bank accounts and linking Aadhaar",
      "Guidance on insurance and pension schemes",
    ],
    icon: "book",
  },
];
