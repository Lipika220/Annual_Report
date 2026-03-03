import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Search, ExternalLink } from "lucide-react";

const publications = [
  { id: "1", title: "Deep Learning Approaches in Medical Imaging", authors: "Dr. Priya Sharma, Dr. Arjun Reddy", journal: "IEEE Trans. Medical Imaging", year: 2025, dept: "CSE", indexing: "SCI", doi: "10.1109/TMI.2025.001" },
  { id: "2", title: "IoT-based Smart Campus Framework", authors: "Prof. Rajesh Kumar, Ms. Kavitha Nair", journal: "Sensors Journal", year: 2025, dept: "ECE", indexing: "Scopus", doi: "10.1016/j.sna.2025.002" },
  { id: "3", title: "Renewable Energy Integration in Urban Planning", authors: "Dr. Anita Desai", journal: "Energy & Buildings", year: 2024, dept: "CE", indexing: "SCI", doi: "10.1016/j.enbuild.2024.003" },
  { id: "4", title: "Quantum Computing for Optimization Problems", authors: "Dr. Arjun Reddy, Dr. Meera Patel", journal: "Nature Computing", year: 2025, dept: "Physics", indexing: "SCI", doi: "10.1038/s41567-025-004" },
  { id: "5", title: "Financial Literacy Among Rural Communities", authors: "Prof. Meera Patel", journal: "Journal of Financial Education", year: 2024, dept: "MBA", indexing: "UGC", doi: "" },
];

const ResearchPage = () => {
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("all");
  const [addOpen, setAddOpen] = useState(false);

  const filtered = publications.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.authors.toLowerCase().includes(search.toLowerCase());
    const matchYear = yearFilter === "all" || p.year.toString() === yearFilter;
    return matchSearch && matchYear;
  });

  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-[1400px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Research</h1>
          <p className="text-muted-foreground text-sm mt-1">{publications.length} publications</p>
        </div>
        <Dialog open={addOpen} onOpenChange={setAddOpen}>
          <DialogTrigger asChild>
            <Button size="sm"><Plus className="w-4 h-4 mr-1.5" /> Add Publication</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Add Publication</DialogTitle>
            </DialogHeader>
            <div className="space-y-3 py-2">
              <div><Label>Title</Label><Input placeholder="Publication title" className="mt-1" /></div>
              <div><Label>Authors</Label><Input placeholder="Author 1, Author 2" className="mt-1" /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><Label>Journal/Conference</Label><Input placeholder="Journal name" className="mt-1" /></div>
                <div><Label>Year</Label><Input placeholder="2025" type="number" className="mt-1" /></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div><Label>DOI/URL</Label><Input placeholder="10.xxxx/..." className="mt-1" /></div>
                <div>
                  <Label>Indexing</Label>
                  <Select><SelectTrigger className="mt-1"><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SCI">SCI</SelectItem>
                      <SelectItem value="Scopus">Scopus</SelectItem>
                      <SelectItem value="UGC">UGC</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div><Label>Abstract</Label><Textarea placeholder="Brief abstract..." className="mt-1" rows={3} /></div>
            </div>
            <DialogFooter>
              <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
              <Button onClick={() => setAddOpen(false)}>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search publications..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
            </div>
            <Select value={yearFilter} onValueChange={setYearFilter}>
              <SelectTrigger className="w-[120px]"><SelectValue placeholder="Year" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Authors</TableHead>
                <TableHead>Journal</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Indexing</TableHead>
                <TableHead>DOI</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium max-w-[250px]">{p.title}</TableCell>
                  <TableCell className="text-muted-foreground text-sm max-w-[180px]">{p.authors}</TableCell>
                  <TableCell className="text-sm">{p.journal}</TableCell>
                  <TableCell>{p.year}</TableCell>
                  <TableCell><Badge variant="secondary">{p.indexing}</Badge></TableCell>
                  <TableCell>
                    {p.doi && (
                      <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener noreferrer" className="text-info hover:underline">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResearchPage;
