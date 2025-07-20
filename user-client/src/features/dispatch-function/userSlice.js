import { createSlice } from "@reduxjs/toolkit";
import { sspApi } from "../../helpers/http-clients";
// import { fetchGlobalData } from "../global-data/globalData";
import Swal from 'sweetalert2';
const userSlice = createSlice ({
    name: "user-slice",
    initialState: {},
    reducers: {}
})

export const onRegister = (form) => {
    return async () => {
        try {
            const response = await sspApi.post('/user/register', form, {
                headers: {
                    "Content-Type": 'application/x-www-form-urlencoded'
                }
            })
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
                title: response.data.message
            });
            return response
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.response?.data?.message,
                confirmButtonText: 'Oke',
            })
        }
    }
}

export const onLogin = (form) => {
    return async () => {
        try {
           const loginData = await sspApi.post('/user/login', form, {
                headers: {
                    "Content-Type": 'application/x-www-form-urlencoded'
                }
            })
            const { token, id, first_name } = loginData.data;
            if (token && id && first_name) {
                localStorage.setItem('token', token);
                localStorage.setItem('id', id);
                localStorage.setItem('first_name', first_name);
            }
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
                title: loginData.data.message
            });
            return loginData
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.response?.data?.message,
                confirmButtonText: 'Oke',
            })
        }
    }
}

export const onUpdateEmail = (form) => {
    return async () => {
        try {
            const userId = localStorage.getItem("id")
            const token = localStorage.getItem('token')
            const updateStatus = await sspApi.post(`/user/${userId}/change-email`, form, {
                headers: {
                    "Content-Type": 'application/x-www-form-urlencoded',
                    Authorization: `Bearer ${token}`
                }
            })
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
                title: updateStatus.data.message
            });
            return updateStatus
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.response?.data?.message,
                confirmButtonText: 'Oke',
            })
        }
    }
}

export default userSlice.reducer