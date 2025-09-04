import { SignupBody } from "@/lib/type";
import { useMutation } from "@tanstack/react-query";
import { toast } from 'react-toastify';
import { authApi } from "../lib/authApi";
import { useRouter } from "next/navigation";

type Props = {
  onSuccess : () => void
}
export const useRegister = ({onSuccess}:Props) => {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: {email:string,name:string,password:string}) => authApi.signup(data),
    onSuccess: () => {
      onSuccess()
    },
    onError: (error:any) => {
      toast.error( error?.response?.data?.message || "Registration Failed" );
    },
  });
};
