import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { FileText, Download, Eye, Loader2 } from "lucide-react";

const ReportsPage = () => {
  const [year, setYear] = useState("");
  const [dept, setDept] = useState("");
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    if (!year) return;
    setGenerating(true);
    setGenerated(false);
    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
    }, 2500);
  };

  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-[1400px]">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Reports</h1>
        <p className="text-muted-foreground text-sm mt-1">Generate and download annual reports</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base font-sans font-semibold">Report Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label>Academic Year</Label>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger className="mt-1"><SelectValue placeholder="Select year" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="2025-26">2025-26</SelectItem>
                  <SelectItem value="2024-25">2024-25</SelectItem>
                  <SelectItem value="2023-24">2023-24</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Department (optional)</Label>
              <Select value={dept} onValueChange={setDept}>
                <SelectTrigger className="mt-1"><SelectValue placeholder="All Departments" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="CSE">CSE</SelectItem>
                  <SelectItem value="ECE">ECE</SelectItem>
                  <SelectItem value="ME">ME</SelectItem>
                  <SelectItem value="CE">CE</SelectItem>
                  <SelectItem value="MBA">MBA</SelectItem>
                  <SelectItem value="Physics">Physics</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button onClick={handleGenerate} disabled={!year || generating}>
            {generating ? <><Loader2 className="w-4 h-4 mr-1.5 animate-spin" /> Generating...</> : <><FileText className="w-4 h-4 mr-1.5" /> Generate Report</>}
          </Button>

          {generating && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Generating report...</span>
                <span className="font-medium">Processing</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
          )}
        </CardContent>
      </Card>

      {generated && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-sans font-semibold">Generated Report</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Annual Report {year}{dept && dept !== "all" ? ` — ${dept}` : ""}</p>
                  <p className="text-xs text-muted-foreground">Generated just now • 24 pages</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm"><Eye className="w-4 h-4 mr-1.5" /> Preview</Button>
                <Button size="sm"><Download className="w-4 h-4 mr-1.5" /> Download PDF</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-base font-sans font-semibold">Previous Reports</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { name: "Annual Report 2024-25", date: "Jan 15, 2025", pages: 32 },
            { name: "Annual Report 2023-24", date: "Jan 20, 2024", pages: 28 },
            { name: "Annual Report 2023-24 — CSE", date: "Feb 5, 2024", pages: 12 },
          ].map((r) => (
            <div key={r.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.date} • {r.pages} pages</p>
                </div>
              </div>
              <Button variant="ghost" size="sm"><Download className="w-4 h-4" /></Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportsPage;
