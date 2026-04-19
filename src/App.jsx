const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/lib/auth";
import Index from "./pages/Index.jsx";
import WorkshopsPage from "./pages/WorkshopsPage.jsx";
import SessionDetailsPage from "./pages/SessionDetailsPage.jsx";
import RepresentativesPage from "./pages/RepresentativesPage.jsx";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import ResourceDetailsPage from "./pages/ResourceDetailsPage.jsx";
import PartnersPage from "./pages/PartnersPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import NotFound from "./pages/NotFound.jsx";

const queryClient = new QueryClient();

const App = () => (
  _jsxDEV(QueryClientProvider, { client: queryClient, children: 
    _jsxDEV(TooltipProvider, { children: [
      _jsxDEV(Toaster, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 25}, this )
      , _jsxDEV(Sonner, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 26}, this )
      , _jsxDEV(BrowserRouter, { children: 
        _jsxDEV(AuthProvider, { children: [
          _jsxDEV(Navbar, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 29}, this )
          , _jsxDEV(Routes, { children: [
            _jsxDEV(Route, { path: "/", element: _jsxDEV(Index, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 31}, this ),}, void 0, false, {fileName: _jsxFileName, lineNumber: 31}, this )
            , _jsxDEV(Route, { path: "/workshops", element: _jsxDEV(WorkshopsPage, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 32}, this ),}, void 0, false, {fileName: _jsxFileName, lineNumber: 32}, this )
            , _jsxDEV(Route, { path: "/sessions/:id", element: _jsxDEV(SessionDetailsPage, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 33}, this ),}, void 0, false, {fileName: _jsxFileName, lineNumber: 33}, this )
            , _jsxDEV(Route, { path: "/representatives", element: _jsxDEV(RepresentativesPage, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 34}, this ),}, void 0, false, {fileName: _jsxFileName, lineNumber: 34}, this )
            , _jsxDEV(Route, { path: "/resources", element: _jsxDEV(ResourcesPage, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this ),}, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this )
            , _jsxDEV(Route, { path: "/resources/:id", element: _jsxDEV(ResourceDetailsPage, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 36}, this ),}, void 0, false, {fileName: _jsxFileName, lineNumber: 36}, this )
            , _jsxDEV(Route, { path: "/partners", element: _jsxDEV(PartnersPage, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this ),}, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this )
            , _jsxDEV(Route, { path: "/login", element: _jsxDEV(LoginPage, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this ),}, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this )
            , _jsxDEV(Route, { path: "/signup", element: _jsxDEV(SignupPage, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 39}, this ),}, void 0, false, {fileName: _jsxFileName, lineNumber: 39}, this )
            , _jsxDEV(Route, { path: "/dashboard", element: _jsxDEV(DashboardPage, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this ),}, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this )
            , _jsxDEV(Route, { path: "*", element: _jsxDEV(NotFound, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 41}, this ),}, void 0, false, {fileName: _jsxFileName, lineNumber: 41}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 30}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 28}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 27}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 24}, this)
  }, void 0, false, {fileName: _jsxFileName, lineNumber: 23}, this)
);

export default App;
