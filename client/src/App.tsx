/**
 * HCM Maker Growth — Workshop Ledger design reminder
 * Routes separate the public assessment journey from the maker's working dashboard while
 * preserving a simple portable client-side application structure for Vercel deployment.
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Assessment from "@/pages/Assessment";
import BusinessCheck from "@/pages/BusinessCheck";
import Dashboard from "@/pages/Dashboard";
import GrowthStart from "@/pages/GrowthStart";
import Home from "@/pages/Home";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function Router() {
  return <Switch><Route path="/" component={Home} /><Route path="/business-check" component={BusinessCheck} /><Route path="/assessment" component={Assessment} /><Route path="/growth-start" component={GrowthStart} /><Route path="/app" component={Dashboard} /><Route path="/login" component={Dashboard} /><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch>;
}

function App() { return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>; }

export default App;
