import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, BookOpen, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const departments = [
  { name: "Computer Science & Engineering", head: "Dr. Prakash kumar Pathak", email: "prakashkumarpathak@gec.edu", faculty: 42, publications: 120, budgetUtil: 85 },
  { name: "Electronics & Communication", head: "Prof. Ambika Prasad Hota", email: "ambika.hota@institute.edu", faculty: 35, publications: 85, budgetUtil: 78 },
  { name: "Mechanical Engineering", head: "Dr. Binayak Mishra", email: "binayak.mishra@institute.edu", faculty: 38, publications: 65, budgetUtil: 72 },
  { name: "Civil Engineering", head: "Dr. Anita Desai", email: "anita.desai@institute.edu", faculty: 28, publications: 45, budgetUtil: 90 },
  { name: "MCA", head: "Prof. Durga Shankar Baggam", email: "durga.baggam@institute.edu", faculty: 22, publications: 27, budgetUtil: 68 },
  { name: "MBA", head: "Dr. Arjun Reddy", email: "arjun.reddy@institute.edu", faculty: 18, publications: 52, budgetUtil: 82 },
];

const DepartmentsPage = () => (
  <div className="p-6 lg:p-8 space-y-6 max-w-[1400px]">
    <div>
      <h1 className="text-2xl font-display font-bold text-foreground">Departments</h1>
      <p className="text-muted-foreground text-sm mt-1">{departments.length} departments</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {departments.map((dept) => (
        <Card key={dept.name} className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <Badge variant="secondary">{dept.faculty} Faculty</Badge>
            </div>
            <CardTitle className="text-base font-sans font-semibold mt-3">{dept.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm font-medium">{dept.head}</p>
              <p className="text-xs text-muted-foreground">{dept.email}</p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1 text-muted-foreground"><BookOpen className="w-3.5 h-3.5" /> {dept.publications} pubs</span>
              <span className="flex items-center gap-1 text-muted-foreground"><TrendingUp className="w-3.5 h-3.5" /> {dept.budgetUtil}% budget</span>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">Budget Utilization</span>
                <span className="font-medium">{dept.budgetUtil}%</span>
              </div>
              <Progress value={dept.budgetUtil} className="h-1.5" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default DepartmentsPage;
