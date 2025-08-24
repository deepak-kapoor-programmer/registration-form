import { useSelector, useDispatch } from "react-redux";
import { setStep } from "../../../../../redux/formSlice";
export default function ReviewForm() {
    const { personalInfo, addressInfo, academicInfo } = useSelector(state => state.form);
    const dispatch = useDispatch();

    return (
        <div className="review-container">
            <h2>🎓 Review Your Submitted Information</h2>

            <div className="review-section">
                <h3>🧍‍♂️ Personal Information</h3>
                <p><strong>First Name:</strong> {personalInfo.fname}</p>
                <p><strong>Last Name:</strong> {personalInfo.lname}</p>
                <p><strong>Email:</strong> {personalInfo.email}</p>
                <p><strong>Phone:</strong> {personalInfo.ph}</p>
                <p><strong>DOB:</strong> {personalInfo.dob}</p>
                <p><strong>Gender:</strong> {personalInfo.gender}</p>
            </div>

            <div className="review-section">
                <h3>🏠 Address Information</h3>
                <p><strong>Street:</strong> {addressInfo.street}</p>
                <p><strong>City:</strong> {addressInfo.city}</p>
                <p><strong>State:</strong> {addressInfo.state}</p>
                <p><strong>Country:</strong> {addressInfo.country}</p>
                <p><strong>Pincode:</strong> {addressInfo.pincode}</p>
            </div>

            <div className="review-section">
                <h3>🎓 Academic Information</h3>
                <p><strong>Degree:</strong> {academicInfo.degree}</p>
                <p><strong>University:</strong> {academicInfo.university}</p>
                <p><strong>Passing Year:</strong> {academicInfo.passingYear}</p>
                <p><strong>Skills:</strong> {academicInfo.skills}</p>
                <p><strong>Experience:</strong> {academicInfo.experience}</p>
            </div>

            <div className="review-submit-buttons">
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => dispatch(setStep(3))}
                >
                 Back
                </button>

                <button
                    type="submit"
                    className="btn btn-success" 
                    onClick={() => {
                        alert("✅ Form Submitted!");
                        window.location.reload();
                    }}
                >
                    ✅ Submit
                </button>
            </div>

        </div>
    );
}
