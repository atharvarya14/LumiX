import { motion } from "framer-motion";

interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  positive?: boolean;
  icon: React.ReactNode;
  gradient?: string;
}

const StatCard = ({ label, value, change, positive, icon, gradient }: StatCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={`rounded-xl border border-border p-5 shadow-card ${gradient || "bg-card"}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className={`text-sm ${gradient ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{label}</p>
          <p className={`mt-1 text-2xl font-bold font-display ${gradient ? "text-primary-foreground" : "text-card-foreground"}`}>
            {value}
          </p>
          {change && (
            <p className={`mt-1 text-xs font-medium ${positive ? "text-success" : "text-destructive"}`}>
              {positive ? "↑" : "↓"} {change}
            </p>
          )}
        </div>
        <div className={`rounded-lg p-2.5 ${gradient ? "bg-primary-foreground/10" : "bg-primary/10"}`}>{icon}</div>
      </div>
    </motion.div>
  );
};

export default StatCard;
