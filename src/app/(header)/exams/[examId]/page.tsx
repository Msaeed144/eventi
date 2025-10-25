import ExamDetails from '@/components/exams/ExamDetails';
import { exams } from '@/data';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';

type PageProps = {
  params: { examId: string };
};

function getExam(examId: string) {
  return exams.find((item) => String(item.enName).toLowerCase() === examId.toLowerCase());
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { examId } = params;
  const exam = getExam(examId);

  if (!exam) {
    return {
      title: "آزمون یافت نشد",
      description: "این آزمون در دسترس نیست.",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${exam.faName} | آزمون ${exam.enName}`,
    description: `دوره ${exam.faName} — ${exam.miniDescription}`,
  };
}

export default function CourseDetail({ params }: PageProps) {
  const { examId } = params;
  console.log('[CourseDetail] examId=', examId);
  console.log('[CourseDetail] exams count=', Array.isArray(exams) ? exams.length : typeof exams);

  const exam = getExam(examId);

  if (!exam) {
    notFound();
  }

  return (
    <div className="my-12 container mx-auto">
      <ExamDetails exam={exam}/>
    </div>
  );
}
