"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ConferanceType } from "@/type";
import { v4 as uuidv4 } from "uuid";

function Conference() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allConferances, setAllConferances] = useState<ConferanceType[]>([]);
  const [conferanceFocused, setConferanceFocused] = useState(false);
  const [articleNameFocused, setArticleNameFocused] = useState(false);
  const [articleTypeFocused, setArticleTypeFocused] = useState(false);
  const [articleStatusFocused, setArticleStatusFocused] = useState(false);
  const [yearFocused, setYearFocused] = useState(false);
  const [linkFocused, setLinkFocused] = useState(false);
  const [showModal, setShowModal] = useState(false); // برای انیمیشن
  const [editingId, setEditingId] = useState<string | null>(null);
  const [conferance, setConferance] = useState({
    conferanceName: "",
    articleName: "",
    articleType: "",
    articleStatus: "",
    year: "",
    link: "",
    description: "",
  });
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("blurred");
      setTimeout(() => setShowModal(true), 20); // شروع transition
    } else {
      setShowModal(false);
      document.body.classList.remove("blurred");
    }
  }, [isModalOpen]);
  const clearForm = () => {
    setConferance({
      conferanceName: "",
      articleName: "",
      articleType: "",
      articleStatus: "",
      year: "",
      link: "",
      description: "",
    });

    setConferanceFocused(false);
    setArticleNameFocused(false);
    setArticleTypeFocused(false);
    setArticleStatusFocused(false);
    setYearFocused(false);
    setLinkFocused(false);
  };
  const closeModal = () => {
    // ابتدا انیمیشن خروج
    setShowModal(false);
    // بعد از مدت زمان transition، مودال را از DOM حذف کن
    setTimeout(() => {
      setIsModalOpen(false);
      setEditingId(null);
      clearForm();
    }, 300); // هماهنگ با duration کلاس transition در CSS (300ms)
  };
  const changeHandler = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setConferance((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingId) {
      setAllConferances((prev) =>
        prev.map((it) => (it.id === editingId ? { ...it, ...conferance } : it))
      );
    } else {
      const newItem: ConferanceType = { id: uuidv4(), ...conferance };
      setAllConferances((prev) => [...prev, newItem]);
    }

    // پاکسازی و بستن مودال
    setEditingId(null);
    clearForm();
    closeModal();
  };
  const handleEdit = (item: ConferanceType) => {
    setConferance({
      conferanceName: item.conferanceName || "",
      articleName: item.articleName || "",
      articleType: item.articleType || "",
      articleStatus: item.articleStatus || "",
      year: item.year || "",
      link: item.link || "",
      description: item.description || "",
    });
    setEditingId(item.id);
    // باز کردن مودال به صورت ایمن
    requestAnimationFrame(() => {
      setIsModalOpen(true);
      setShowModal(true);
    });
  };
  const handleDelete = (id: string) => {
    setAllConferances((prev) => prev.filter((it) => it.id !== id));
  };
  return (
  <div>
        {allConferances.length === 0 ? (
                      <div className="w-full border border-strokeColor rounded-md text-center text-[#32323280] mt-[30px] py-12">
                        موردی وجود ندارد
                      </div>
                    ) : (
                      allConferances.map((item) => (
                        <div
                          key={item.id}
                          className="w-full border border-strokeColor rounded-md mt-[30px] py-3 px-6"
                        >
                          <div className="w-full flex justify-between">
                            <div>
                              <div className="flex mb-1.5">
                                <p>نام همایش :</p>
                                <p className="font-semibold mr-1">{item.conferanceName}</p>
                              </div>
                              <div className="flex mb-1.5">
                                <p>نام مقاله :</p>
                                <p className="font-semibold mr-1">{item.articleName}</p>
                              </div>
                              <div className="flex mb-1.5">
                                <p>نوع مقاله:</p>
                                <p className="font-semibold mr-1">{item.articleType}</p>
                              </div>
                              <div className="flex mb-1.5">
                                <p>وضعیت انتشار:</p>
                                <p className="font-semibold mr-1">
                                  {item.articleStatus}
                                </p>
                              </div>
                              <div className="flex mb-1.5">
                                <p> اسل برگزاری:</p>
                                <p className="font-semibold mr-1">
                                  {item.articleStatus}
                                </p>
                              </div>
                              <div className="flex mb-1.5">
                                <p>لینک مرتبط:</p>
                                <p className="font-semibold mr-1">{item.link}</p>
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
  
        <div className="w-full flex justify-end mt-6">
          <div
            onClick={() => {
              setIsModalOpen(true);
            }}
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
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className={`absolute inset-0 bg-white/30 backdrop-blur-[4px] transition-opacity duration-100 ${
                showModal ? "opacity-100" : "opacity-0"
              }`}
            ></div>
            <div
              className={`bg-white addBoxShadow p-6 rounded-md z-10 py-[30px] px-10 transform transition-all duration-500 ease-out ${
                showModal
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="mb-[30px] pl-[591px] pr-[25px] py-4 bg-tertiaryColor rounded-sm">
                <p className="font-bold">
                  {editingId ? "ویرایش همایش" : "افزودن همایش"}
                </p>
              </div>
  
              <form onSubmit={handleSubmit} className="w-full grid grid-cols-12 gap-x-11 gap-y-[30px]">
                <div className="relative pt-3 col-span-12">
                  <input
                    onFocus={() => setConferanceFocused(true)}
                    onBlur={() => setConferanceFocused(false)}
                    onChange={changeHandler}
                    value={conferance.conferanceName}
                    className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                    type="text"
                    name="conferanceName"
                    id="conferanceName"
                  />
                  <label
                    htmlFor="conferanceName"
                    className={`cursor-text absolute right-[15px] text-[#667085] bg-white px-1 transition-all duration-200 ${
                      conferanceFocused || conferance.conferanceName
                        ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                        : "translate-y-[14px] text-[14px] font-medium"
                    }`}
                  >
                    نام همایش 
                  </label>
                </div>
                <div className="relative pt-3 col-span-6">
                  <input
                    onFocus={() => setArticleNameFocused(true)}
                    onBlur={() => setArticleNameFocused(false)}
                    onChange={changeHandler}
                    value={conferance.articleName }
                    className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                    type="text"
                    name="articleName" 
                    id="articleName"
                  />
                  <label
                    htmlFor="articleName"
                    className={`cursor-text absolute right-[15px] text-[#667085] bg-white px-1 transition-all duration-200 ${
                      articleNameFocused || conferance.articleName
                        ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                        : "translate-y-[14px] text-[14px] font-medium"
                    }`}
                  >
                    نام مقاله 
                  </label>
                </div>
                <div className="relative pt-3 col-span-6">
                  <input
                    onFocus={() => setArticleTypeFocused(true)}
                    onBlur={() => setArticleTypeFocused(false)}
                    onChange={changeHandler}
                    value={conferance.articleType}
                    className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                    type="text"
                    name="articleType"
                    id="articleType"
                  />
                  <label
                    htmlFor="articleType"
                    className={`cursor-text absolute right-[15px] text-[#667085] bg-white px-1 transition-all duration-200 ${
                      articleTypeFocused || conferance.articleType
                        ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                        : "translate-y-[14px] text-[14px] font-medium"
                    }`}
                  >
                      نوع مقاله 
                  </label>
                </div>
                <div className="relative pt-3 col-span-6">
                  <input
                    onFocus={() => setArticleStatusFocused(true)}
                    onBlur={() => setArticleStatusFocused(false)}
                    onChange={changeHandler}
                    value={conferance.articleStatus}
                    className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                    type="text"
                    name="articleStatus"
                    id="articleStatus"
                  />
                  <label
                    htmlFor="articleStatus"
                    className={`cursor-text absolute right-[15px] text-[#667085] bg-white px-1 transition-all duration-200 ${
                      articleStatusFocused || conferance.articleStatus
                        ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                        : "translate-y-[14px] text-[14px] font-medium"
                    }`}
                  >
                      وضعیت انتشار  
                  </label>
                </div>
                <div className="relative pt-3 col-span-6">
                  <input
                    onFocus={() => setYearFocused(true)}
                    onBlur={() => setYearFocused(false)}
                    onChange={changeHandler}
                    value={conferance.year}
                    className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                    type="text"
                    name="year"
                    id="year"
                  />
                  <label
                    htmlFor="year"
                    className={`cursor-text absolute right-[15px] text-[#667085] bg-white px-1 transition-all duration-200 ${
                      yearFocused || conferance.year
                        ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                        : "translate-y-[14px] text-[14px] font-medium"
                    }`}
                  >
                      سال برگزاری  
                  </label>
                </div>
                 <div className="relative pt-3 col-span-6">
                  <input
                    onFocus={() => setLinkFocused(true)}
                    onBlur={() => setLinkFocused(false)}
                    onChange={changeHandler}
                    value={conferance.link}
                    className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                    type="text"
                    name="link"
                    id="link"
                  />
                  <label
                    htmlFor="link"
                    className={`cursor-text absolute right-[15px] text-[#667085] bg-white px-1 transition-all duration-200 ${
                      linkFocused || conferance.link
                        ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                        : "translate-y-[14px] text-[14px] font-medium"
                    }`}
                  >
                      لینک مرتبط 
                  </label>
                </div>
                
                 {/* توضیحات */}
                <div className="relative pt-3 col-span-12">
                  <textarea
                    name="description"
                    onChange={changeHandler}
                    value={conferance.description}
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
                <div className="w-full flex gap-2.5 justify-end mt-6 col-span-12">
                    <button type="button" onClick={closeModal} className="cursor-pointer w-40 rounded-sm h-12 border font-semibold border-strokeColor flex items-center justify-center">
                      انصراف
                    </button>
                    <button type="submit" className="cursor-pointer w-40 h-12 flex font-semibold items-center justify-center bg-primaryColor text-white rounded-sm">
                      ثبت اطلاعات
                    </button>
                  </div>
              </form>
            </div>
          </div>
        )}
      </div>
  );
}

export default Conference;
