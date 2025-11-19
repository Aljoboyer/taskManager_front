import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { errorToast, successToast } from "../../utils/toaster/toaster";
import { authFormFields } from "./authFormConfigs";
import AppText from "../../components/shared/Texts/AppText";
import { SiTask } from "react-icons/si";
import { COLORS } from "../../theme/colors";
import AllInputs from "../../components/shared/inputs/AllInput";
import { authErrorchecker } from "../../helperFunc/authErrorChecker";
import { Buttons } from "../../components/shared/buttons/Buttons";
import { useSignUpMutation } from "../../redux/features/authApi";

export default function Register() {
  const [useSignupHandler, { }] = useSignUpMutation();
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true)
    let response: any = await useSignupHandler(data);
    
    console.log('response ===>', response)

    if(response?.data?.token){
   
      localStorage.setItem('watchify_user', JSON.stringify(response.data))
      setLoading(false)
      navigate('/')
      successToast('Successfully Account Created!')
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
            text="CREATE YOUR ACCOUNT"
            otherStyle='mb-4 text-maroon'
            />
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
              {
                authFormFields.map((fieldItem: any) => (
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
            type='submit' title="Register" 
            bgColor={COLORS.maroon} textColor="white" 
            other_style={{fontWeight: '700', marginTop: '10px'}} />
        </form>

            <p className="text-p text-center mt-4">
              Already have an account?{" "}
              <span onClick={() => navigate('/')} className="font-bold text-basecolor cursor-pointer">Log In</span>
            </p>
    </div>
    </div>

  );
}
