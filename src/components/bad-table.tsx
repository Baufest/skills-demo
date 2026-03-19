import { invoices } from "@/data/sample-table";

export function BadTable() {
  return (
    <div className="overflow-x-auto border border-border rounded-xl">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-3 font-medium">Client</th>
            <th className="px-4 py-3 font-medium">Project</th>
            <th className="px-4 py-3 font-medium">Status</th>
            <th className="px-4 py-3 font-medium">Amount</th>
            <th className="px-4 py-3 font-medium">Currency</th>
            <th className="px-4 py-3 font-medium">Issued</th>
            <th className="px-4 py-3 font-medium">Due</th>
            <th className="px-4 py-3 font-medium">Paid</th>
            <th className="px-4 py-3 font-medium">Hours</th>
            <th className="px-4 py-3 font-medium">Rate</th>
            <th className="px-4 py-3 font-medium">Region</th>
            <th className="px-4 py-3 font-medium">ID</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {invoices.map((inv) => (
            <tr key={inv.id} className="hover:bg-gray-50">
              <td className="px-4 py-3">{inv.client}</td>
              <td className="px-4 py-3">{inv.project}</td>
              <td className="px-4 py-3">{inv.status}</td>
              <td className="px-4 py-3">{inv.amount}</td>
              <td className="px-4 py-3">{inv.currency}</td>
              <td className="px-4 py-3">{inv.issued}</td>
              <td className="px-4 py-3">{inv.due}</td>
              <td className="px-4 py-3">{inv.paid || "N/A"}</td>
              <td className="px-4 py-3">{inv.hoursLogged}</td>
              <td className="px-4 py-3">{inv.rate}</td>
              <td className="px-4 py-3">{inv.region}</td>
              <td className="px-4 py-3">{inv.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
