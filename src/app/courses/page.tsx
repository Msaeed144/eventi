import CoursesPagination from '@/components/CoursesPagination'
import FilterSection from '@/components/FilterSection'
import React from 'react'

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