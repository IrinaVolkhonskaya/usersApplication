import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import * as usersOperations from "../../redux/usersOperations";

// import "react-datepicker/dist/react-datepicker.css";
import "./form.css";

export default function FormView(): JSX.Element {
  const dispatch = useDispatch();

  const [first_name, setFirstName] = useState("");
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const [last_name, setLastName] = useState("");
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const [birth_date, setBirthDate] = useState("");
  const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDate(e.target.value);
  };

  const [gender, setGender] = useState("");
  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };
  const [job, setJob] = useState("");
  const handleJobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJob(e.target.value);
  };

  const [biography, setBiography] = useState("");
  const handleBiographyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBiography(e.target.value);
  };

  const [is_active, setIsActive] = useState(false);
  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsActive(e.target.checked);
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(
        usersOperations.addUser({
          first_name,
          last_name,
          birth_date,
          gender,
          job,
          biography,
          is_active,
        })
      );
    },
    [
      dispatch,
      first_name,
      last_name,
      birth_date,
      gender,
      job,
      biography,
      is_active,
    ]
  );

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name
        <input
          type="text"
          name="first_name"
          value={first_name}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last Name
        <input
          type="text"
          name="last_name"
          value={last_name}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Birth date
        <input
          type="date"
          name="birth_date"
          value={birth_date}
          onChange={handleBirthDateChange}
        />
      </label>
      <label>Gender</label>
      <select
        name="gender"
        defaultValue={"DEFAULT"}
        onChange={handleGenderChange}
      >
        <option value="DEFAULT" disabled>
          select
        </option>
        <option value="female">female</option>
        <option value="male">male</option>
      </select>

      <label>
        Job
        <input type="text" name="job" value={job} onChange={handleJobChange} />
      </label>
      <label>
        Biography
        <textarea
          name="biography"
          value={biography}
          onChange={handleBiographyChange}
        />
      </label>
      <label>
        Is Active
        <input
          type="checkbox"
          checked={is_active}
          // value={is_active}
          name="is_active"
          onChange={handleStatusChange}
        />
      </label>
      <button type="submit">
        Add/Update
      </button>
    </form>
  );
}
