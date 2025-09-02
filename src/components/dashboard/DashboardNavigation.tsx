import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { LogOut, Settings, Bell, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DashboardNavigation = () => {
  const { user, signOut } = useAuth();

  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-brand-blue">SprintFlow</h1>
            <div className="hidden md:flex items-center space-x-6 ml-8">
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-brand-blue"
              >
                Dashboard
              </Button>
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-brand-blue"
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-brand-blue"
              >
                Team
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={signOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavigation;
