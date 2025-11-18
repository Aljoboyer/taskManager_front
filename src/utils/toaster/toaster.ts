import toast from "react-hot-toast";

export const errorToast = (msg: string = "Something went wrong please try again!") => {
  toast.error(msg);
};

export const successToast = (msg: string = "Success") => {
  toast.success(msg);
};
