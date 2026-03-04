import { Home } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import serviceDoorsWindows from "@/assets/service-doors-windows.jpg";

const DoorsWindows = () => (
  <ServicePageLayout
    title="Doors & Windows"
    subtitle="Quality Frames"
    icon={Home}
    image={serviceDoorsWindows}
    description="Steel and aluminium doors, security doors, window frames, and grills. Custom sizes and designs for residential and commercial properties."
    features={[
      "Steel security doors with multi-lock systems",
      "Aluminium window and door frames",
      "French doors and patio doors",
      "Window grills and burglar bars",
      "Fire-rated steel doors",
      "Shopfront and commercial doors",
      "Custom glass panel options",
      "Professional installation included",
    ]}
  />
);

export default DoorsWindows;
