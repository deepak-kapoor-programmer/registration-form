import { useSelector } from "react-redux";
import Personal from "./forms/step-1-personal";
import Address from "./forms/step-1-personal/step-2-address";
import Academic from "./forms/step-1-personal/step-3-acedemic";
import Submit from "./forms/step-1-personal/step-4-submit";
import '../../index.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
export default function Registration() {
    const step = useSelector(state => state.form.step);
    const process = (step / 4) * 100;
    return (
        <>
            <div className="step-progress-wrapper">
                <p>Step {step} of 4</p>
                <ProgressBar now={(step / 4) * 100} animated striped variant="info" />
            </div>            {/* <h1><u>Step{step} Of Step 4</u></h1> */}
            {step === 1 && <Personal />}
            {step === 2 && <Address />}
            {step === 3 && <Academic />}
            {step === 4 && <Submit />}

        </>
    )
}
