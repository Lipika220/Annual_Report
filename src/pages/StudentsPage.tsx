import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Download, Trophy, Medal, TrendingUp } from "lucide-react";
import { useState } from "react";

const awards = [
  { student: "Aarav Patel", program: "B.Tech CSE", achievement: "ACM ICPC Regional Finalist", year: 2025, type: "Award" },
  { student: "Sneha Gupta", program: "M.Tech ECE", achievement: "IEEE Best Paper Award", year: 2025, type: "Award" },
  { student: "Rohan Mehta", program: "MBA", achievement: "National Business Plan Winner", year: 2025, type: "Award" },
  { student: "Priya Nair", program: "B.Tech CSE", achievement: "GATE AIR 45", year: 2024, type: "Ranking" },
];

const placements = [
  { program: "B.Tech CSE", eligible: 300, placed: 280, highest: "₹11L", average: "₹6L", year: 2025 },
  { program: "B.Tech ECE", eligible: 90, placed: 78, highest: "₹9L", average: "₹5L", year: 2025 },
    { program: "MCA", eligible: 60, placed: 55, highest: "₹10L", average: "₹4L", year: 2025 },

  { program: "M.Tech", eligible: 45, placed: 40, highest: "₹14L", average: "₹7L", year: 2025 },

];

const StudentsPage = () => {
  const [yearFilter, setYearFilter] = useState("all");

  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-[1400px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Student Achievement</h1>
          <p className="text-muted-foreground text-sm mt-1">Awards, rankings, and placement statistics</p>
        </div>
        <div className="flex gap-2">
          <Select value={yearFilter} onValueChange={setYearFilter}>
            <SelectTrigger className="w-[120px]"><SelectValue placeholder="Year" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm"><Download className="w-4 h-4 mr-1.5" /> Export CSV</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold">89</p>
              <p className="text-sm text-muted-foreground">Total Awards</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Medal className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm text-muted-foreground">National Rankings</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-success/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-success" />
            </div>
            <div>
              <p className="text-2xl font-bold">91%</p>
              <p className="text-sm text-muted-foreground">Overall Placement Rate</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle className="text-base font-sans font-semibold">Awards & Rankings</CardTitle></CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Program</TableHead>
                <TableHead>Achievement</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {awards.filter(a => yearFilter === "all" || a.year.toString() === yearFilter).map((a, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{a.student}</TableCell>
                  <TableCell>{a.program}</TableCell>
                  <TableCell>{a.achievement}</TableCell>
                  <TableCell>{a.year}</TableCell>
                  <TableCell><Badge variant="secondary">{a.type}</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="text-base font-sans font-semibold">Placement Statistics</CardTitle></CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Program</TableHead>
                <TableHead>Eligible</TableHead>
                <TableHead>Placed</TableHead>
                <TableHead>Placement %</TableHead>
                <TableHead>Highest Package</TableHead>
                <TableHead>Average Package</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {placements.filter(p => yearFilter === "all" || p.year.toString() === yearFilter).map((p) => (
                <TableRow key={p.program}>
                  <TableCell className="font-medium">{p.program}</TableCell>
                  <TableCell>{p.eligible}</TableCell>
                  <TableCell>{p.placed}</TableCell>
                  <TableCell className="font-semibold text-success">{((p.placed / p.eligible) * 100).toFixed(1)}%</TableCell>
                  <TableCell>{p.highest}</TableCell>
                  <TableCell>{p.average}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentsPage;
