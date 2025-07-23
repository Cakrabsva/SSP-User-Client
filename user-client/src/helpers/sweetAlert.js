'use stict'
import Swal from 'sweetalert2';

class SweetAlert {
    static successToast (data) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: data.message
        });
    }

    static errorAlert (err) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response?.data?.message,
            confirmButtonText: 'Oke',
        })
    }
}

export default SweetAlert