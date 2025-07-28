import { useDispatch } from "react-redux";
import "../index.css"
import { useState } from "react";
import { onEditProfile } from "../features/dispatch-function/profileSlices";
import { useNavigate } from "react-router-dom";
import MyDate from "../helpers/MyFunction";

export default function FormEditProfile (props) {

    const {first_name, last_name, born_date, gender, bio} = props.userData.Profile
    const [form, setForm] = useState({first_name, last_name, born_date, gender, bio});

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChangeForm = (e) => {
        const {name, value} = e.target
        setForm((prev)=>({...prev, [name]: value}))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(onEditProfile({form, navigate}))
    }

    return (
        <div className="justify-items-center">
            <form 
            action=""
            onSubmit={handleOnSubmit}>
                <div className="space-y-6">
                    <div className="flex space-x-2">
                        <div className="">
                            <label htmlFor="first_name" className="font-semibold ml-1">First Name</label> <br />
                            <input 
                                type="text" 
                                name="first_name" 
                                id="first_name"
                                value={form.first_name || ''}
                                onChange={handleChangeForm}
                                onKeyDown={(e) => {
                                    if (e.key === ' ') e.preventDefault();
                                }}
                                className="border border-gray-300 rounded-lg w-46 h-10 px-3"/>
                        </div>
                        <div>
                            <label htmlFor="last_name" className="font-semibold ml-1">Last Name</label> <br />
                            <input 
                                type="text" 
                                name="last_name" 
                                id="last_name"
                                value={form.last_name || ''}
                                onChange={handleChangeForm}
                                onKeyDown={(e) => {
                                    if (e.key === ' ') e.preventDefault();
                                }}
                                className="border border-gray-300 rounded-lg w-46 h-10 px-3"/>
                        </div>
                    
                    </div>
                    <div className="flex space-x-2">
                        <div>
                            <label htmlFor="born_date" className="font-semibold ml-1">Born Date</label> <br />
                            <input 
                                type="date" 
                                name="born_date" 
                                id="born_date"
                                value={form.born_date ? MyDate.formateDate(form.born_date) : ''}
                                onChange={handleChangeForm}
                                className="border border-gray-300 rounded-lg w-46 h-10 px-3"/>
                        </div>
                        <div>
                            <label htmlFor="gender" className="font-semibold ml-1">Gender</label> <br />
                            <select 
                                name="gender" 
                                id="gender"
                                value={form.gender || ''}
                                onChange={handleChangeForm}
                                className="border border-gray-300 rounded-lg w-46 h-10 px-3">
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                        </div>
                    </div>
                
                        <div>
                            <label htmlFor="bio" className="font-semibold ml-1">Bio</label> <br />
                            <textarea 
                                name="bio" 
                                id="bio"
                                wrap="soft"
                                value={form.bio || ''}
                                onChange={handleChangeForm}
                                className="border border-gray-300 rounded-lg w-full h-32 px-3 py-3 text-wrap"></textarea>
                        </div>
                    <div className="flex justify-end">
                        <button type="submit" className="rounded-full bg-yellow-300 hover:bg-yellow-400 cursor-pointer font-semibold py-3 px-8">Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}