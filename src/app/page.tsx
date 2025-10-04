import Courses from "@/components/Courses";
import ExamsBanner from "@/components/ExamsBanner";
import Header from "@/components/Header";
import MainSlider from "@/components/MainSlider";
import MiniPoster from "@/components/MiniPoster";
import SpecialCourses from "@/components/SpecialCourses";

export default function Home() {
  return (
    <div className="bg-secondaryColor">
      <Header />
      <div className="xl:mr-8 ">
        <div className="mt-5 flex xl:gap-12  gap-2 justify-between container mx-auto">
          <MainSlider />
          <MiniPoster />
        </div>
      </div>
      <SpecialCourses />
      <Courses />
      <ExamsBanner />
    </div>
  );
}
