import CategorySlider from "@/components/Home/CategorySlider";
import HomeSlider from "@/components/Home/HomeSlider";
import Navigation from "@/components/Navigation";
import SupplierSlider from "@/components/Home/SupplierSlider";
import TopBar from "@/components/TopBar";
import Services from "@/components/Home/Services";
import RecentSuppliersSlider from "@/components/Home/RecentSuppliersSlider";
import AppCallToAction from "@/components/Home/AppCallToAction";
import Features from "@/components/Home/Features";
import FooterMaster from "@/components/Home/FooterMaster";
// <RecentSlider />
export default function Home() {
  return (
    <div>
      <TopBar />
      <Navigation />
      <HomeSlider />
      <CategorySlider />
      <SupplierSlider />
      <Services />
      <RecentSuppliersSlider />
      <AppCallToAction />
      <Features />
      <FooterMaster />
    </div>
  );
}
