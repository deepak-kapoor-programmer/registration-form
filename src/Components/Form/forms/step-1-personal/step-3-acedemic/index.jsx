import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup"
import { setacademic, setStep } from "../../../../../redux/formSlice";
export default function Academic() {
    const dispatch = useDispatch();
    const acedemic = useSelector((state) => state.form.academicInfo);
    const formik = useFormik({
        initialValues: {

            degree: acedemic.degree ? acedemic.degree : "",
            university: acedemic.university ? acedemic.university : "",
            passingYear: acedemic.passingYear ? acedemic.passingYear : "",
            skills: acedemic.skills ? acedemic.skills : "",
            experience: acedemic.experience ? acedemic.experience : "",
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            degree: Yup.string().required("Highest Degree is required"),
            university: Yup.string().required("University Name is required"),
            passingYear: Yup.number()
                .required("Year of Passing is required")
                .max(new Date().getFullYear(), "Year cannot be in the future"),
            skills: Yup.string()
                .min(1, "At Least One skill required")
        }),
        onSubmit: (values) => {
            dispatch(setacademic(values));
            dispatch(setStep(4));
            console.log(values)
        }
    })
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <h1>Academic & Professional Info</h1>

                <label htmlFor="degree">Highest Degree: </label>
                <select
                    name="degree"
                    value={formik.values.degree}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                >
                    <option value="">--Select Degree--</option>
                    <option value="BCA">BCA</option>
                    <option value="BBA">BBA</option>
                    <option value="MBA">MBA</option>
                    <option value="MCA">MCA</option>
                </select>
                <span>{formik.touched.degree && formik.errors.degree}</span>
                <br />

                <label htmlFor="university">University Name: </label>
                <input
                    type="text"
                    name="university"
                    value={formik.values.university}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                <span>{formik.touched.university && formik.errors.university}</span>
                <br />

                <label htmlFor="passingYear">Year of Passing: </label>
                <input
                    type="number"
                    name="passingYear"
                    value={formik.values.passingYear}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                <span>{formik.touched.passingYear && formik.errors.passingYear}</span>
                <br />

                <label htmlFor="skills">Skills: </label>
                <input
                    type="text"
                    name="skills"
                    value={formik.values.skills}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                <span>{formik.touched.skills && formik.errors.skills}</span>
                <br />

                <label htmlFor="experience">Experience (Years): </label>
                <input
                    type="number"
                    name="experience"
                    value={formik.values.experience}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                /><br />
                {/* <button type="submit" onClick={() => dispatch(setStep(2))}>Back</button>
                <button type="submit" disabled={!formik.isValid}>Submit</button> */}
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => dispatch(setStep(2))}
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