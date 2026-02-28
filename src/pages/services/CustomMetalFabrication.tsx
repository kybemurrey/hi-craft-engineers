import { Wrench } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import serviceFab from "@/assets/service-fabrication.jpg";

const CustomMetalFabrication = () => (
  <ServicePageLayout
    title="Custom Metal Fabrication"
    subtitle="Bespoke Metalwork"
    icon={Wrench}
    image={serviceFab}
    description="Bespoke metalwork tailored to your exact specifications. From one-off custom pieces to batch production runs, we bring your designs to life with expert welding and finishing."
    features={[
      "Custom design and prototyping",
      "MIG, TIG, and arc welding",
      "Sheet metal bending and forming",
      "One-off pieces and batch production",
      "Powder coating and painting finishes",
      "Assembly and installation services",
      "Mild steel, stainless steel, and aluminium",
      "On-site measurement and consultation",
    ]}
  />
);

export default CustomMetalFabrication;
