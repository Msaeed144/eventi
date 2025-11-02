"use client";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
type FormState = {
  title: string;
  status: string;
  seryalNumber: string;
  year: string;
  description: string;
  bonyadHistory: string; // "true" | "false" | ""
  activityReport: string;
  file: File | null;
};
type InventionTypeLocal = FormState & { id: string };
const Inventions: React.FC = () => {
  const [invention, setInvention] = useState<FormState>({
    title: "",
    status: "",
    seryalNumber: "",
    year: "",
    description: "",
    bonyadHistory: "",
    activityReport: "",
    file: null,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allInvention, setAllInvention] = useState<InventionTypeLocal[]>([]);
  const [fileUrls, setFileUrls] = useState<Record<string, string>>({});

  const [titleFocused, setTitleFocused] = useState(false);
  const [statusFocused, setStatusFocused] = useState(false);
  const [seryalNumberFocused, setseryalNumberFocused] = useState(false);
  const [yearFocused, setYearFocused] = useState(false);
  const [historyFocused, setHistoryFocused] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("blurred");
      requestAnimationFrame(() => setShowModal(true));
    } else {
      setShowModal(false);
      document.body.classList.remove("blurred");
    }
  }, [isModalOpen]);

  useEffect(() => {
    return () => {
      Object.values(fileUrls).forEach((u) => URL.revokeObjectURL(u));
    };
  }, [fileUrls]);

  const clearForm = () => {
    setInvention({
      title: "",
      status: "",
      seryalNumber: "",
      year: "",
      description: "",
      bonyadHistory: "",
      activityReport: "",
      file: null,
    });
    setTitleFocused(false);
    setStatusFocused(false);
    setseryalNumberFocused(false);
    setYearFocused(false);
    setHistoryFocused(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setIsModalOpen(false);
      setEditingId(null);
      clearForm();
    }, 300);
  };

  // type-safe change handler: bonyadHistory is stored as a string
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "bonyadHistory") {
      setInvention((prev) => ({ ...prev, bonyadHistory: value }));
      return;
    }

    if (name === "title") {
      setInvention((prev) => ({ ...prev, title: value }));
      return;
    }
    if (name === "status") {
      setInvention((prev) => ({ ...prev, status: value }));
      return;
    }
    if (name === "seryalNumber") {
      setInvention((prev) => ({ ...prev, seryalNumber: value }));
      return;
    }
    if (name === "year") {
      setInvention((prev) => ({ ...prev, year: value }));
      return;
    }
    if (name === "description") {
      setInvention((prev) => ({ ...prev, description: value }));
      return;
    }
    if (name === "activityReport") {
      setInvention((prev) => ({ ...prev, activityReport: value }));
      return;
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setInvention((prev) => ({ ...prev, file }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editingId) {
      setAllInvention((prev) =>
        prev.map((it) => {
          if (it.id === editingId) {
            // revoke old url if file replaced
            if (it.file && invention.file && it.file.name !== invention.file.name) {
              const oldUrl = fileUrls[it.id];
              if (oldUrl) {
                URL.revokeObjectURL(oldUrl);
                setFileUrls((prevUrls) => {
                  const copy = { ...prevUrls };
                  delete copy[it.id];
                  return copy;
                });
              }
            }
            const updated: InventionTypeLocal = { ...it, ...invention };
            if (updated.file) {
              const url = URL.createObjectURL(updated.file);
              setFileUrls((prev) => ({ ...prev, [it.id]: url }));
            }
            return updated;
          }
          return it;
        })
      );
    } else {
      const newItem: InventionTypeLocal = { id: uuidv4(), ...invention };
      setAllInvention((prev) => [...prev, newItem]);
      if (newItem.file) {
        const url = URL.createObjectURL(newItem.file);
        setFileUrls((prev) => ({ ...prev, [newItem.id]: url }));
      }
    }

    setEditingId(null);
    clearForm();
    closeModal();
  };

  const handleEdit = (item: InventionTypeLocal) => {
    setInvention({
      title: item.title ?? "",
      status: item.status ?? "",
      seryalNumber: item.seryalNumber ?? "",
      year: item.year ?? "",
      description: item.description ?? "",
      bonyadHistory: item.bonyadHistory ?? "",
      activityReport: item.activityReport ?? "",
      file: item.file ?? null,
    });
    setEditingId(item.id);
    requestAnimationFrame(() => {
      setIsModalOpen(true);
      setShowModal(true);
    });
  };

  const handleDelete = (id: string) => {
    setAllInvention((prev) => prev.filter((it) => it.id !== id));
    if (fileUrls[id]) {
      URL.revokeObjectURL(fileUrls[id]);
      setFileUrls((prev) => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    }
  };

  const getFileUrl = (id: string) => fileUrls[id];

  return (
    <div>
      {allInvention.length === 0 ? (
        <div className="w-full border border-strokeColor rounded-md text-center text-[#32323280] mt-[30px] py-12">
          موردی وجود ندارد
        </div>
      ) : (
        allInvention.map((item) => (
          <div key={item.id} className="w-full border border-strokeColor rounded-md mt-[30px] py-3 px-6">
            <div className="w-full flex justify-between">
              <div>
                <div className="flex mb-1.5">
                  <p>عنوان:</p>
                  <p className="font-semibold mr-1">{item.title}</p>
                </div>
                <div className="flex mb-1.5">
                  <p>وضعیت:</p>
                  <p className="font-semibold mr-1">{item.status}</p>
                </div>
                <div className="flex mb-1.5">
                  <p>شماره سریال :</p>
                  <p className="font-semibold mr-1">{item.seryalNumber}</p>
                </div>
                <div className="flex mb-1.5">
                  <p>سال ثبت :</p>
                  <p className="font-semibold mr-1">{item.year}</p>
                </div>
                <div className="flex mb-1.5">
                  <p>سابقه همکاری با بنیاد:</p>
                  <p className="font-semibold mr-1">{item.bonyadHistory === "true" ? "بله" : "خیر"}</p>
                </div>
                <div className="flex mb-1.5">
                  <p>لینک فایل:</p>
                  <p className="font-semibold mr-1">
                    {item.file ? (
                      <a href={getFileUrl(item.id)} download={item.file.name} className="underline">
                        دانلود {item.file.name}
                      </a>
                    ) : (
                      "—"
                    )}
                  </p>
                </div>
                <div className="flex mb-1.5">
                  <p>شرح فعالیت:</p>
                  <p className="font-semibold mr-1">{item.description}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button type="button" onClick={() => handleDelete(item.id)} className="border border-strokeColor h-fit p-1.5 rounded-2xl">
                  <Image src="/images/icons/trash.svg" width={20} height={20} alt="حذف" />
                </button>

                <button type="button" onClick={() => handleEdit(item)} className="border border-strokeColor h-fit p-1.5 rounded-2xl">
                  <Image src="/images/icons/edit.svg" width={20} height={20} alt="ویرایش" />
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      <div className="w-full flex justify-end mt-6">
        <div onClick={() => setIsModalOpen(true)} className="flex cursor-pointer gap-8 w-32 h-9 justify-center items-center rounded-sm border border-strokeColor bg-tertiaryColor">
          <p className="text-primaryColor">افزودن</p>
          <div className="bg-[#8f9fe4] p-[5px] rounded-full">
            <Image src="/images/icons/plus.svg" width={7.92} height={7.92} alt="اضافه کردن" />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className={`absolute inset-0 bg-white/30 backdrop-blur-[4px] transition-opacity duration-100 ${showModal ? "opacity-100" : "opacity-0"}`} />

          <div className={`bg-white addBoxShadow p-6 rounded-md z-10 py-[30px] px-10 transform transition-all duration-500 ease-out ${showModal ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="mb-[30px] pl-[591px] pr-[25px] py-4 bg-tertiaryColor rounded-sm">
              <p className="font-bold">{editingId ? "ویرایش اختراعات / بنیاد نخبگان" : "افزودن اختراعات / بنیاد نخبگان"}</p>
            </div>

            <form onSubmit={handleSubmit} className="w-full">
              <div className="rounded-md border border-dashed border-boxGrey">
                <input type="file" name="file" id="file" className="hidden" onChange={handleFileChange} />
                <label htmlFor="file" className=" cursor-pointer w-full bg-[#fafafa] block flex-col text-center justify-center items-center rounded-md ">
                  <div className="flex justify-center pt-7">
                    <Image src="/images/icons/upload-file.svg" width={60} height={60} alt="فایل را انتخاب کنید" />
                  </div>

                  <p className="mt-4 text-sm font-semibold">برای بارگذاری عکس یا فایل کلیک کنید</p>
                  <div className="flex gap-2 justify-center mt-3 pb-7">
                    <p className="text-xs">حداکثر حجم قابل قبول:</p>
                    <p className="text-xs font-semibold">40 مگابایت</p>
                  </div>

                  {invention.file && <div className="mt-2 text-xs">فایل انتخاب‌شده: {invention.file.name}</div>}
                </label>
              </div>

              <div className="grid grid-cols-12 gap-x-11 gap-y-[30px] mt-6">
                <div className="relative pt-3 col-span-6">
                  <input onFocus={() => setTitleFocused(true)} onBlur={() => setTitleFocused(false)} onChange={changeHandler} value={invention.title} className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor" type="text" name="title" id="title" />
                  <label htmlFor="title" className={`cursor-text absolute right-[15px] text-[#667085] bg-white px-1 transition-all duration-200 ${titleFocused || invention.title ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor" : "translate-y-[14px] text-[14px] font-medium"}`}>عنوان</label>
                </div>

                <div className="relative mt-3 col-span-6">
                  <select name="status" id="status-select" value={invention.status} onFocus={() => setStatusFocused(true)} onBlur={() => setStatusFocused(false)} onChange={changeHandler} className="outline-none focus:border-2 focus:border-primaryColor bg-[url('/images/icons/Select-down.svg')] bg-no-repeat bg-[length:1.5rem] bg-[position:left_0.75rem_center] appearance-none w-full border h-12 px-3 pt-3 border-strokeColor rounded-[8px]">
                    <option value=""></option>
                    <option value="دولتی">دولتی</option>
                    <option value="غیرانتفاعی">غیرانتفاعی</option>
                    <option value="آزاد">آزاد</option>
                    <option value="پیام نور">پیام نور</option>
                  </select>
                  <label htmlFor="status-select" className={` px-1 absolute block right-3 text-gray-700 bg-white mb-1 cursor-pointer transition-all duration-200 ${statusFocused || invention.status ? "translate-y-[-55px] text-[11px] text-primaryColor" : "-translate-y-8 text-[14px]"}`}>وضعیت</label>
                </div>

                <div className="relative pt-3 col-span-6">
                  <input onFocus={() => setseryalNumberFocused(true)} onBlur={() => setseryalNumberFocused(false)} onChange={changeHandler} value={invention.seryalNumber} className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor" type="text" name="seryalNumber" id="seryalNumber" />
                  <label htmlFor="seryalNumber" className={`cursor-text absolute right-[15px] text-[#667085] bg-white px-1 transition-all duration-200 ${seryalNumberFocused || invention.seryalNumber ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor" : "translate-y-[14px] text-[14px] font-medium"}`}>شماره ثبت</label>
                </div>

                <div className="relative pt-3 col-span-6">
                  <input onFocus={() => setYearFocused(true)} onBlur={() => setYearFocused(false)} onChange={changeHandler} value={invention.year} className="w-full focus:border-2 focus:border-primaryColor outline-none noSpinner p-4 rounded-[8px] h-12 border border-strokeColor" type="text" name="year" id="year" />
                  <label htmlFor="year" className={`cursor-text absolute right-[15px] text-[#667085] bg-white px-1 transition-all duration-200 ${yearFocused || invention.year ? "translate-y-[-10px] text-[11px] font-bold text-primaryColor" : "translate-y-[14px] text-[14px] font-medium"}`}>سال ثبت</label>
                </div>

                <div className="relative pt-3 col-span-12">
                  <textarea name="description" onChange={changeHandler} value={invention.description} id="description" className="p-2.5 w-full border border-strokeColor rounded-[8px] h-[72px]" />
                  <label className="text-[#667085] absolute right-4 top-1 bg-white px-2 text-[11px] font-bold" htmlFor="description">توضیحات</label>
                </div>
              </div>

              <div className="my-[10px] pl-[591px] pr-[25px] py-4 bg-tertiaryColor rounded-sm"><p className="font-bold">بنیاد نخبگان</p></div>
              <div className="grid grid-cols-12 gap-x-11 gap-y-[30px] mt-6">
                <div className="relative mt-3 col-span-6">
                  <select name="bonyadHistory" id="history-status" value={invention.bonyadHistory} onFocus={() => setHistoryFocused(true)} onBlur={() => setHistoryFocused(false)} onChange={changeHandler} className="outline-none focus:border-2 focus:border-primaryColor bg-[url('/images/icons/Select-down.svg')] bg-no-repeat bg-[length:1.5rem] bg-[position:left_0.75rem_center] appearance-none w-full border h-12 px-3 pt-3 border-strokeColor rounded-[8px]">
                    <option value="">انتخاب</option>
                    <option value="false">خیر</option>
                    <option value="true">بله</option>
                  </select>
                  <label htmlFor="history-status" className={`text-[#667085] absolute block right-3 bg-white mb-1 cursor-pointer transition-all duration-200 px-1 ${historyFocused || invention.bonyadHistory ? "translate-y-[-55px] text-[11px] text-primaryColor" : "-translate-y-[35px] text-[15px]"}`}>سابقه همکاری با بنیاد نخبگان</label>
                </div>

                <div className="relative pt-3 col-span-6">
                  <textarea name="activityReport" onChange={changeHandler} value={invention.activityReport} id="activityReport" className="p-2.5 w-full border border-strokeColor rounded-[8px] h-[140px]" />
                  <label className="absolute right-4 top-1 bg-white px-2 text-[11px] font-bold" htmlFor="activityReport">شرح فعالیت ها</label>
                </div>
              </div>

              <div className="w-full flex gap-2.5 justify-end mt-6 col-span-12">
                <button type="button" onClick={closeModal} className="cursor-pointer w-40 rounded-sm h-12 border font-semibold border-strokeColor flex items-center justify-center">انصراف</button>
                <button type="submit" className="cursor-pointer w-40 h-12 flex font-semibold items-center justify-center bg-primaryColor text-white rounded-sm">ثبت اطلاعات</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inventions;
