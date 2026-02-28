import { Shield } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import galleryDoor from "@/assets/gallery-door.jpg";

const MetalGatesSecurity = () => (
  <ServicePageLayout
    title="Metal Gates & Security"
    subtitle="Security Solutions"
    icon={Shield}
    image={galleryDoor}
    description="Decorative and security gates, sliding gates, swing gates, and driveway barriers. Powder-coated finishes for lasting durability and curb appeal."
    features={[
      "Sliding gates with automated motors",
      "Swing gates — single and double leaf",
      "Driveway barriers and bollards",
      "Decorative wrought iron designs",
      "Security grills and burglar proofing",
      "Powder-coated and galvanized finishes",
      "Remote control and access systems",
      "Custom sizes for any entrance",
    ]}
  />
);

export default MetalGatesSecurity;
