import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, AlertCircle, Users } from "lucide-react";

const DashboardStats = () => {
  const stats = [
    {
      title: "Completed Tasks",
      value: "24",
      change: "+12%",
      icon: CheckCircle,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      title: "In Progress",
      value: "8",
      change: "+3",
      icon: Clock,
      color: "text-brand-blue",
      bgColor: "bg-brand-blue-light",
    },
    {
      title: "Pending Review",
      value: "5",
      change: "-2",
      icon: AlertCircle,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      title: "Team Members",
      value: "12",
      change: "+2",
      icon: Users,
      color: "text-brand-teal",
      bgColor: "bg-brand-teal-light",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.change} from last week
                  </p>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default DashboardStats;
