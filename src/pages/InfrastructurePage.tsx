import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const labs = [
  { name: "AI & Machine Learning Lab", dept: "CSE", capacity: 60, equipment: 32 },
  { name: "VLSI Design Lab", dept: "ECE", capacity: 40, equipment: 24 },
  { name: "Robotics Lab", dept: "ME", capacity: 30, equipment: 18 },
  { name: "Structural Testing Lab", dept: "CE", capacity: 25, equipment: 12 },
];

const equipment = [
  { name: "GPU Server Cluster", lab: "AI Lab", status: "Operational", nextMaint: "2026-04-15" },
  { name: "Spectrum Analyzer", lab: "VLSI Lab", status: "Operational", nextMaint: "2026-03-20" },
  { name: "3D Printer (Industrial)", lab: "Robotics Lab", status: "Under Maintenance", nextMaint: "2026-03-01" },
  { name: "Universal Testing Machine", lab: "Structural Lab", status: "Operational", nextMaint: "2026-05-10" },
  { name: "Oscilloscope Array", lab: "VLSI Lab", status: "Retired", nextMaint: "—" },
];

const statusColor = (s: string) => s === "Operational" ? "default" : s === "Under Maintenance" ? "secondary" : "destructive";

const InfrastructurePage = () => (
  <div className="p-6 lg:p-8 space-y-6 max-w-[1400px]">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Infrastructure</h1>
        <p className="text-muted-foreground text-sm mt-1">Lab facilities and equipment management</p>
      </div>
      <Button size="sm"><Plus className="w-4 h-4 mr-1.5" /> Maintenance Request</Button>
    </div>

    <Tabs defaultValue="labs">
      <TabsList>
        <TabsTrigger value="labs">Lab Facilities</TabsTrigger>
        <TabsTrigger value="equipment">Equipment</TabsTrigger>
      </TabsList>

      <TabsContent value="labs" className="mt-4">
        <div className="grid md:grid-cols-2 gap-4">
          {labs.map((lab) => (
            <Card key={lab.name}>
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground">{lab.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{lab.dept}</p>
                <div className="flex gap-4 mt-3 text-sm">
                  <span>Capacity: <strong>{lab.capacity}</strong></span>
                  <span>Equipment: <strong>{lab.equipment}</strong></span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="equipment" className="mt-4">
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Equipment</TableHead>
                  <TableHead>Lab</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Next Maintenance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {equipment.map((e) => (
                  <TableRow key={e.name}>
                    <TableCell className="font-medium">{e.name}</TableCell>
                    <TableCell className="text-muted-foreground">{e.lab}</TableCell>
                    <TableCell><Badge variant={statusColor(e.status)}>{e.status}</Badge></TableCell>
                    <TableCell className="text-muted-foreground">{e.nextMaint}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
);

export default InfrastructurePage;
