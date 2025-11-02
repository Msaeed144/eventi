"use client";
import { Howze, University } from "@/type";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

function Education() {
  const [gradeFocused, setGradeFocused] = useState(false);
  const [universityTypeFocused, setUniversityTypeFocused] = useState(false);
  const [fieldFocused, setFieldFocused] = useState(false);
  const [trendFocused, setTrendFocused] = useState(false);
  const [uniNameFocused, setUniNameFocused] = useState(false);
  const [uniEndFocused, setUniEndFocused] = useState(false);
  const [hzlevelFocused, setHzlevelFocused] = useState(false);
  const [hznameFocused, setHznameFocused] = useState(false);
  const [hzendFocused, setHzendFocused] = useState(false);
  const [hzstartFocused, setHzstartFocused] = useState(false);

  const [allUniversities, setAllUniversities] = useState<University[]>([]);
  const [allHowzes, setAllHowzes] = useState<Howze[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); // برای انیمیشن
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formModel, setFormModel] = useState<"university" | "howze">("university");

  // فرم دانشگاه (uniStudying جدا نگه داشته میشه تا نوع ذخیره با تایپ University سازگار بمونه)
  const [university, setUniversity] = useState({
    grade: "",
    type: "",
    field: "",
    trend: "",
    uniname: "",
    uniend: "",
  });
  const [uniStudying, setUniStudying] = useState(false);

  // فرم حوزه
  const [howze, setHowzeh] = useState({
    hzlevel: "",
    hzname: "",
    hzstart: "",
    hzend: "",
  });
  const [howzeStudying, setHowzeStudying] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("blurred");
      setTimeout(() => setShowModal(true), 20); // شروع transition
    } else {
      setShowModal(false);
      document.body.classList.remove("blurred");
    }
  }, [isModalOpen]);

  const changeEducationHandler = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setUniversity((prev) => ({ ...prev, [name]: value }));
  };

  const changeHowzeHandler = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setHowzeh((prev) => ({ ...prev, [name]: value }));
  };

  const clearForm = () => {
    setUniversity({
      grade: "",
      type: "",
      field: "",
      trend: "",
      uniname: "",
      uniend: "",
    });
    setHowzeh({
      hzlevel: "",
      hzname: "",
      hzstart: "",
      hzend: "",
    });
    setUniStudying(false);
    setHowzeStudying(false);

    setGradeFocused(false);
    setUniversityTypeFocused(false);
    setFieldFocused(false);
    setTrendFocused(false);
    setUniNameFocused(false);
    setUniEndFocused(false);
    setHzlevelFocused(false);
    setHznameFocused(false);
    setHzendFocused(false);
    setHzstartFocused(false);
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

  // ---------- University submit ----------
  const handleUniSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // بسیار مهم — بدون این فرم صفحه را رفرش می‌کند

    // تعیین مقدار uniend بر اساس تیک "در حال تحصیل"
    const uniendValue = uniStudying ? "در حال تحصیل" : university.uniend;

    if (editingId) {
      setAllUniversities((prev) =>
        prev.map((item) =>
          item.id === editingId ? { ...item, ...university, uniend: uniendValue } : item
        )
      );
    } else {
      const newItem: University = { id: uuidv4(), ...university, uniend: uniendValue };
      setAllUniversities((prev) => [...prev, newItem]);
    }

    // پاکسازی فرم و بستن مودال
    setUniversity({
      grade: "",
      type: "",
      field: "",
      trend: "",
      uniname: "",
      uniend: "",
    });
    setUniStudying(false);
    setEditingId(null);
    setIsModalOpen(false);
  };

  // ---------- Howze submit ----------
  const handleHowzeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const hzendValue = howzeStudying ? "در حال تحصیل" : howze.hzend;

    if (editingId) {
      setAllHowzes((prev) =>
        prev.map((item) =>
          item.id === editingId ? { ...item, ...howze, hzend: hzendValue } : item
        )
      );
    } else {
      const newItem: Howze = { id: uuidv4(), ...howze, hzend: hzendValue };
      setAllHowzes((prev) => [...prev, newItem]);
    }

    setHowzeh({
      hzlevel: "",
      hzname: "",
      hzstart: "",
      hzend: "",
    });
    setHowzeStudying(false);
    setEditingId(null);
    setIsModalOpen(false);
  };

  // ---------- Edit / Delete helpers ----------
  const handleEditUniversity = (item: University) => {
    setFormModel("university");
    setUniversity({
      grade: item.grade,
      type: item.type,
      field: item.field,
      trend: item.trend,
      uniname: item.uniname,
      uniend: item.uniend === "در حال تحصیل" ? "" : item.uniend, // اگر "در حال تحصیل" بود فیلد خالی کن و uniStudying تیک بخوره
    });
    setUniStudying(item.uniend === "در حال تحصیل");
    setEditingId(item.id);
    setIsModalOpen(true);
  };

  const handleDeleteUniversity = (id: string) => {
    setAllUniversities((prev) => prev.filter((i) => i.id !== id));
  };

  const handleEditHowze = (item: Howze) => {
    setFormModel("howze");
    setHowzeh({
      hzlevel: item.hzlevel,
      hzname: item.hzname,
      hzstart: item.hzstart,
      hzend: item.hzend === "در حال تحصیل" ? "" : item.hzend,
    });
    setHowzeStudying(item.hzend === "در حال تحصیل");
    setEditingId(item.id);
    setIsModalOpen(true);
  };

  const handleDeleteHowze = (id: string) => {
    setAllHowzes((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div>
      {allUniversities.length == 0 && allHowzes.length == 0 && (
        <div className="w-full border border-strokeColor rounded-md text-center text-[#32323280] mt-[30px] py-12">
          موردی وجود ندارد
        </div>
      )}

      {/* محل وارد کردن دیتا های ثبت شده */}
     

      {/* نمایش لیست دانشگاه‌ها */}
      {allUniversities.map((item) => (
        <div key={item.id} className="w-full border border-strokeColor rounded-md mt-[18px] py-3 px-6">
          <div className="w-full flex justify-between">
            <div>
              <div className="flex mb-1.5">
                <p>مقطع:</p>
                <p className="font-semibold mr-1">{item.grade}</p>
              </div>
              <div className="flex mb-1.5">
                <p>نام دانشگاه:</p>
                <p className="font-semibold mr-1">{item.uniname}</p>
              </div>
              <div className="flex mb-1.5">
                <p>رشته:</p>
                <p className="font-semibold mr-1">{item.field}</p>
              </div>
              <div className="flex mb-1.5">
                <p>گرایش:</p>
                <p className="font-semibold mr-1">{item.trend}</p>
              </div>
              <div className="flex mb-1.5">
                <p>سال فارغالتحصیلی:</p>
                <p className="font-semibold mr-1">{item.uniend}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div
                className="border border-strokeColor h-fit p-1.5 rounded-2xl cursor-pointer"
                onClick={() => handleDeleteUniversity(item.id)}
              >
                <Image src="/images/icons/trash.svg" width={24} height={24} alt="حذف" />
              </div>
              <div
                className="border border-strokeColor h-fit p-1.5 rounded-2xl cursor-pointer"
                onClick={() => handleEditUniversity(item)}
              >
                <Image src="/images/icons/edit.svg" width={24} height={24} alt="ویرایش" />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* نمایش لیست حوزه ها */}
      {allHowzes.map((item) => (
        <div key={item.id} className="w-full border border-strokeColor rounded-md mt-[18px] py-3 px-6">
          <div className="w-full flex justify-between">
            <div>
              <div className="flex mb-1.5">
                <p>سطح حوزه:</p>
                <p className="font-semibold mr-1">{item.hzlevel}</p>
              </div>
              <div className="flex mb-1.5">
                <p>نام حوزه:</p>
                <p className="font-semibold mr-1">{item.hzname}</p>
              </div>
              <div className="flex mb-1.5">
                <p>سال شروع:</p>
                <p className="font-semibold mr-1">{item.hzstart}</p>
              </div>
              <div className="flex mb-1.5">
                <p>سال اتمام:</p>
                <p className="font-semibold mr-1">{item.hzend}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div
                className="border border-strokeColor h-fit p-1.5 rounded-2xl cursor-pointer"
                onClick={() => handleDeleteHowze(item.id)}
              >
                <Image src="/images/icons/trash.svg" width={24} height={24} alt="حذف" />
              </div>
              <div
                className="border border-strokeColor h-fit p-1.5 rounded-2xl cursor-pointer"
                onClick={() => handleEditHowze(item)}
              >
                <Image src="/images/icons/edit.svg" width={24} height={24} alt="ویرایش" />
              </div>
            </div>
          </div>
        </div>
      ))}
 <div className="w-full flex justify-end mt-6">
        <div
          onClick={() => {
            setFormModel("university");
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
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className={`absolute inset-0 bg-white/30 backdrop-blur-[4px] transition-opacity duration-100 ${
              showModal ? "opacity-100" : "opacity-0"
            }`}
          ></div>

          <div
            className={`bg-white addBoxShadow p-6 rounded-md z-10 py-[30px] px-10 transform transition-all duration-500 ease-out ${
              showModal ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex">
              <div
                className={`flex gap-2 items-center mb-[30px] ${
                  editingId == null ? "pl-[450px]" : "pl-[590px]"
                } pr-[15px]`}
              >
                <div className="bg-primaryColor w-2.5 h-[5px] rounded-[5px] "></div>
                <p className="text-lg font-bold">
                  {editingId ? "ویرایش سوابق تحصیلی" : "افزودن سوابق تحصیلی"}
                </p>
              </div>

              {editingId == null && (
                <div className="cursor-pointer flex gap-[14px]">
                  <div className="flex flex-col items-center ">
                    <div
                      className={`border transition-all duration-300 flex justify-center items-center w-[120px] h-9 rounded-sm ${
                        formModel == "university" ? "bg-primaryColor text-white border-transparent" : " border-strokeColor"
                      }`}
                      onClick={() => setFormModel("university")}
                    >
                      دانشگاهی
                    </div>
                    <div
                      className={`rounded-b-sm w-[108px] h-[5px] bg-tertiaryColor transition-all duration-1000 ${
                        formModel == "university" ? "opacity-100" : "opacity-0"
                      } `}
                    ></div>
                  </div>

                  <div className="cursor-pointer flex flex-col items-center">
                    <div
                      className={`border transition-all duration-300 flex justify-center items-center w-[120px] h-9 rounded-sm ${
                        formModel == "howze" ? "bg-primaryColor text-white border-transparent" : "border-strokeColor"
                      }`}
                      onClick={() => setFormModel("howze")}
                    >
                      حوزوی
                    </div>
                    <div
                      className={`rounded-b-sm w-[108px] h-[5px] bg-tertiaryColor transition-all duration-300 ${
                        formModel == "howze" ? "opacity-100" : "opacity-0"
                      } `}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {formModel == "university" && (
              <form onSubmit={handleUniSubmit} className="w-full grid grid-cols-12 gap-x-11 gap-y-[20px]">
                {/* grade */}
                <div className="relative mt-3 col-span-6">
                  <select
                    name="grade"
                    id="grade-select"
                    value={university.grade}
                    onFocus={() => setGradeFocused(true)}
                    onBlur={() => setGradeFocused(false)}
                    onChange={changeEducationHandler}
                    className="outline-none focus:border-2 focus:border-primaryColor bg-[url('/images/icons/Select-down.svg')] bg-no-repeat bg-[length:1.5rem] bg-[position:left_0.75rem_center] appearance-none w-full border h-12 px-3 pt-3 border-strokeColor rounded-[8px]"
                  >
                    <option value=""></option>
                    <option value="دیپلم">دیپلم</option>
                    <option value="فوق دیپلم">فوق دیپلم</option>
                    <option value="کارشناسی">کارشناسی</option>
                    <option value="کارشناسی ارشد">کارشناسی ارشد</option>
                    <option value="دکتری">دکتری</option>
                  </select>

                  <label
                    htmlFor="grade-select"
                    className={` absolute px-1 block right-3 text-gray-700 bg-white mb-1 cursor-pointer transition-all duration-200 ${
                      gradeFocused || university.grade ? "translate-y-[-55px] text-[11px] text-primaryColor" : "-translate-y-8 text-[14px]"
                    }`}
                  >
                    مقطع
                  </label>
                </div>

                {/* نوع دانشگاه */}
                <div className="relative mt-3 col-span-6">
                  <select
                    name="type"
                    id="type-select"
                    value={university.type}
                    onFocus={() => setUniversityTypeFocused(true)}
                    onBlur={() => setUniversityTypeFocused(false)}
                    onChange={changeEducationHandler}
                    className="outline-none focus:border-2 focus:border-primaryColor bg-[url('/images/icons/Select-down.svg')] bg-no-repeat bg-[length:1.5rem] bg-[position:left_0.75rem_center] appearance-none w-full border h-12 px-3 pt-3 border-strokeColor rounded-[8px]"
                  >
                    <option value=""></option>
                    <option value="دولتی">دولتی</option>
                    <option value="غیرانتفاعی">غیرانتفاعی</option>
                    <option value="آزاد">آزاد</option>
                    <option value="پیام نور">پیام نور</option>
                  </select>

                  <label
                    htmlFor="type-select"
                    className={` absolute block px-1 right-3 text-gray-700 bg-white mb-1 cursor-pointer transition-all duration-200 ${
                      universityTypeFocused || university.type ? "translate-y-[-55px] text-[11px] text-primaryColor" : "-translate-y-8 text-[14px]"
                    }`}
                  >
                    نوع دانشگاه
                  </label>
                </div>

                {/* رشته */}
                <div className="relative pt-3 col-span-6">
                  <input
                    name="field"
                    id="field"
                    value={university.field}
                    onChange={changeEducationHandler}
                    onFocus={() => setFieldFocused(true)}
                    onBlur={() => setFieldFocused(false)}
                    className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                    type="text"
                  />
                  <label
                    htmlFor="field"
                    className={`absolute cursor-text right-[15px] bg-white px-1 transition-all duration-200 ${
                      fieldFocused || university.field ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor" : "translate-y-[14px] text-[14px] font-medium text-[#667085]"
                    }`}
                  >
                    رشته تحصیلی
                  </label>
                </div>

                {/* گرایش */}
                <div className="relative pt-3 col-span-6">
                  <input
                    name="trend"
                    id="trend"
                    value={university.trend}
                    onChange={changeEducationHandler}
                    onFocus={() => setTrendFocused(true)}
                    onBlur={() => setTrendFocused(false)}
                    className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                    type="text"
                  />
                  <label
                    htmlFor="trend"
                    className={`absolute cursor-text right-[15px] bg-white px-1 transition-all duration-200 ${
                      trendFocused || university.trend ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor" : "translate-y-[14px] text-[14px] font-medium text-[#667085]"
                    }`}
                  >
                    گرایش
                  </label>
                </div>

                {/* نام دانشگاه */}
                <div className="relative pt-3 col-span-6">
                  <input
                    name="uniname"
                    id="uniname"
                    value={university.uniname}
                    onChange={changeEducationHandler}
                    onFocus={() => setUniNameFocused(true)}
                    onBlur={() => setUniNameFocused(false)}
                    className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                    type="text"
                  />
                  <label
                    htmlFor="uniname"
                    className={`absolute cursor-text right-[15px] bg-white px-1 transition-all duration-200 ${
                      uniNameFocused || university.uniname ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor" : "translate-y-[14px] text-[14px] font-medium text-[#667085]"
                    }`}
                  >
                    نام دانشگاه
                  </label>
                </div>

                {/* سال فارغ‌التحصیلی یا تیک در حال تحصیل */}
                <div className="col-span-6 flex items-center justify-between">
                  {/* اگر uniStudying === false نمایش input سال */}
                  {!uniStudying ? (
                    <div className="relative pt-3 w-2/3 ">
                      <input
                        name="uniend"
                        id="uniend"
                        value={university.uniend}
                        onChange={changeEducationHandler}
                        onFocus={() => setUniEndFocused(true)}
                        onBlur={() => setUniEndFocused(false)}
                        className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                        type="text"
                      />
                      <label
                        htmlFor="uniend"
                        className={`absolute cursor-text right-[15px] bg-white px-1 transition-all duration-200 ${
                          uniEndFocused || university.uniend ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor" : "translate-y-[14px] text-[14px] font-medium text-[#667085]"
                        }`}
                      >
                        سال فارغالتحصیلی
                      </label>
                    </div>
                  ) : (
                    <div className="w-2/3"></div>
                  )}

                  <div className="flex flex-col items-center gap-1.5 ">
                    <input
                      className="w-[20px] h-[20px]"
                      type="checkbox"
                      name="studying"
                      id="studying"
                      checked={uniStudying}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setUniStudying(checked);
                        if (checked) {
                          // اگر تیک زده شد مقدار uniend به "در حال تحصیل" تغییر کند (اما در state نمایشی خالی بمونه)
                          setUniversity((prev) => ({ ...prev, uniend: "" }));
                        } else {
                          // اگر تیک برداشته شد مقدار uniend را خالی می‌گذاریم تا کاربر وارد کند
                          setUniversity((prev) => ({ ...prev, uniend: "" }));
                        }
                      }}
                    />
                    <label className=" block" htmlFor="studying">
                      درحال تحصیل
                    </label>
                  </div>
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
            )}

            {formModel == "howze" && (
              <form onSubmit={handleHowzeSubmit} className="w-full grid grid-cols-12 gap-x-11 gap-y-[20px]">
                <div className="relative pt-3 col-span-6">
                  <input
                    name="hzlevel"
                    id="hzlevel"
                    value={howze.hzlevel}
                    onChange={changeHowzeHandler}
                    onFocus={() => setHzlevelFocused(true)}
                    onBlur={() => setHzlevelFocused(false)}
                    className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                    type="text"
                  />
                  <label htmlFor="hzlevel" className={`absolute cursor-text right-[15px] bg-white px-1 transition-all duration-200 ${hzlevelFocused || howze.hzlevel ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor" : "translate-y-[14px] text-[14px] font-medium text-[#667085]"}`}>
                    سطح حوزه
                  </label>
                </div>

                <div className="relative pt-3 col-span-6">
                  <input
                    name="hzname"
                    id="hzname"
                    value={howze.hzname}
                    onChange={changeHowzeHandler}
                    onFocus={() => setHznameFocused(true)}
                    onBlur={() => setHznameFocused(false)}
                    className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                    type="text"
                  />
                  <label htmlFor="hzname" className={`absolute cursor-text right-[15px] bg-white px-1 transition-all duration-200 ${hznameFocused || howze.hzname ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor" : "translate-y-[14px] text-[14px] font-medium text-[#667085]"}`}>
                    نام حوزه
                  </label>
                </div>

                <div className="relative pt-3 col-span-6">
                  <input
                    name="hzstart"
                    id="hzstart"
                    value={howze.hzstart}
                    onChange={changeHowzeHandler}
                    onFocus={() => setHzstartFocused(true)}
                    onBlur={() => setHzstartFocused(false)}
                    className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                    type="text"
                  />
                  <label htmlFor="hzstart" className={`absolute cursor-text right-[15px] bg-white px-1 transition-all duration-200 ${hzstartFocused || howze.hzstart ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor" : "translate-y-[14px] text-[14px] font-medium text-[#667085]"}`}>
                    سال شروع
                  </label>
                </div>

                <div className="col-span-6 flex items-center justify-between">
                  {!howzeStudying ? (
                    <div className="relative pt-3 w-2/3 ">
                      <input
                        name="hzend"
                        id="hzend"
                        value={howze.hzend}
                        onChange={changeHowzeHandler}
                        onFocus={() => setHzendFocused(true)}
                        onBlur={() => setHzendFocused(false)}
                        className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                        type="text"
                      />
                      <label htmlFor="hzend" className={`absolute cursor-text right-[15px] bg-white px-1 transition-all duration-200 ${hzendFocused || howze.hzend ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor" : "translate-y-[14px] text-[14px] font-medium text-[#667085]"}`}>
                        سال اتمام
                      </label>
                    </div>
                  ) : (
                    <div className="w-2/3"></div>
  )}

                  <div className="flex flex-col items-center gap-1.5 ">
                    <input
                      className="w-[20px] h-[20px]"
                      type="checkbox"
                      name="studying_howze"
                      id="studying_howze"
                      checked={howzeStudying}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setHowzeStudying(checked);
                        if (checked) {
                          setHowzeh((prev) => ({ ...prev, hzend: "" }));
                        } else {
                          setHowzeh((prev) => ({ ...prev, hzend: "" }));
                        }
                      }}
                    />
                    <label className=" block" htmlFor="studying_howze">
                      در حال تحصیل
                    </label>
                  </div>
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
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Education;
