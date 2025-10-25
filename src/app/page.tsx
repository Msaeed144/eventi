import Accesses from "@/components/Accesses";
import Courses from "@/components/courses/Courses";
import FreeCourses from "@/components/courses/FreeCourses";
import LastCourses from "@/components/courses/LastCourses";
import ExamsBanner from "@/components/exams/ExamsBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainSlider from "@/components/MainSlider";
import MiniPoster from "@/components/MiniPoster";
import Organizers from "@/components/Organizers";
import ResumeLandingSection from "@/components/ResumeLandingSection";

export default function Home() {
  return (
    <div className="bg-secondaryColor">
      <div className="xl:mr-8 ">
        <Header />

        <div className="mt-5 flex container mx-auto gap-6">
          <MainSlider />
          <MiniPoster />
        </div>
      </div>
      <LastCourses />
      <Courses />
      <ExamsBanner />
      <FreeCourses />
      <Organizers />
      <ResumeLandingSection />
      <Accesses />
      <Footer />
    </div>
  );
}
