import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, ImageIcon } from "lucide-react";

const events = [
  { name: "TechFest 2025", date: "2025-11-15", dept: "All", participants: 1200, type: "Festival" },
  { name: "Hackathon", date: "2025-09-22", dept: "CSE", participants: 350, type: "Competition" },
  { name: "Annual Sports Meet", date: "2025-12-05", dept: "All", participants: 800, type: "Sports" },
  { name: "Entrepreneurship Summit", date: "2025-10-10", dept: "MBA", participants: 200, type: "Seminar" },
  { name: "Robotics Workshop", date: "2025-08-18", dept: "ME/ECE", participants: 120, type: "Workshop" },
  { name: "Cultural Night", date: "2025-12-20", dept: "All", participants: 1500, type: "Cultural" },
];

const ExtracurricularPage = () => (
  <div className="p-6 lg:p-8 space-y-6 max-w-[1400px]">
    <div>
      <h1 className="text-2xl font-display font-bold text-foreground">Extracurricular Activities</h1>
      <p className="text-muted-foreground text-sm mt-1">Events, participation, and highlights</p>
    </div>

    <div className="grid md:grid-cols-3 gap-4">
      <Card>
        <CardContent className="p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
            <Calendar className="w-6 h-6 text-accent" />
          </div>
          <div>
            <p className="text-2xl font-bold">{events.length}</p>
            <p className="text-sm text-muted-foreground">Events This Year</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-2xl font-bold">4,170</p>
            <p className="text-sm text-muted-foreground">Total Participants</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-success/20 flex items-center justify-center">
            <ImageIcon className="w-6 h-6 text-success" />
          </div>
          <div>
            <p className="text-2xl font-bold">280</p>
            <p className="text-sm text-muted-foreground">Photos Uploaded</p>
          </div>
        </CardContent>
      </Card>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map((event) => (
        <Card key={event.name} className="hover:shadow-md transition-shadow">
          <CardContent className="p-5">
            <div className="flex items-start justify-between mb-3">
              <Badge variant="secondary">{event.type}</Badge>
              <span className="text-xs text-muted-foreground">{event.date}</span>
            </div>
            <h3 className="font-semibold text-foreground">{event.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{event.dept}</p>
            <div className="flex items-center gap-1 mt-3 text-sm text-muted-foreground">
              <Users className="w-3.5 h-3.5" />
              {event.participants} participants
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default ExtracurricularPage;
