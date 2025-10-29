'use client'
import { BooksType } from '@/type';
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import Image from 'next/image';
function Books() {
  const [ book , setBook ] = useState({
    name:"",
    subject:"",
    status:"",
    year:"",
    role:"",
    shabek:"",
    description:"", 
  })
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allBooks, setAllBooks] = useState<BooksType[]>([]);
  const [nameFocused, setNameFocused] = useState(false);
  const [subjectFocused, setSubjectFocused] = useState(false);
  const [statusFocused, setStatusFocused] = useState(false);
  const [yearFocused, setYearFocused] = useState(false);
  const [roleFocused, setRoleFocused] = useState(false);
  const [shabekFocused, setShabekFocused] = useState(false);
  const [showModal, setShowModal] = useState(false); // برای انیمیشن
  const [editingId, setEditingId] = useState<string | null>(null);

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
    setBook({
      name:"",
      subject:"",
      status:"",
      year:"",
      role:"",
      shabek:"",
      description:"", 
    });

    setNameFocused(false);
    setSubjectFocused(false);
    setStatusFocused(false);
    setYearFocused(false);
    setRoleFocused(false);
    setShabekFocused(false)

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
    setBook((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingId) {
      setAllBooks((prev) =>
        prev.map((it) => (it.id === editingId ? { ...it, ...book } : it))
      );
    } else {
      const newItem: BooksType = { id: uuidv4(), ...book };
      setAllBooks((prev) => [...prev, newItem]);
    }

    // پاکسازی و بستن مودال
    setEditingId(null);
    clearForm();
    closeModal();
  };
  const handleEdit = (item: BooksType) => {
    setBook({
      name:item.name || "",
      subject:item.subject || "",
      status:item.status,
      year:item.year,
      role:item.role,
      shabek:item.shabek,
      description:item.description, 

    });
    setEditingId(item.id);
    // باز کردن مودال به صورت ایمن
    requestAnimationFrame(() => {
      setIsModalOpen(true);
      setShowModal(true);
    });
  };
  const handleDelete = (id: string) => {
    setAllBooks((prev) => prev.filter((it) => it.id !== id));
  };
  return (
    <div>
      {allBooks.length === 0 ? (
        <div className="w-full border border-strokeColor rounded-md text-center text-[#32323280] mt-[30px] py-12">
          موردی وجود ندارد
        </div>
      ) : (
        allBooks.map((item) => (
          <div
            key={item.id}
            className="w-full border border-strokeColor rounded-md mt-[30px] py-3 px-6"
          >
            <div className="w-full flex justify-between">
              <div>
                <div className="flex mb-1.5">
                  <p>نام کتاب :</p>
                  <p className="font-semibold mr-1">{item.name}</p>
                </div>
                <div className="flex mb-1.5">
                  <p> حوزه موضوعی:</p>
                  <p className="font-semibold mr-1">{item.subject}</p>
                </div>
                <div className="flex mb-1.5">
                  <p> سال نگارش:</p>
                  <p className="font-semibold mr-1">{item.year}</p>
                </div>
                <div className="flex mb-1.5">
                  <p> نقش:</p>
                  <p className="font-semibold mr-1">{item.role}</p>
                </div>
                 <div className="flex mb-1.5">
                  <p> شابک:</p>
                  <p className="font-semibold mr-1">{item.shabek}</p>
                </div>
                 <div className="flex mb-1.5">
                  <p> وضعیت انتشار:</p>
                  <p className="font-semibold mr-1">{item.status}</p>
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
                {editingId ? "ویرایش المپیاد" : "افزودن المپیاد"}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full grid grid-cols-12 gap-x-11 gap-y-[30px]"
            >
              <div className="relative pt-3 col-span-6 ">
                <input
                  onFocus={() => setNameFocused(true)}
                  onBlur={() => setNameFocused(false)}
                  onChange={changeHandler}
                  value={book.name}
                  className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                  type="text"
                  name="name"
                  id="name"
                />
                <label
                  htmlFor="name"
                  className={`cursor-text absolute right-[15px] text-[#667085] bg-white px-1 transition-all duration-200 ${
                    nameFocused || book.name
                      ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                      : "translate-y-[14px] text-[14px] font-medium"
                  }`}
                >
                  نام کتاب
                </label>
              </div>
              <div className="relative mt-3 col-span-6">
                <select
                  name="subject"
                  id="grade-select"
                  value={book.subject}
                  onFocus={() => setSubjectFocused(true)}
                  onBlur={() => setSubjectFocused(false)}
                  onChange={changeHandler}
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
                  className={` absolute block right-3 text-gray-700 bg-white mb-1 cursor-pointer transition-all duration-200 ${
                    subjectFocused || book.subject
                      ? "translate-y-[-45px] text-[11px] text-primaryColor"
                      : "-translate-y-8 text-[14px]"
                  }`}
                >
                   حوزه موضوعی
                </label>
              </div>

              <div className="relative pt-3 col-span-6">
                <input
                  onFocus={() => setYearFocused(true)}
                  onBlur={() => setYearFocused(false)}
                  onChange={changeHandler}
                  value={book.year}
                  className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                  type="text"
                  name="year"
                  id="year"
                />
                <label
                  htmlFor="year"
                  className={`cursor-text absolute right-[15px] text-[#667085] bg-white px-1 transition-all duration-200 ${
                    yearFocused || book.year
                      ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                      : "translate-y-[14px] text-[14px] font-medium"
                  }`}
                >
                  سال نگارش
                </label>
              </div>
              <div className="relative pt-3 col-span-6">
                <input
                  onFocus={() => setRoleFocused(true)}
                  onBlur={() => setRoleFocused(false)}
                  onChange={changeHandler}
                  value={book.role}
                  className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                  type="text"
                  name="role"
                  id="role"
                />
                <label
                  htmlFor="role"
                  className={`cursor-text absolute right-[15px] text-[#667085] bg-white px-1 transition-all duration-200 ${
                    roleFocused || book.role
                      ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                      : "translate-y-[14px] text-[14px] font-medium"
                  }`}
                >
                  نقش
                </label>
              </div>
              <div className="relative pt-3 col-span-6">
                <input
                  onFocus={() => setShabekFocused(true)}
                  onBlur={() => setShabekFocused(false)}
                  onChange={changeHandler}
                  value={book.shabek}
                  className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                  type="text"
                  name="shabek"
                  id="shabek"
                />
                <label
                  htmlFor="shabek"
                  className={`cursor-text absolute right-[15px] text-[#667085] bg-white px-1 transition-all duration-200 ${
                    shabekFocused || book.shabek
                      ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                      : "translate-y-[14px] text-[14px] font-medium"
                  }`}
                >
                  شابک
                </label>
              </div>
               <div className="relative pt-3 col-span-6">
                <input
                  onFocus={() => setStatusFocused(true)}
                  onBlur={() => setStatusFocused(false)}
                  onChange={changeHandler}
                  value={book.status}
                  className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor"
                  type="text"
                  name="status"
                  id="status"
                />
                <label
                  htmlFor="status"
                  className={`cursor-text absolute right-[15px] text-[#667085] bg-white px-1 transition-all duration-200 ${
                    statusFocused || book.status
                      ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor"
                      : "translate-y-[14px] text-[14px] font-medium"
                  }`}
                >
                  وضعیت انتشار
                </label>
              </div>
              <div className="relative pt-3 col-span-12">
                <textarea
                  name="description"
                  onChange={changeHandler}
                  value={book.description}
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
                <button
                  type="button"
                  onClick={closeModal}
                  className="cursor-pointer w-40 rounded-sm h-12 border font-semibold border-strokeColor flex items-center justify-center"
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
  );
}

export default Books;
