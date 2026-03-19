import { invoices } from "@/data/sample-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function BadTable() {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Client</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Currency</TableHead>
            <TableHead>Issued</TableHead>
            <TableHead>Due</TableHead>
            <TableHead>Paid</TableHead>
            <TableHead>Hours</TableHead>
            <TableHead>Rate</TableHead>
            <TableHead>Region</TableHead>
            <TableHead>ID</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((inv) => (
            <TableRow key={inv.id}>
              <TableCell>{inv.client}</TableCell>
              <TableCell>{inv.project}</TableCell>
              <TableCell>{inv.status}</TableCell>
              <TableCell>{inv.amount}</TableCell>
              <TableCell>{inv.currency}</TableCell>
              <TableCell>{inv.issued}</TableCell>
              <TableCell>{inv.due}</TableCell>
              <TableCell>{inv.paid || "N/A"}</TableCell>
              <TableCell>{inv.hoursLogged}</TableCell>
              <TableCell>{inv.rate}</TableCell>
              <TableCell>{inv.region}</TableCell>
              <TableCell>{inv.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
