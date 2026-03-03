import { motion } from "framer-motion";
import { Users, Building2, BookOpen, DollarSign, Trophy, FileText, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const stats = [
  { label: "Total Users", value: "1,248", change: "+12%", up: true, icon: Users },
  { label: "Departments", value: "14", change: "+2", up: true, icon: Building2 },
  { label: "Publications", value: "342", change: "+28%", up: true, icon: BookOpen },
  { label: "Budget Utilized", value: "78%", change: "-3%", up: false, icon: DollarSign },
  { label: "Student Awards", value: "89", change: "+15%", up: true, icon: Trophy },
  { label: "Reports Generated", value: "23", change: "+5", up: true, icon: FileText },
];

const deptBudget = [
  { name: "B.TECH", budget: 45, spent: 38 },
  { name: "MCA", budget: 38, spent: 32 },
  { name: "BCA", budget: 42, spent: 35 },
  { name: "DIPLOMA", budget: 30, spent: 28 },
  { name: "MBA", budget: 25, spent: 20 },
  { name: "M.TECH", budget: 18, spent: 15 },
];

const researchByDept = [
  { name: "B.TECH", value: 120 },
  { name: "MCA", value: 85 },
  { name: "BCA", value: 65 },
  { name: "DIPLOMA", value: 45 },
  { name: "MBA", value: 27 },
];

const COLORS = [
  "hsl(215, 50%, 23%)",
  "hsl(38, 90%, 55%)",
  "hsl(152, 60%, 40%)",
  "hsl(210, 80%, 55%)",
  "hsl(0, 72%, 51%)",
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const Dashboard = () => {
  return (
    <div className="p-6 lg:p-8 space-y-8 max-w-[1400px]">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">Annual Report Portal Overview</p>
      </div>

      {/* Stats Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={item}>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className={`text-xs font-medium flex items-center gap-0.5 ${stat.up ? "text-success" : "text-destructive"}`}>
                    {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base font-sans font-semibold">Budget vs Expenditure by Department (₹ Lakhs)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={deptBudget} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 90%)" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="budget" fill="hsl(215, 50%, 23%)" radius={[4, 4, 0, 0]} name="Budget" />
                <Bar dataKey="spent" fill="hsl(38, 90%, 55%)" radius={[4, 4, 0, 0]} name="Spent" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-sans font-semibold">Research Output</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={researchByDept}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={90}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {researchByDept.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-sans font-semibold">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { text: "New publication added by Dr. Sharma — 'ML in Healthcare'", time: "2 hours ago", icon: BookOpen },
              { text: "Budget report generated for FY 2025-26", time: "5 hours ago", icon: FileText },
              { text: "3 new faculty members onboarded", time: "1 day ago", icon: Users },
              { text: "CSE Department achieved 95% placement rate", time: "2 days ago", icon: TrendingUp },
            ].map((activity, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <activity.icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">{activity.text}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
