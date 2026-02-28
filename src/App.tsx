import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CncLaserCutting from "./pages/services/CncLaserCutting";
import CustomMetalFabrication from "./pages/services/CustomMetalFabrication";
import MetalGatesSecurity from "./pages/services/MetalGatesSecurity";
import DoorsWindows from "./pages/services/DoorsWindows";
import RoofingStructures from "./pages/services/RoofingStructures";
import CarShadesCanopies from "./pages/services/CarShadesCanopies";
import WaterTankStands from "./pages/services/WaterTankStands";
import StructuralSteelWorks from "./pages/services/StructuralSteelWorks";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/cnc-laser-cutting" element={<CncLaserCutting />} />
          <Route path="/services/custom-metal-fabrication" element={<CustomMetalFabrication />} />
          <Route path="/services/metal-gates-security" element={<MetalGatesSecurity />} />
          <Route path="/services/doors-windows" element={<DoorsWindows />} />
          <Route path="/services/roofing-structures" element={<RoofingStructures />} />
          <Route path="/services/car-shades-canopies" element={<CarShadesCanopies />} />
          <Route path="/services/water-tank-stands" element={<WaterTankStands />} />
          <Route path="/services/structural-steel-works" element={<StructuralSteelWorks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
