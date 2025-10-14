// src/app/courses/[courseId]/page.tsx
import { courses } from "@/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import CourseDetails from "@/components/courses/CourseDetails";

type PageProps = {
  params: { courseId: string };
};

function getCourse(courseId: string) {
  return courses.find((item) => String(item.id) === courseId);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const course = getCourse(params.courseId);

  if (!course) {
    return {
      title: "دوره یافت نشد",
      description: "این دوره در دسترس نیست.",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${course.title} | دوره #${course.id}`,
    description: `دوره ${course.title} با مدرس ${course.Organizer.name}.`,
    openGraph: {
      title: `${course.title} | #${course.id}`,
      description: course.Organizer.description,
      type: "article",
      url: `/courses/${params.courseId}`,
      images: course.image
        ? [{ url: course.image, alt: course.title }]
        : [{ url: "/images/og-default.png", alt: "Course" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${course.title} | #${course.id}`,
      description: course.Organizer.description,
      images: course.image ? [course.image] : ["/images/og-default.png"],
    },
    // اگر لازم داری id به‌صورت meta tag هم باشد:
    // other: { "course:id": String(course.id) },
  };
}

// ✅ خود صفحه (توجه: params دیگر Promise نیست)
export default async function CourseDetail({ params }: PageProps) {
  const course = getCourse(params.courseId);

  if (!course) {
    notFound(); // نیازی به return نیست؛ اینجا throw می‌کند
  }

  return (
    <div className="my-12">
      <div className="relative">
        <div className="courseBanner w-full flex justify-end absolute">
          <Image
            src="/images/pics/banner-background.png"
            width={550}
            height={275}
            alt="بنر"
          />
        </div>

        <div className="mb-12">
          <div className="relative pt-8 mb-6">
            <CourseDetails course={course} />
          </div>
        </div>
      </div>
    </div>
  );
}
