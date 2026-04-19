const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { Navigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import StudentDashboard from "@/components/dashboards/StudentDashboard";
import RepresentativeDashboard from "@/components/dashboards/RepresentativeDashboard";
import AdminDashboard from "@/components/dashboards/AdminDashboard";

const DashboardPage = () => {
  const { user } = useAuth();
  if (!user) return _jsxDEV(Navigate, { to: "/login", replace: true,}, void 0, false, {fileName: _jsxFileName, lineNumber: 9}, this );

  return (
    _jsxDEV('div', { className: "container py-8 md:py-12"  , children: [
      user.role === "admin" && _jsxDEV(AdminDashboard, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 13}, this )
      , user.role === "representative" && _jsxDEV(RepresentativeDashboard, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 14}, this )
      , user.role === "student" && _jsxDEV(StudentDashboard, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 15}, this )
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 12}, this)
  );
};

export default DashboardPage;
