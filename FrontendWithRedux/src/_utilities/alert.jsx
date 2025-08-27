import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const alert = {
    success,error
}

function success(message){
    toast.success(message)
}

function error(message){
    toast.success(message)
}