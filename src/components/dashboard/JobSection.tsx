"use client";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { Jobs } from "@/type";

const JobSection: React.FC = ()=> {
      const [isJobModalOpen, setIsJobModalOpen] = useState(false);
      const [showModal, setShowModal] = useState(false); // برای انیمیشن مودال
      const [titleFocused, setTitleFocused] = useState(false);
      const [companyFocused, setCompanyFocused] = useState(false);
      const [startFocused, setStartFocused] = useState(false);
      const [endFocused, setEndFocused] = useState(false);
      const [typeFocused, setTypeFocused] = useState(false);
      const [levelFocused, setLevelFocused] = useState(false);
    
      const [jobs, setJobs] = useState<Jobs[]>([]);
      const [editingJobId, setEditingJobId] = useState<string | null>(null);
    
      const [job, setJob] = useState({
        title: "",
        company: "",
        start: "",
        end: "",
        type: "",
        level: "",
        description: "",
      });
    
      // اضافه/حذف کلاس blurred روی body هنگام باز بودن مودال
      useEffect(() => {
        if (isJobModalOpen) {
          document.body.classList.add("blurred");
        } else {
          document.body.classList.remove("blurred");
        }
        return () => {
          document.body.classList.remove("blurred");
        };
      }, [isJobModalOpen]);
    
      // باز کردن مودال با اطمینان از اجرای transition
      const openModal = () => {
        setIsJobModalOpen(true);
        // اجرا در فریم بعدی تا transition دیده شود
        requestAnimationFrame(() => {
          setShowModal(true);
        });
      };
    
      const closeModal = () => {
        // ابتدا انیمیشن خروج
        setShowModal(false);
        // بعد از مدت زمان transition، مودال را از DOM حذف کن
        setTimeout(() => {
          setIsJobModalOpen(false);
          setEditingJobId(null);
          clearForm();
        }, 300); // هماهنگ با duration کلاس transition در CSS (300ms)
      };
    
      const changeHandler = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      ) => {
        const { name, value } = event.target;
        setJob((prev) => ({ ...prev, [name]: value }));
      };
    
      const clearForm = () => {
        setJob({
          title: "",
          company: "",
          start: "",
          end: "",
          type: "",
          level: "",
          description: "",
        });
        setTitleFocused(false);
        setCompanyFocused(false);
        setStartFocused(false);
        setEndFocused(false);
        setTypeFocused(false);
        setLevelFocused(false);
      };
    
      const handleSubmit = (e?: React.FormEvent) => {
        e?.preventDefault?.();
    
        if (editingJobId) {
          setJobs((prev) => prev.map((it) => (it.id === editingJobId ? { ...it, ...job } : it)));
        } else {
          const newItem: Jobs = { id: uuidv4(), ...job };
          setJobs((prev) => [...prev, newItem]);
        }
    
        // پاکسازی و بستن مودال
        setEditingJobId(null);
        clearForm();
        closeModal();
      };
    
      const handleEdit = (item: Jobs) => {
        setJob({
          title: item.title || "",
          company: item.company || "",
          start: item.start || "",
          end: item.end || "",
          type: item.type || "",
          level: item.level || "",
          description: item.description || "",
        });
        setEditingJobId(item.id);
        // باز کردن مودال به صورت ایمن
        requestAnimationFrame(() => {
          setIsJobModalOpen(true);
          setShowModal(true);
        });
      };
    
      const handleDelete = (id: string) => {
        setJobs((prev) => prev.filter((it) => it.id !== id));
      };
  return (
        <div>
        <div >
          {/* سوابق شغلی */}
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <div className="bg-primaryColor w-2.5 h-[5px] rounded-[5px]" />
              <p className="text-xl font-bold">سوابق شغلی</p>
            </div>

            <button
              type="button"
              onClick={openModal}
              className="flex cursor-pointer gap-8 w-32 h-9 justify-center items-center rounded-sm border border-strokeColor bg-tertiaryColor"
            >
              <p className="text-primaryColor">افزودن</p>
              <div className="bg-[#8f9fe4] p-[5px] rounded-full">
                <Image
                  src="/images/icons/plus.svg"
                  width={7.92}
                  height={7.92}
                  alt="اضافه کردن"
                />
              </div>
            </button>
          </div>

          {/* لیست سوابق */}
          <div className="mt-6">
            {jobs.length === 0 ? (
              <div className="w-full border border-strokeColor rounded-md text-center text-[#32323280] mt-[30px] py-12">
                موردی وجود ندارد
              </div>
            ) : (
              jobs.map((item) => (
                <div
                  key={item.id}
                  className="w-full border border-strokeColor rounded-md mt-[30px] py-3 px-6"
                >
                  <div className="w-full flex justify-between">
                    <div>
                      <div className="flex mb-1.5">
                        <p>عنوان شغلی:</p>
                        <p className="font-semibold mr-1">{item.title}</p>
                      </div>
                      <div className="flex mb-1.5">
                        <p>نام شرکت:</p>
                        <p className="font-semibold mr-1">{item.company}</p>
                      </div>
                      <div className="flex mb-1.5">
                        <p>دوره:</p>
                        <p className="font-semibold mr-1">
                          {item.start} تا {item.end}
                        </p>
                      </div>
                      <div className="flex mb-1.5">
                        <p>نوع همکاری:</p>
                        <p className="font-semibold mr-1">{item.type}</p>
                      </div>
                      <div className="flex mb-1.5">
                        <p>سطح:</p>
                        <p className="font-semibold mr-1">{item.level}</p>
                      </div>
                      <div className="flex mb-1.5">
                        <p>توضیحات:</p>
                        <p className="font-semibold mr-1">{item.description}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => handleDelete(item.id)}
                        className="border border-strokeColor h-fit p-1.5 rounded-2xl"
                      >
                        <Image
                          src="/images/icons/trash.svg"
                          width={20}
                          height={20}
                          alt="حذف"
                        />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleEdit(item)}
                        className="border border-strokeColor h-fit p-1.5 rounded-2xl"
                      >
                        <Image
                          src="/images/icons/edit.svg"
                          width={20}
                          height={20}
                          alt="ویرایش"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Modal */}
        {isJobModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Backdrop */}
            <div
              className={`absolute inset-0 bg-black/30 backdrop-blur-[4px] transition-opacity duration-300 ${
                showModal ? "opacity-100" : "opacity-0"
              }`}
              onClick={closeModal}
            />

            {/* Modal Box */}
            <div
              onClick={(e) => e.stopPropagation()}
              className={`bg-white addBoxShadow p-6 rounded-md z-10 py-[30px] px-10 transform transition-all duration-300 ease-out ${
                showModal
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              role="dialog"
              aria-modal="true"
            >
              {/* Header */}
              <div className="mb-[20px] pl-[591px] pr-[25px] py-4 bg-tertiaryColor rounded-sm">
                <p className="font-bold">
                  {editingJobId ? "ویرایش سابقه شغلی" : "افزودن سابقه شغلی"}
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="w-full grid grid-cols-12 gap-x-11 gap-y-[20px]"
              >
                {/* عنوان شغلی */}
                <div className="relative pt-3 col-span-6">
                  <input
                    name="title"
                    id="title"
                    value={job.title}
                    onChange={changeHandler}
                    onFocus={() => setTitleFocused(true)}
                    onBlur={() => setTitleFocused(false)}
                    className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                    type="text"
                  />
                  <label
                    htmlFor="title"
                    className={` cursor-text absolute right-[15px] bg-white px-1 transition-all duration-200 ${
                      titleFocused || job.title
                        ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                        : "translate-y-[14px] text-[14px] font-medium text-[#667085]"
                    }`}
                  >
                    عنوان شغلی
                  </label>
                </div>

                {/* نام شرکت */}
                <div className="relative pt-3 col-span-6">
                  <input
                    name="company"
                    id="company"
                    value={job.company}
                    onChange={changeHandler}
                    onFocus={() => setCompanyFocused(true)}
                    onBlur={() => setCompanyFocused(false)}
                    className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                    type="text"
                  />
                  <label
                    htmlFor="company"
                    className={`absolute cursor-text right-[15px] bg-white px-1 transition-all duration-200 ${
                      companyFocused || job.company
                        ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                        : "translate-y-[14px] text-[14px] font-medium text-[#667085]"
                    }`}
                  >
                    نام شرکت
                  </label>
                </div>

                {/* شروع همکاری */}
                <div className="relative pt-3 col-span-6">
                  <input
                    name="start"
                    id="start"
                    value={job.start}
                    onChange={changeHandler}
                    onFocus={() => setStartFocused(true)}
                    onBlur={() => setStartFocused(false)}
                    className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                    type="text"
                  />
                  <label
                    htmlFor="start"
                    className={`absolute cursor-text right-[15px] bg-white px-1 transition-all duration-200 ${
                      startFocused || job.start
                        ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                        : "translate-y-[14px] text-[14px] font-medium text-[#667085]"
                    }`}
                  >
                    شروع همکاری
                  </label>
                </div>

                {/* پایان همکاری */}
                <div className="relative pt-3 col-span-6">
                  <input
                    name="end"
                    id="end"
                    value={job.end}
                    onChange={changeHandler}
                    onFocus={() => setEndFocused(true)}
                    onBlur={() => setEndFocused(false)}
                    className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                    type="text"
                  />
                  <label
                    htmlFor="end"
                    className={`absolute cursor-text right-[15px] bg-white px-1 transition-all duration-200 ${
                      endFocused || job.end
                        ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                        : "translate-y-[14px] text-[14px] font-medium text-[#667085]"
                    }`}
                  >
                    پایان همکاری
                  </label>
                </div>

                {/* نوع همکاری (select) */}
                <div className="relative mt-3 col-span-6">
                  <select
                    name="type"
                    id="type-select"
                    value={job.type}
                    onChange={changeHandler}
                    onFocus={() => setTypeFocused(true)}
                    onBlur={() => setTypeFocused(false)}
                    className="outline-none focus:border-2 focus:border-primaryColor bg-[url('/images/icons/Select-down.svg')] bg-no-repeat bg-[length:1.5rem] bg-[position:left_0.75rem_center] appearance-none w-full border h-12 px-3 pt-3 border-strokeColor rounded-[8px]"
                  >
                    <option value=""></option>
                    <option value="تمام وقت">تمام وقت</option>
                    <option value="پاره وقت">پاره وقت</option>
                    <option value="پیمانکاری">پیمانکاری</option>
                    <option value="کارآموزی">کارآموزی</option>
                  </select>

                  <label
                    htmlFor="type-select"
                    className={` absolute block right-3 text-gray-700 bg-white mb-1 cursor-pointer transition-all duration-200 ${
                      typeFocused || job.type
                        ? "translate-y-[-45px] text-[11px] text-primaryColor"
                        : "-translate-y-8 text-[14px]"
                    }`}
                  >
                    نوع همکاری
                  </label>
                </div>

                {/* سطح */}
                <div className="relative pt-3 col-span-6">
                  <input
                    name="level"
                    id="level"
                    value={job.level}
                    onChange={changeHandler}
                    onFocus={() => setLevelFocused(true)}
                    onBlur={() => setLevelFocused(false)}
                    className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                    type="text"
                  />
                  <label
                    htmlFor="level"
                    className={`absolute cursor-text right-[15px] bg-white px-1 transition-all duration-200 ${
                      levelFocused || job.level
                        ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                        : "translate-y-[14px] text-[14px] font-medium text-[#667085]"
                    }`}
                  >
                    سطح
                  </label>
                </div>

                {/* توضیحات */}
                <div className="relative pt-3 col-span-12">
                  <textarea
                    name="description"
                    id="description"
                    value={job.description}
                    onChange={changeHandler}
                    className="p-2.5 w-full border border-strokeColor rounded-[8px] h-[72px]"
                  />
                  <label
                    className="absolute right-4 top-1 bg-white px-2 text-[11px] font-bold"
                    htmlFor="description"
                  >
                    توضیحات
                  </label>
                </div>

                {/* دکمه‌ها */}
                <div className="w-full flex gap-2.5 justify-end mt-6 col-span-12">
                  <button
                    type="button"
                    className="cursor-pointer w-40 rounded-sm h-12 border font-semibold border-strokeColor flex items-center justify-center"
                    onClick={closeModal}
                  >
                    انصراف
                  </button>
                  <button
                    type="submit"
                    className="cursor-pointer w-40 h-12 flex font-semibold items-center justify-center bg-primaryColor text-white rounded-sm"
                  >
                    ثبت اطلاعات
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
  )
}

export default JobSection