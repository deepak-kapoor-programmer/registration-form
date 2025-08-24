import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup"

import { setaddress, setStep } from "../../../../../redux/formSlice";
export default function Address() {
    const dispatch = useDispatch();
    const Address = useSelector((state) => state.form.addressInfo);
    const formik = useFormik({
        initialValues: {
            street: Address.street ? Address.street : "",
            city: Address.city ? Address.city : "",
            state: Address.state ? Address.state : "",
            country: Address.country ? Address.country : "",
            pincode: Address.pincode ? Address.pincode : "",
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            street: Yup.string().required("Street Address is required"),
            city: Yup.string().required("City is required"),
            state: Yup.string().required("State is required"),
            country: Yup.string().required("Country is required"),
            pincode: Yup.string()
                .required("Pincode is required")
                .matches(/^[0-6]{6}$/, "Pincode must be exactly 6 digits")
        }),
        onSubmit: (values) => {
            dispatch(setaddress(values));
            dispatch(setStep(3));
            console.log(values);
        }
    })
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <h1>Address Details</h1>
                <label htmlFor="street">Street Address: </label>
                <input
                    type="text"
                    name="street"
                    value={formik.values.street}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                <span>{formik.touched.street && formik.errors.street}</span>
                <br />

                <label htmlFor="city">City: </label>
                <input
                    type="text"
                    name="city"
                    value={formik.values.city}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                <span>{formik.touched.city && formik.errors.city}</span>
                <br />

                <label htmlFor="state">State: </label>
                <input
                    type="text"
                    name="state"
                    value={formik.values.state}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                <span>{formik.touched.state && formik.errors.state}</span>
                <br />

                <label htmlFor="country">Country: </label>
                <select
                    name="country"
                    value={formik.values.country}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                >
                    <option value="">--Select Country--</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Other">Other</option>
                </select>
                <span>{formik.touched.country && formik.errors.country}</span>
                <br />

                <label htmlFor="pincode">Pincode: </label>
                <input
                    type="text"
                    name="pincode"
                    value={formik.values.pincode}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    maxLength={6}
                />
                <span>{formik.touched.pincode && formik.errors.pincode}</span>
                <br />
                {/* <button type="submit" onClick={() => dispatch(setStep(1))}>Back</button>
                <button type="submit" disabled={!formik.isValid}>Next</button> */}
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => dispatch(setStep(1))}
                >
                    Back
                </button>

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