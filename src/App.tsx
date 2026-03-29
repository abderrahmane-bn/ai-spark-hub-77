import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Index from "./pages/Index.tsx";
import WorkshopsPage from "./pages/WorkshopsPage.tsx";
import RepresentativesPage from "./pages/RepresentativesPage.tsx";
import ResourcesPage from "./pages/ResourcesPage.tsx";
import PartnersPage from "./pages/PartnersPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/workshops" element={<WorkshopsPage />} />
          <Route path="/representatives" element={<RepresentativesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
