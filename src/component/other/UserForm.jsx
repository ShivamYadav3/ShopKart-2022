import React, { useState } from "react";
import Modal1 from "./model";
const initialErr = { fnameErr: false, cityErr: false };
const UserForm = () => {
  const [profile, setProfile] = useState({ fname: "", city: "" });

  const [profileErr, setProfileErr] = useState({ ...initialErr });
  const [visibleConfirmationModal, setVisibleConfirmationModal] =
    useState(false);
  const ErrorHandler = (e) => {
    e.preventDefault();
    const errObj = { ...initialErr };

    let hasErr = false;
    if (profile.fname.length < 3) {
      errObj.fnameErr = true;
      hasErr = true;
    }
    if (profile.city.length < 3) {
      errObj.cityErr = true;
      hasErr = true;
    }
    if (hasErr) {
      //   setVisibleConfirmationModal(true);
    }
    setProfileErr(errObj);
  };

  const verifyDetails = (e) => {
    e.preventDefault();
    for (let key in profileErr) {
      if (profileErr[key]) {
        // Object.values(errObj).includes(true)
        return;
      }
    }
    setVisibleConfirmationModal(true);
  };
  const CommonHandler = (e) => {
    const { value, name } = e.target;
    setProfile((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div>
      <h1>User Data</h1>
      <form onChange={ErrorHandler}>
        <input
          type="text"
          name="fname"
          placeholder="fname"
          onChange={CommonHandler}
          autoComplete="off"
        />
        <br />
        {profileErr.fnameErr && <div>Enter Correct Name</div>}
        <br />
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={CommonHandler}
        />{" "}
        <br />
        {profileErr.cityErr && <div>Enter City Name</div>}
        <br />
        <Modal1
          show={visibleConfirmationModal}
          toggle={() => {
            setVisibleConfirmationModal(false);
          }}
        >
          Please check Your Details:
          <br /> Name: {profile.fname},
          <br /> City:{profile.city}
        </Modal1>
        <button type="submit" onClick={verifyDetails}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
