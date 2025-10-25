import { CommentItem } from "@/type";
import React from "react";
import Rating from "@mui/material/Rating";
import Image from "next/image";
type CommentQuestionProps = {
  comments: CommentItem[];
};

function ExamCommentSection({ comments }: CommentQuestionProps) {
  return (
    <div className="p-[25px] bg-white border border-strokeColor rounded-[15px]">
      <div className="font-semibold text-2xl relative mb-12">
        <div className="bg-tertiaryColor w-[134px] h-[10px] rounded-sm absolute top-[18px]"></div>
        <h3 className="mr-1 flex gap-1 z-50 absolute ">نظرات کاربران</h3>
      </div>
      <div>
        {comments.map((comment, index) => (
          <div
            key={index}
            className=" mb-4 p-8 border border-strokeColor rounded-[8px]"
          >
            <div className="flex justify-between">
              <div className="flex gap-2 items-baseline">
                <div>
                  <p className="font-semibold text-lg">
                    {comment.qualitativeRate}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#B19276]">{comment.userName}</p>
                </div>
              </div>
              <div>
                <div>
                  <Rating
                    name="user-rating-display"
                    value={comment.rate}
                    precision={0.5}
                    readOnly
                    sx={{
                      direction: "ltr",
                      "& .MuiRating-icon": { margin: 0 },
                      "& .MuiRating-icon + .MuiRating-icon": {
                        marginLeft: "2px",
                        marginRight: 0,
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="mt-6">
                <p className="text-[#6D6D74] leading-6 text-sm">{comment.text}</p>
            </div>
            <div className="text-[#6D6D74] flex justify-end mt-6">
                <div className="flex items-center gap-2">
                    <Image src='/images/icons/comment-clock.svg' width={15} height={15} alt="روز" />
                    <p className="text-sm">{comment.day} پیش</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExamCommentSection;
