import React, { useState, type JSX } from 'react'
import LayoutContainer from '../../../components/dashboard_layout/LayoutContainer'
import TaskCard from '../../../components/taskCard/TaskCard'
import TaskPagination from '../../../components/shared/TaskPagination/TaskPagination';
import AppText from '../../../components/shared/Texts/AppText';
import ConfirmationPopup from '../../../components/shared/Modals/ConfirmationPopup';

export default function Tasks(): JSX.Element {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [deleteConfirmModalShow, setDeleteConfirmModalShow] = useState(false)

  const handlePageChange = (value: any) => {
    setPage(value);
  };

  const handlePerPageChange = (event: { target: { value: any; }; }) => {
    setPerPage(Number(event.target.value));
    setPage(1); 
  };

  return (
    <LayoutContainer>
      <div className="h-screen bg-gray-100 p-4 overflow-x-auto">
            <AppText
            type="title"
            text='Manage Your Tasks'
            otherStyle='mb-4 text-black text-center my-4'
            />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {[1,2,3,4,5,6,7,].map((item: any) => (
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
              onDelete={() => setDeleteConfirmModalShow(true)}
              onEdit={() => {}}
              onView={() => {}}
            />
          ))}
        </div>
          <div className="flex flex-row justify-center my-4 ">
              <TaskPagination 
              perPage={perPage}
              handlePerPageChange={handlePerPageChange}
              handlePageChange={handlePageChange}
              totalPage={10} />
        </div>
      <ConfirmationPopup 
      open={deleteConfirmModalShow} setOpen={setDeleteConfirmModalShow}
      note={"Are you sure you want to delete this task?"}
      confirmHandler={() => setDeleteConfirmModalShow(false)}
      // loading={isLoading}
      />
      </div>

    </LayoutContainer>
  )
}