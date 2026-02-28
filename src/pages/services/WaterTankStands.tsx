import { Droplets } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import galleryCnc from "@/assets/gallery-cnc-real.jpg";

const WaterTankStands = () => (
  <ServicePageLayout
    title="Water Tank Stands"
    subtitle="Elevated Storage"
    icon={Droplets}
    image={galleryCnc}
    description="Elevated steel tank stands engineered for stability. Custom heights and capacities for residential and commercial water storage."
    features={[
      "Stands for 500L to 10,000L tanks",
      "Custom heights up to 6 metres",
      "Heavy-gauge steel construction",
      "Anti-corrosion treatment and painting",
      "Platform and ladder access options",
      "Multi-tank configurations",
      "Foundation bolt-down systems",
      "Delivery and installation available",
    ]}
  />
);

export default WaterTankStands;
