// برای ایمپورت‌های ساید-افکت Swiper
declare module 'swiper/css';
declare module 'swiper/css/*';

// برای هر ایمپورت فایل CSS
declare module '*.css' {
  const content: string;
  export default content;
}
