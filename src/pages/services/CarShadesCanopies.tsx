import { Car } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import serviceCarshades from "@/assets/service-carshades.jpg";

const CarShadesCanopies = () => (
  <ServicePageLayout
    title="Car Shades & Canopies"
    subtitle="Shade Structures"
    icon={Car}
    image={serviceCarshades}
    description="Modern carports, shade structures, and canopies with polycarbonate or IBR sheet roofing. Protecting vehicles in style."
    features={[
      "Single and double carports",
      "Cantilever and arch designs",
      "Polycarbonate and IBR sheet options",
      "Walkway and entrance canopies",
      "Commercial parking shade structures",
      "Powder-coated steel frames",
      "UV-resistant roofing materials",
      "Free site survey and quotation",
    ]}
  />
);

export default CarShadesCanopies;
