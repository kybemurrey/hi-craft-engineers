import { Layers } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import serviceStructural from "@/assets/service-structural.jpg";

const StructuralSteelWorks = () => (
  <ServicePageLayout
    title="Structural Steel Works"
    subtitle="Heavy Engineering"
    icon={Layers}
    image={serviceStructural}
    description="Steel columns, beams, staircases, railings, and full structural frameworks for commercial and industrial buildings."
    features={[
      "Steel columns and beams fabrication",
      "Mezzanine floors and platforms",
      "Staircases — straight, spiral, and L-shaped",
      "Handrails and balustrades",
      "Industrial frameworks and warehouses",
      "Steel bridges and walkways",
      "Connection plates and base plates",
      "Structural engineering consultation",
    ]}
  />
);

export default StructuralSteelWorks;
