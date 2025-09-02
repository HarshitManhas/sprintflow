import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardNavigation from "@/components/dashboard/DashboardNavigation";
import KanbanBoard from "@/components/dashboard/KanbanBoard";
import DashboardStats from "@/components/dashboard/DashboardStats";

const Dashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-surface-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-blue"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-surface-50">
      <DashboardNavigation />
      <main className="p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {user.email?.split("@")[0]}
              </h1>
              <p className="text-muted-foreground mt-1">
                Manage your sprints and track progress
              </p>
            </div>
          </div>

          <DashboardStats />
          <KanbanBoard />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
