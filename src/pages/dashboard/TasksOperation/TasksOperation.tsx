import React, { useState } from 'react'
import { Buttons } from '../../../components/shared/buttons/Buttons';
import { COLORS } from '../../../theme/colors';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import { taskFormFields } from './TaskFormConfig';
import AllInputs from '../../../components/shared/inputs/AllInput';
import LayoutContainer from '../../../components/dashboard_layout/LayoutContainer';
import AppText from '../../../components/shared/Texts/AppText';

const TasksOperation = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {

  }

  return (
    <LayoutContainer>
        <div className="h-screen bg-gray-100 p-4 overflow-x-auto">
          <form className="space-y-4 bg-white p-2 md:p-4 w-full md:w-1/2 mx-auto rounded-md" onSubmit={handleSubmit(onSubmit)} noValidate>
                <AppText
                type="title"
                text='Create New Task'
                otherStyle='mb-4 text-black text-center my-4'
                />
                {
                  taskFormFields?.map((fieldItem: any) => (
                    <Controller
                        key={fieldItem?.field_id}
                        name={fieldItem?.field_id}
                        control={control}
                        defaultValue=""
                        rules={{
                          ...fieldItem?.required
                        }}
                        render={({ field }) => (
                            <AllInputs
                            otherStyle={{marginTop: '14px'}}
                            label={fieldItem?.label} 
                            field={field}
                            field_id={fieldItem?.field_id}
                            errors={errors}
                            placeholder={fieldItem?.placeholder}
                            inputType={fieldItem?.inputType}
                            />
                        )}
                      />
                  ))
                }

              <Buttons
              isLoading={loading}
              type='submit' title="Add" 
              bgColor={COLORS.maroon} textColor="white" 
              other_style={{fontWeight: '700', marginTop: '10px'}} />
          </form>
      </div>
     </LayoutContainer>
  )
}

export default TasksOperation;
