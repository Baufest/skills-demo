export interface Invoice {
  id: string;
  client: string;
  project: string;
  amount: number;
  currency: string;
  status: string;
  issued: string;
  due: string;
  paid: string | null;
  hoursLogged: number;
  rate: number;
  region: string;
}

// This data intentionally uses inconsistent formats to demonstrate
// common data table issues that skills can fix.
export const invoices: Invoice[] = [
  {
    id: "INV-001",
    client: "Acme Corp",
    project: "Platform Redesign",
    amount: 24500,
    currency: "USD",
    status: "paid",
    issued: "2025-01-15",
    due: "02/14/2025",
    paid: "Feb 10, 2025",
    hoursLogged: 163.5,
    rate: 150,
    region: "North America",
  },
  {
    id: "INV-002",
    client: "Globex Industries",
    project: "API Integration",
    amount: 8750.5,
    currency: "USD",
    status: "overdue",
    issued: "2025-02-01",
    due: "03/03/2025",
    paid: null,
    hoursLogged: 58.33,
    rate: 150,
    region: "North America",
  },
  {
    id: "INV-003",
    client: "Initech",
    project: "Security Audit",
    amount: 15000,
    currency: "USD",
    status: "paid",
    issued: "2025-01-20",
    due: "02/19/2025",
    paid: "2025-02-18",
    hoursLogged: 100,
    rate: 150,
    region: "North America",
  },
  {
    id: "INV-004",
    client: "Soylent GmbH",
    project: "Cloud Migration",
    amount: 42100,
    currency: "EUR",
    status: "pending",
    issued: "2025-03-01",
    due: "03/31/2025",
    paid: null,
    hoursLogged: 210.5,
    rate: 200,
    region: "Europe",
  },
  {
    id: "INV-005",
    client: "Wayne Enterprises",
    project: "Mobile App v2",
    amount: 67200,
    currency: "USD",
    status: "paid",
    issued: "2024-12-01",
    due: "12/31/2024",
    paid: "December 28, 2024",
    hoursLogged: 448,
    rate: 150,
    region: "North America",
  },
  {
    id: "INV-006",
    client: "Stark Solutions",
    project: "Data Pipeline",
    amount: 31500.75,
    currency: "USD",
    status: "pending",
    issued: "2025-03-10",
    due: "04/09/2025",
    paid: null,
    hoursLogged: 210.05,
    rate: 150,
    region: "North America",
  },
  {
    id: "INV-007",
    client: "Umbrella Corp",
    project: "Compliance Dashboard",
    amount: 19800,
    currency: "GBP",
    status: "overdue",
    issued: "2025-01-05",
    due: "02/04/2025",
    paid: null,
    hoursLogged: 110,
    rate: 180,
    region: "Europe",
  },
  {
    id: "INV-008",
    client: "Cyberdyne Systems",
    project: "ML Model Training",
    amount: 55000,
    currency: "USD",
    status: "draft",
    issued: "2025-03-15",
    due: "",
    paid: null,
    hoursLogged: 0,
    rate: 200,
    region: "North America",
  },
];
