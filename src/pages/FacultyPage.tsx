import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Award, BookOpen, Lightbulb } from "lucide-react";

const achievements = [
  { faculty: "Dr. Priya Sharma", dept: "CSE", type: "Publication", detail: "5 SCI papers in 2025", linked: true },
  { faculty: "Prof. Rajesh Kumar", dept: "ECE", type: "Award", detail: "Best Researcher Award — ISTE", linked: false },
  { faculty: "Dr. Arjun Reddy", dept: "Physics", type: "Patent", detail: "Quantum Sensor Device (Filed)", linked: false },
  { faculty: "Dr. Anita Desai", dept: "CE", type: "Publication", detail: "3 Scopus papers", linked: true },
  { faculty: "Dr. Meera Patel", dept: "MBA", type: "Award", detail: "Outstanding Faculty — AICTE", linked: false },
  { faculty: "Prof. Suresh Iyer", dept: "ME", type: "Patent", detail: "Thermal Exchanger Design (Granted)", linked: false },
];

const iconMap: Record<string, typeof Award> = { Publication: BookOpen, Award: Award, Patent: Lightbulb };

const FacultyPage = () => (
  <div className="p-6 lg:p-8 space-y-6 max-w-[1400px]">
    <div>
      <h1 className="text-2xl font-display font-bold text-foreground">Faculty Achievement</h1>
      <p className="text-muted-foreground text-sm mt-1">Publications, awards, and patents</p>
    </div>

    <div className="grid md:grid-cols-3 gap-4">
      {[
        { label: "Publications", value: "342", icon: BookOpen },
        { label: "Awards", value: "28", icon: Award },
        { label: "Patents", value: "15", icon: Lightbulb },
      ].map((s) => (
        <Card key={s.label}>
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    <Card>
      <CardHeader><CardTitle className="text-base font-sans font-semibold">Recent Achievements</CardTitle></CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Faculty</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Detail</TableHead>
              <TableHead>Research Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {achievements.map((a, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{a.faculty}</TableCell>
                <TableCell><Badge variant="secondary">{a.dept}</Badge></TableCell>
                <TableCell>
                  <Badge variant="default" className="gap-1">
                    {(() => { const Icon = iconMap[a.type]; return <Icon className="w-3 h-3" />; })()}
                    {a.type}
                  </Badge>
                </TableCell>
                <TableCell>{a.detail}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{a.linked ? "Linked" : "—"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default FacultyPage;
