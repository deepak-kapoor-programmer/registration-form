import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  personalInfo: {
    fname: '', lname: '', email: '', ph: '', dob: '', gender: ''
  },
  addressInfo: {
    street: "", city: "", state: "", country: "", pincode: ""
  },
  academicInfo: {
    degree: "", university: "", passingYear: "", skills: "", experience: ""
  },
  step: 1,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setPersonal: (state, action) => { state.personalInfo = action.payload },
    setaddress: (state, action) => { state.addressInfo = action.payload },
    setacademic: (state, action) => { state.academicInfo = action.payload },
    setStep: (state, action) => {
      state.step = action.payload;
    }
  }
})
export const { setPersonal, setacademic, setaddress, setStep } = formSlice.actions;
export default formSlice.reducer;
