import ExamsBanner from "@/components/exams/ExamsBanner";
import ExamsPage from "@/components/exams/ExamsPage";
import React from "react";

function Exams() {
  return (
    <div>
      <div className="mb-10">
        <ExamsBanner />
      </div>
      <div className="container mx-auto">
        <ExamsPage />
      </div>
    </div>
  );
}

export default Exams;
