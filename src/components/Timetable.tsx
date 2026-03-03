import { Calendar } from "lucide-react";

interface TimetableEntry {
  time: string;
  subject: string;
  teacher?: string;
  room: string;
  isNow?: boolean;
}

const sampleTimetable: TimetableEntry[] = [
  { time: "08:00 - 08:45", subject: "Mathematics", teacher: "Mr. Johnson", room: "Room 201", isNow: false },
  { time: "09:00 - 09:45", subject: "Physics", teacher: "Dr. Smith", room: "Lab 3", isNow: true },
  { time: "10:00 - 10:45", subject: "English Literature", teacher: "Ms. Davis", room: "Room 105" },
  { time: "11:00 - 11:45", subject: "Computer Science", teacher: "Mr. Lee", room: "Lab 1" },
  { time: "12:00 - 12:45", subject: "Lunch Break", room: "Cafeteria" },
  { time: "13:00 - 13:45", subject: "History", teacher: "Mrs. Wilson", room: "Room 302" },
  { time: "14:00 - 14:45", subject: "Art", teacher: "Ms. Chen", room: "Studio 2" },
];

const Timetable = () => {
  return (
    <div className="rounded-xl border border-border bg-card shadow-card">
      <div className="flex items-center gap-2 border-b border-border px-5 py-4">
        <Calendar size={20} className="text-primary" />
        <h3 className="font-display font-semibold text-card-foreground">Today's Schedule</h3>
        <span className="ml-auto rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          Monday
        </span>
      </div>
      <div className="divide-y divide-border">
        {sampleTimetable.map((entry, i) => (
          <div
            key={i}
            className={`flex items-center gap-4 px-5 py-3 transition-colors ${
              entry.isNow ? "bg-primary/5" : "hover:bg-muted/50"
            }`}
          >
            <div className="w-28 shrink-0">
              <p className="text-xs font-medium text-muted-foreground">{entry.time}</p>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-card-foreground">{entry.subject}</p>
              {entry.teacher && <p className="text-xs text-muted-foreground">{entry.teacher}</p>}
            </div>
            <span className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">{entry.room}</span>
            {entry.isNow && (
              <span className="flex items-center gap-1 rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-medium text-success">
                <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                Now
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timetable;
