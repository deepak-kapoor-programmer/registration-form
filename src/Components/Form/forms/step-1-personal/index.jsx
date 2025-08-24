import { useFormik } from "formik";
// import { Validate } from "../../ValidationYup";
import { useDispatch, useSelector } from "react-redux";

import { setPersonal, setStep } from "../../../../redux/formSlice";
import * as Yup from "Yup"
export default function Personal() {
    const dispatch = useDispatch();
    const PersonalData = useSelector((state) => state.form.personalInfo);
    console.log("data is" + PersonalData)

    const formik = useFormik({
        initialValues: {
            fname: PersonalData.fname ? PersonalData.fname : "",
            lname: PersonalData.lname ? PersonalData.lname : "",
            email: PersonalData.email ? PersonalData.email : "",
            ph: PersonalData.ph ? PersonalData.ph : "",
            dob: PersonalData.dob ? PersonalData.dob : "",
            gender: PersonalData.gender ? PersonalData.gender : "",
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            fname: Yup.string()
                .required("Please Enter firstname")
                .min(2, "Too Short a username"),
            lname: Yup.string()
                .required("Please Enter Lastname"),
            email: Yup.string()
                .required("Please enter a email")
                .email("Enter a valid email"),
            ph: Yup.string()
                .matches(/^[0-9]{10}$/, "Please Enter Phone number")
                .required("Phone number is required"),
            dob: Yup.date()
                .required('Date of Birth is required')
                .max(new Date(), 'Date of Birth cannot be in the future'),

            gender: Yup.string()
                .required('Gender is required'),
        }),
        onSubmit: (value) => {
            dispatch(setPersonal(value));
            dispatch(setStep(2));
            console.log(value)
        }
    })
    return (

        <>
            <h1>Personal information</h1>
            <form onSubmit={formik.handleSubmit} >
                <label htmlFor="fname" >First name : </label>
                <input type="text" name="fname" value={formik.values.fname} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                <span >{formik.touched.fname && formik.errors.fname}</span>
                <br />
                <label htmlFor="lname" >Last name : </label>
                <input type="text" name="lname" value={formik.values.lname} onBlur={formik.handleBlur} onChange={formik.handleChange} /><span >{formik.touched.lname && formik.errors.lname}</span><br />
                <label htmlFor="email" >Email Address: </label>
                <input type="email" name="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} /><span >{formik.touched.email && formik.errors.email}</span><br />
                <label htmlFor="ph" >Phone number: </label>
                <input type="number" name="ph" value={formik.values.ph} onBlur={formik.handleBlur} onChange={formik.handleChange} /><span >{formik.touched.ph && formik.errors.ph}</span><br />
                <label htmlFor="dob" >Date Of Birth : </label>
                <input type="date" name="dob" value={formik.values.dob} onBlur={formik.handleBlur} onChange={formik.handleChange} /><span >{formik.touched.dob && formik.errors.dob}</span><br />
                <label>Gender:  </label>
                <div className="gender-group">
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formik.values.gender === "male"}
                            onChange={formik.handleChange}
                        /> Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formik.values.gender === "female"}
                            onChange={formik.handleChange}
                        /> Female
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="other"
                            checked={formik.values.gender === "other"}
                            onChange={formik.handleChange}
                        /> Other
                    </label>
                </div>

                {/* Error message aligned below all options */}
                <div className="gender-error">
                    {formik.touched.gender && formik.errors.gender}
                </div>
                <br />
                {/* <button type="submit" disabled={!formik.isValid}> Next</button> */}
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!formik.isValid}
                >
                    Next
                </button>

            </form>
        </>
    )
}