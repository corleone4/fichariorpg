import React from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Toast({text, pos = "top-right"}) {
    const showToastMessage = () => {
        toast.success(text, {
            position: pos,
            theme:"dark",
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            autoClose: 5000,
        });
    };

    return (
        <div onLoad={showToastMessage}>
          <ToastContainer />
        </div>
      );
}
