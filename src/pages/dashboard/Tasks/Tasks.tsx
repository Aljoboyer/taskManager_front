import React, { type JSX } from 'react'
import LayoutContainer from '../../../components/dashboard_layout/LayoutContainer'
import TaskCard from '../../../components/taskCard/TaskCard'

export default function Tasks(): JSX.Element {

  return (
    <LayoutContainer>
      <div className="h-screen bg-gray-100 p-4 overflow-x-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {[1,2,3,4,5,6,7,8,9,11,22,33,43,223,45].map((item: any) => (
            <TaskCard
              key={item}
              title="Demo Task"
              description="Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. 
              Lorem ipsum dolor sit amet.
              
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."
              status="Completed"
              priority="low"
              created_at={new Date().toISOString()}
              onDelete={() => {}}
              onEdit={() => {}}
              onView={() => {}}
            />
          ))}
        </div>
      </div>

    </LayoutContainer>
  )
}