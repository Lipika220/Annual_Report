import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import Dashboard from "@/pages/Dashboard";
import UsersPage from "@/pages/UsersPage";
import DepartmentsPage from "@/pages/DepartmentsPage";
import AcademicPage from "@/pages/AcademicPage";
import ResearchPage from "@/pages/ResearchPage";
import FinancialPage from "@/pages/FinancialPage";
import InfrastructurePage from "@/pages/InfrastructurePage";
import StudentsPage from "@/pages/StudentsPage";
import FacultyPage from "@/pages/FacultyPage";
import ExtracurricularPage from "@/pages/ExtracurricularPage";
import ReportsPage from "@/pages/ReportsPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout><Dashboard /></AppLayout>} />
          <Route path="/users" element={<AppLayout><UsersPage /></AppLayout>} />
          <Route path="/departments" element={<AppLayout><DepartmentsPage /></AppLayout>} />
          <Route path="/academic" element={<AppLayout><AcademicPage /></AppLayout>} />
          <Route path="/research" element={<AppLayout><ResearchPage /></AppLayout>} />
          <Route path="/financial" element={<AppLayout><FinancialPage /></AppLayout>} />
          <Route path="/infrastructure" element={<AppLayout><InfrastructurePage /></AppLayout>} />
          <Route path="/students" element={<AppLayout><StudentsPage /></AppLayout>} />
          <Route path="/faculty" element={<AppLayout><FacultyPage /></AppLayout>} />
          <Route path="/extracurricular" element={<AppLayout><ExtracurricularPage /></AppLayout>} />
          <Route path="/reports" element={<AppLayout><ReportsPage /></AppLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
