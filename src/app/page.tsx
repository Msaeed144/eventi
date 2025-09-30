import Header from "@/components/Header";
import MainSlider from "@/components/MainSlider";
import MiniPoster from "@/components/MiniPoster";
import SpecialCourses from "@/components/SpecialCourses";

export default function Home() {
  return (
    <div className="bg-primary container">
      <Header />
      <div className="mt-5 flex gap-2 justify-between h-80">
        <MainSlider />
        <MiniPoster />
      </div>
      <SpecialCourses />
    </div>
  );
}
