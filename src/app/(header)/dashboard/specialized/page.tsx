"use client";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import DashboardBreadCrumb from "@/components/dashboard/DashboardBreadCrumb";
import { Specialty } from "@/type";

function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); // برای انیمیشن
  const [typeFocused, setTypeFocused] = useState(false);
  const [skillFocused, setSkillFocused] = useState(false);
  const [levelFocused, setLevelFocused] = useState(false);
  const [linkFocused, setLinkFocused] = useState(false);
  const [form, setForm] = useState({
    type: "",
    skill: "",
    level: "",
    link: "",
    description: "",
  });
  const [specialties, setSpecialties] = useState<Specialty[]> ([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Blur کردن صفحه هنگام باز شدن مودال
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("blurred");
      setTimeout(() => setShowModal(true), 20); // شروع transition
    } else {
      setShowModal(false);
      document.body.classList.remove("blurred");
    }
  }, [isModalOpen]);

  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const handleSubmit = () => {
    if (editingId) {
      setSpecialties((prev) =>
        prev.map((item) =>
          item.id === editingId ? { ...item, ...form } : item
        )
      );
    } else {
      const newItem: Specialty = { id: uuidv4(), ...form };
      setSpecialties((prev) => [...prev, newItem]);
    }

    setForm({ type: "", skill: "", level: "", link: "", description: "" });
    setEditingId(null);
    setIsModalOpen(false);
  };

  const handleEdit = (item: Specialty) => {
    setForm({
      type: item.type,
      skill: item.skill,
      level: item.level,
      link: item.link,
      description: item.description,
    });
    setEditingId(item.id);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setSpecialties((prev) => prev.filter((item) => item.id !== id));
  };

  const setFormCleaner = () => {
    setForm({ type: "", skill: "", level: "", link: "", description: "" });
  };

  return (
    <div className="col-span-9 relative">
      <DashboardBreadCrumb />
      <div className="bg-white rounded-md dashboardBoxShadow pt-[30px] px-11 pb-11">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="bg-primaryColor w-2.5 h-[5px] rounded-[5px]"></div>
            <p className="text-xl font-bold">حوزه های تخصصی</p>
          </div>
          <div
            onClick={() => setIsModalOpen(true)}
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
          </div>
        </div>

        {specialties.length === 0 ? (
          <div className="w-full border border-strokeColor rounded-md text-center text-[#32323280] mt-[30px] py-12">
            موردی وجود ندارد
          </div>
        ) : (
          specialties.map((item) => (
            <div
              key={item.id}
              className="w-full border border-strokeColor rounded-md mt-[30px] py-3 px-6"
            >
              <div className="w-full flex justify-between">
                <div>
                  <div className="flex mb-1.5">
                    <p>نوع مهارت:</p>
                    <p className="font-semibold mr-1">{item.type}</p>
                  </div>
                  <div className="flex mb-1.5">
                    <p>نام مهارت:</p>
                    <p className="font-semibold mr-1">{item.skill}</p>
                  </div>
                  <div className="flex mb-1.5">
                    <p>سطح آشنایی:</p>
                    <p className="font-semibold mr-1">{item.level}</p>
                  </div>
                  <div className="flex mb-1.5">
                    <p>لینک نمونه کار:</p>
                    <p className="font-semibold mr-1">{item.link}</p>
                  </div>
                  <div className="flex mb-1.5">
                    <p>توضیحات:</p>
                    <p className="font-semibold mr-1">{item.description}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div
                    className="border border-strokeColor h-fit p-1.5 rounded-2xl cursor-pointer"
                    onClick={() => handleDelete(item.id)}
                  >
                    <Image
                      src="/images/icons/trash.svg"
                      width={24}
                      height={24}
                      alt="حذف"
                    />
                  </div>
                  <div
                    className="border border-strokeColor h-fit p-1.5 rounded-2xl cursor-pointer"
                    onClick={() => handleEdit(item)}
                  >
                    <Image
                      src="/images/icons/edit.svg"
                      width={24}
                      height={24}
                      alt="ویرایش"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-white/30 backdrop-blur-[4px] transition-opacity duration-100 ${
              showModal ? "opacity-100" : "opacity-0"
            }`}
          ></div>

          {/* Modal Box */}
          <div
            className={`bg-white addBoxShadow p-6 rounded-md z-10 py-[30px] px-10
              transform transition-all duration-500 ease-out
              ${showModal ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
            `}
          >
            {/* Header */}
            <div className="mb-[30px] pl-[591px] pr-[25px] py-4 bg-tertiaryColor rounded-sm">
              <p className="font-bold">
                {editingId ? "ویرایش حوزه تخصصی" : "افزودن حوزه تخصصی"}
              </p>
            </div>

            {/* Form */}
            <div className="w-full grid grid-cols-12 gap-x-11 gap-y-[30px]">
              {/* نوع مهارت */}
              <div className="relative pt-3 col-span-6">
                <input
                  onFocus={() => setTypeFocused(true)}
                  onBlur={() => setTypeFocused(false)}
                  onChange={changeHandler}
                  value={form.type}
                  className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                  type="text"
                  name="type"
                  id="type"
                />
                <label
                  htmlFor="type"
                  className={`cursor-text absolute right-[15px] text-[#667085] bg-white px-1 transition-all duration-200 ${
                    typeFocused || form.type
                      ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                      : "translate-y-[14px] text-[14px] font-medium"
                  }`}
                >
                  نوع مهارت
                </label>
              </div>

              {/* نام مهارت */}
              <div className="relative pt-3 col-span-6">
                <input
                  onFocus={() => setSkillFocused(true)}
                  onBlur={() => setSkillFocused(false)}
                  onChange={changeHandler}
                  value={form.skill}
                  className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                  type="text"
                  name="skill"
                  id="skill"
                />
                <label
                  htmlFor="skill"
                  className={`cursor-text absolute right-[15px] text-[#667085] bg-white px-1 transition-all duration-200 ${
                    skillFocused || form.skill
                      ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                      : "translate-y-[14px] text-[14px] font-medium"
                  }`}
                >
                  نام مهارت
                </label>
              </div>

              {/* سطح آشنایی */}
              <div className="relative pt-3 col-span-6">
                <input
                  onFocus={() => setLevelFocused(true)}
                  onBlur={() => setLevelFocused(false)}
                  onChange={changeHandler}
                  value={form.level}
                  className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                  type="text"
                  name="level"
                  id="level"
                />
                <label
                  htmlFor="level"
                  className={`cursor-text absolute right-[15px] text-[#667085] bg-white px-1 transition-all duration-200 ${
                    levelFocused || form.level
                      ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                      : "translate-y-[14px] text-[14px] font-medium"
                  }`}
                >
                  سطح آشنایی
                </label>
              </div>

              {/* لینک نمونه کار */}
              <div className="relative pt-3 col-span-6">
                <input
                  onFocus={() => setLinkFocused(true)}
                  onBlur={() => setLinkFocused(false)}
                  onChange={changeHandler}
                  value={form.link}
                  className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                  type="text"
                  name="link"
                  id="link"
                />
                <label
                  htmlFor="link"
                  className={`cursor-text absolute right-[15px] text-[#667085] bg-white px-1 transition-all duration-200 ${
                    linkFocused || form.link
                      ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                      : "translate-y-[14px] text-[14px] font-medium"
                  }`}
                >
                  لینک نمونه کار
                </label>
              </div>

              {/* توضیحات */}
              <div className="relative pt-3 col-span-12">
                <textarea
                  name="description"
                  onChange={changeHandler}
                  value={form.description}
                  id="description"
                  className="p-2.5 w-full border border-strokeColor rounded-[8px] h-[72px]"
                />
                <label
                  className="absolute right-4 top-1 bg-white px-2 text-[11px] font-bold"
                  htmlFor="description"
                >
                  توضیحات
                </label>
              </div>
            </div>

            {/* دکمه‌ها */}
            <div className="w-full flex gap-2.5 justify-end mt-16">
              <button
                className="cursor-pointer w-40 rounded-sm h-12 border font-semibold border-strokeColor flex items-center justify-center"
                onClick={() => {
                  setIsModalOpen(false);
                  setEditingId(null);
                  setFormCleaner();
                }}
              >
                انصراف
              </button>
              <button
                onClick={handleSubmit}
                className="cursor-pointer w-40 h-12 flex font-semibold items-center justify-center bg-primaryColor text-white rounded-sm"
              >
                ثبت اطلاعات
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
