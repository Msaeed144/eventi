import { exams } from '@/data'
import React from 'react'
import ExamCart from './ExamCart'

function ExamsPage() {
  return (
    <div className='grid grid-cols-12 gap-5'>
        {exams.map(exam=>(
            <ExamCart key={exam.enName} exam={exam}/>
        ))}
    </div>
  )
}

export default ExamsPage