import CoursesPagination from '@/components/CoursesPagination'
import FilterSection from '@/components/FilterSection'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
  title:"همه ی دوره ها"
}
function Courses() {
  return (
    <div className=' container mx-auto mt-14'>
      <div className='flex mb-64'>
        <FilterSection />
        <CoursesPagination />
      </div>
    </div>
  )
}

export default Courses