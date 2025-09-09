import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Navigation = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div
              className="text-2xl font-bold text-brand-blue cursor-pointer"
              onClick={() => navigate("/")}
            >
              SprintFlow
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              Features
            </a>
            <a href="#" className="nav-link">
              Pricing
            </a>
            <a href="#" className="nav-link">
              About
            </a>
            <a href="#" className="nav-link">
              Contact
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                {/* <span className="text-sm text-muted-foreground">
                  Welcome, {user.email}
                </span> */}
                <Button
                  variant="outline"
                  className="btn-outline"
                  onClick={signOut}
                >
                  Sign Out
                </Button>
                <Button asChild className="btn-outline">
                  <Link to={"/dashboard"}>Dashboard</Link>
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="btn-outline"
                  onClick={() => navigate("/auth")}
                >
                  Sign In
                </Button>
                <Button className="btn-hero" onClick={() => navigate("/auth")}>
                  Get Started
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
