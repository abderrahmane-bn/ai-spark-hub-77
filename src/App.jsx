import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/lib/auth";
import Index from "./pages/Index";
import WorkshopsPage from "./pages/WorkshopsPage";
import SessionDetailsPage from "./pages/SessionDetailsPage";
import RepresentativesPage from "./pages/RepresentativesPage";
import ResourcesPage from "./pages/ResourcesPage";
import ResourceDetailsPage from "./pages/ResourceDetailsPage";
import PartnersPage from "./pages/PartnersPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import CreateWorkshopPage from "./pages/CreateWorkshopPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppLayout = () =>
<>
    <Navbar />
    <Outlet />
  </>;


const App = () =>
<QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              {/* Landing page — has its own Navbar_chbab, no shared Navbar */}
              <Route path="/" element={<Index />} />

              {/* Auth pages - no navbar */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />

              {/* All app routes share Navbar */}
              <Route element={<AppLayout />}>
                <Route path="/workshops" element={<WorkshopsPage />} />
                <Route path="/workshops/new" element={<CreateWorkshopPage />} />
                <Route path="/sessions/:id" element={<SessionDetailsPage />} />
                <Route path="/representatives" element={<RepresentativesPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/resources/:id" element={<ResourceDetailsPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>;


export default App;