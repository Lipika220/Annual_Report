import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const courses = [
  { code: "CS101", title: "Data Structures", credits: 4, dept: "CSE", status: "Active" },
  { code: "CS201", title: "Machine Learning", credits: 3, dept: "CSE", status: "Active" },
  { code: "EC101", title: "Digital Electronics", credits: 4, dept: "ECE", status: "Active" },
  { code: "ME101", title: "Thermodynamics", credits: 3, dept: "ME", status: "Inactive" },
  { code: "MB101", title: "Financial Management", credits: 3, dept: "MBA", status: "Active" },
  { code: "PH101", title: "Quantum Mechanics", credits: 4, dept: "Physics", status: "Active" },
];

const facultyWorkload = [
  { name: "Dr. Priya Sharma", dept: "CSE", courses: 3, hours: 12, advisees: 8 },
  { name: "Prof. Rajesh Kumar", dept: "ECE", courses: 2, hours: 9, advisees: 12 },
  { name: "Dr. Meera Patel", dept: "MBA", courses: 4, hours: 15, advisees: 6 },
  { name: "Dr. Arjun Reddy", dept: "Physics", courses: 2, hours: 8, advisees: 4 },
];

const AcademicPage = () => {
  const [deptFilter, setDeptFilter] = useState("all");

  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-[1400px]">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Academic Data</h1>
        <p className="text-muted-foreground text-sm mt-1">Course catalog, faculty workload, and semester performance</p>
      </div>

      <Tabs defaultValue="courses">
        <TabsList>
          <TabsTrigger value="courses">Course Catalog</TabsTrigger>
          <TabsTrigger value="workload">Faculty Workload</TabsTrigger>
          <TabsTrigger value="performance">Semester Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="mt-4 space-y-4">
          <div className="flex gap-3">
            <Select value={deptFilter} onValueChange={setDeptFilter}>
              <SelectTrigger className="w-[160px]"><SelectValue placeholder="Department" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="CSE">CSE</SelectItem>
                <SelectItem value="ECE">ECE</SelectItem>
                <SelectItem value="ME">ME</SelectItem>
                <SelectItem value="MBA">MBA</SelectItem>
                <SelectItem value="Physics">Physics</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Code</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Credits</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses.filter(c => deptFilter === "all" || c.dept === deptFilter).map((c) => (
                    <TableRow key={c.code}>
                      <TableCell className="font-mono font-medium">{c.code}</TableCell>
                      <TableCell>{c.title}</TableCell>
                      <TableCell>{c.credits}</TableCell>
                      <TableCell><Badge variant="secondary">{c.dept}</Badge></TableCell>
                      <TableCell>
                        <Badge variant={c.status === "Active" ? "default" : "secondary"}>{c.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="workload" className="mt-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Faculty</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Courses</TableHead>
                    <TableHead>Weekly Hours</TableHead>
                    <TableHead>Advisees</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {facultyWorkload.map((f) => (
                    <TableRow key={f.name}>
                      <TableCell className="font-medium">{f.name}</TableCell>
                      <TableCell><Badge variant="secondary">{f.dept}</Badge></TableCell>
                      <TableCell>{f.courses}</TableCell>
                      <TableCell>{f.hours} hrs</TableCell>
                      <TableCell>{f.advisees}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="mt-4">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Average GPA", value: "8.2", sub: "Fall 2025" },
              { label: "Pass Rate", value: "94%", sub: "All Programs" },
              { label: "Distinction Rate", value: "22%", sub: "+3% vs last sem" },
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AcademicPage;
