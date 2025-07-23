import { createSlice } from "@reduxjs/toolkit";
import { sspApi } from "../../helpers/http-clients";
import Swal from 'sweetalert2';
import { fetchGlobalData } from "../global-data/globalData";
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
    return async (dispacth) => {
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
            dispacth(fetchGlobalData)
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

export const onUpdatePassword = (form) => {
    return async () => {
        try {
            const userId = localStorage.getItem("id")
            const token = localStorage.getItem("token")
    
            const updateStatus = await sspApi.post(`/user/${userId}/change-password`, form, {
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

export const onUpdateUsername = (form) => {
    return async () => {
        try {
            const userId = localStorage.getItem("id")
            const token = localStorage.getItem("token")

            const updateStatus = await sspApi.post(`/user/${userId}/change-username`, form, {
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

export const onForgotPassword = (email) => {
    return async () => {
        try {
            const forgotPassData = await sspApi.post(`/user/forgot-password`, {email}, {
                headers: {
                    "Content-Type": 'application/x-www-form-urlencoded',
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
                title: forgotPassData.data.message
            });
            localStorage.setItem('id', forgotPassData.data.id);
            return forgotPassData
        } catch(err) {
            console.log(err)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.response?.data?.message,
                confirmButtonText: 'Oke',
            })
        }
    }
}

export const onResetPassword = (form) => {
    return async () => {
        try {
            const userId = localStorage.getItem("id")
            const updateStatus = await sspApi.post(`/user/${userId}/reset-password`, form, {
                headers: {
                    "Content-Type": 'application/x-www-form-urlencoded',
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
            localStorage.removeItem('id')
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