import { Building2 } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import serviceStructural from "@/assets/service-structural.jpg";

const RoofingStructures = () => (
  <ServicePageLayout
    title="Roofing Structures"
    subtitle="Steel Roofing"
    icon={Building2}
    image={serviceStructural}
    description="Steel roof trusses, purlins, and complete roofing frameworks. Engineered for strength and designed for Kenyan weather conditions."
    features={[
      "Steel roof trusses — flat and pitched",
      "Purlins and battens supply and fit",
      "Complete roofing framework installation",
      "IBR and corrugated sheet roofing",
      "Gutter and fascia installation",
      "Roof extensions and renovations",
      "Engineered for wind and rain loads",
      "Residential and commercial projects",
    ]}
  />
);

export default RoofingStructures;
