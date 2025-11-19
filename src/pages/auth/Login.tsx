import React, { useState, type JSX } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { errorToast, successToast } from "../../utils/toaster/toaster";
import { authFormFields } from "./authFormConfigs";
import AllInputs from "../../components/shared/inputs/AllInput";
import { COLORS } from "../../theme/colors";
import AppText from "../../components/shared/Texts/AppText";
import { authErrorchecker } from "../../helperFunc/authErrorChecker";
import { Buttons } from "../../components/shared/buttons/Buttons";
import { SiTask } from "react-icons/si";
import { useLogInMutation } from "../../redux/features/authApi";

export default function Login(): JSX.Element {
  const [useLoginHandler, { }] = useLogInMutation();
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const storagedata: any = JSON.stringify(data)
    localStorage.setItem("tasks_user", storagedata)
     navigate('/dashboard/tasks')
     return
    setLoading(true)
    let response: any = await useLoginHandler(data);
    
    if(response?.data?.token){
   
      localStorage.setItem('watchify_user', JSON.stringify(response.data))
      setLoading(false)
      successToast('Successfully LoggedIn!')
      navigate('/dashboard/task')
    }
    else if(response?.data?.message){
        setLoading(false)
        const checkedData: any = authErrorchecker(response);
  
        setError(checkedData?.field, {...checkedData?.typeObj});
    }
    else{
      setLoading(false)
      errorToast()
    }
  };

  return (
      <div className="w-full bg-gray-100 h-screen flex flex-row justify-center items-center px-2 lg:px-0">
        <div className="w-full md:w-1/2 mx-auto p-4 bg-white rounted-md">
          <div className="flex flex-col items-center">
            <SiTask color={COLORS.maroon} size={40}/>
            <AppText
            type="title"
            text="LOG IN TO YOUR ACCOUNT"
            otherStyle='mb-4 text-maroon'
            />
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
              {
                authFormFields.slice(1, 3)?.map((fieldItem: any) => (
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
                          fieldItem={fieldItem}
                          placeholder={fieldItem?.placeholder}
                          inputType={fieldItem?.inputType}
                          />
                      )}
                    />
                ))
              }

            <Buttons
            isLoading={loading}
            type='submit' title="Login" 
            bgColor={COLORS.maroon} textColor="white" 
            other_style={{fontWeight: '700', marginTop: '10px'}} />
        </form>

            <p className="text-p text-center mt-4">
              New to Horizon Task Manager ?{" "}
              <span onClick={() => navigate('/register')} className="font-bold text-basecolor cursor-pointer">Create Account</span>
            </p>
        </div>
      </div>
  );
}
