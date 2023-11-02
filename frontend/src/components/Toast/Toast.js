import { Slide,toast } from 'react-toastify'

export const Toast=(msg,type)=> {
  return (toast(msg,{
        position:"top-right",
        autoClose:3000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        type:type,
        transition:Slide,
        theme:"colored",

    })
  )
}

