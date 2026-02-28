import { Zap } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import serviceCnc from "@/assets/service-cnc.jpg";

const CncLaserCutting = () => (
  <ServicePageLayout
    title="CNC Laser Cutting"
    subtitle="Precision Cutting"
    icon={Zap}
    image={serviceCnc}
    description="High-precision computer-controlled laser cutting for complex patterns, industrial parts, signage, and decorative panels. We handle mild steel, stainless steel, and aluminium with unmatched accuracy."
    features={[
      "Mild steel cutting up to 20mm thickness",
      "Stainless steel and aluminium cutting",
      "Complex pattern and decorative panel cutting",
      "Industrial parts and machine components",
      "Signage lettering and logo cutting",
      "Batch production with consistent quality",
      "DXF and CAD file support",
      "Fast turnaround on urgent orders",
    ]}
  />
);

export default CncLaserCutting;
