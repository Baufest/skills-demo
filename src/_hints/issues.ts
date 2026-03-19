export const issues = [
  {
    issue: "Column order",
    detail:
      "ID is buried at the end. Client and project lack a clear hierarchy.",
  },
  {
    issue: "Number alignment",
    detail:
      "Amounts, hours, and rates are left-aligned — making comparison hard.",
  },
  {
    issue: "Inconsistent dates",
    detail:
      'Three different date formats: "2025-01-15", "02/14/2025", "Feb 10, 2025".',
  },
  {
    issue: "Raw currency",
    detail:
      "Amounts show raw numbers (24500) without currency symbols or separators.",
  },
  {
    issue: "No status indicators",
    detail: 'Statuses are plain text — "paid", "overdue" look the same.',
  },
  {
    issue: "N/A for nulls",
    detail:
      'Missing values show "N/A" instead of an em-dash (\u2014) or being handled gracefully.',
  },
  {
    issue: "Redundant columns",
    detail:
      "Currency is a separate column instead of being merged with amount.",
  },
  {
    issue: "Inconsistent precision",
    detail: "Hours show varying decimals: 163.5, 58.33, 100, 210.05.",
  },
];
