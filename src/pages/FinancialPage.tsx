import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const budgetData = [
  { dept: "B.TECH", allocated: 45, spent: 38, variance: 7 },
  { dept: "MCA", allocated: 38, spent: 32, variance: 6 },
  { dept: "BCA", allocated: 42, spent: 35, variance: 7 },
  { dept: "DIPLOMA", allocated: 30, spent: 28, variance: 2 },
  { dept: "MBA", allocated: 25, spent: 20, variance: 5 },
  { dept: "M.TECH", allocated: 18, spent: 15, variance: 3 },
];

const expenseBreakdown = [
  { name: "Salaries", value: 45 },
  { name: "Equipment", value: 20 },
  { name: "Infrastructure", value: 15 },
  { name: "Research", value: 12 },
  { name: "Misc", value: 8 },
];

const COLORS = ["hsl(215, 50%, 23%)", "hsl(38, 90%, 55%)", "hsl(152, 60%, 40%)", "hsl(210, 80%, 55%)", "hsl(0, 72%, 51%)"];

const FinancialPage = () => (
  <div className="p-6 lg:p-8 space-y-6 max-w-[1400px]">
    <div>
      <h1 className="text-2xl font-display font-bold text-foreground">Financial</h1>
      <p className="text-muted-foreground text-sm mt-1">Budget allocation and expense tracking</p>
    </div>

    <div className="grid md:grid-cols-3 gap-4">
      {[
        { label: "Total Budget", value: "₹198L", sub: "FY 2025-26" },
        { label: "Total Spent", value: "₹173L", sub: "87.4% utilized" },
        { label: "Variance", value: "₹25L", sub: "Under budget" },
      ].map((s) => (
        <Card key={s.label}>
          <CardContent className="p-5 text-center">
            <p className="text-3xl font-bold text-foreground">{s.value}</p>
            <p className="text-sm font-medium mt-1">{s.label}</p>
            <p className="text-xs text-muted-foreground">{s.sub}</p>
          </CardContent>
        </Card>
      ))}
    </div>

    <div className="grid lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2">
        <CardHeader><CardTitle className="text-base font-sans font-semibold">Budget vs Expenditure (₹ Lakhs)</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={budgetData} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 90%)" />
              <XAxis dataKey="dept" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="allocated" fill="hsl(215, 50%, 23%)" radius={[4, 4, 0, 0]} name="Allocated" />
              <Bar dataKey="spent" fill="hsl(38, 90%, 55%)" radius={[4, 4, 0, 0]} name="Spent" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="text-base font-sans font-semibold">Expense Breakdown</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={expenseBreakdown} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value">
                {expenseBreakdown.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-1 mt-2">
            {expenseBreakdown.map((e, i) => (
              <div key={e.name} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: COLORS[i] }} />
                  {e.name}
                </span>
                <span className="text-muted-foreground">{e.value}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>

    <Card>
      <CardHeader><CardTitle className="text-base font-sans font-semibold">Department Budget Details</CardTitle></CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Department</TableHead>
              <TableHead>Allocated (₹L)</TableHead>
              <TableHead>Spent (₹L)</TableHead>
              <TableHead>Variance (₹L)</TableHead>
              <TableHead>Utilization</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {budgetData.map((d) => (
              <TableRow key={d.dept}>
                <TableCell className="font-medium">{d.dept}</TableCell>
                <TableCell>{d.allocated}</TableCell>
                <TableCell>{d.spent}</TableCell>
                <TableCell className="text-success">{d.variance}</TableCell>
                <TableCell>{((d.spent / d.allocated) * 100).toFixed(1)}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default FinancialPage;
