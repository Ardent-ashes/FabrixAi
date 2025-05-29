import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Simple Navigation */}
      {/* <nav className="border-b bg-white px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            My App
          </Link>
          <div className="flex gap-4">
            <Link 
              to="/" 
              className="px-3 py-2 rounded hover:bg-gray-100 transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="px-3 py-2 rounded hover:bg-gray-100 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </nav> */}
      
      {/* Page Content */}
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;