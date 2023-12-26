import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditStaff = () => {
  let navigate = useNavigate();

  const {id} = useParams();

  const [staff, setStaff] = useState({
    name: "",
    contactNumber: "",
    dayOfOperations: 0,
  });
  const { name, contactNumber, dayOfOperations } = staff;

  const onInputChange = (e: any) => {
    setStaff({ ...staff, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    loader();
  },[])

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/staff/${id}`, staff);
    navigate("/");
  };

  const loader = async () => {
    const result = await axios.get(`http://localhost:8080/staff/${id}`)
    setStaff(result.data)
  }
  return (
    <div className="container">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h1 className="text-center m-4">Register</h1>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div>
            <label htmlFor="Number" className="form-label">
              Contact Number
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter your name"
              name="contactNumber"
              value={contactNumber}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div>
            <label htmlFor="Name" className="form-label">
              Day Of Operation
            </label>
            <select
              className="form-control"
              name="dayOfOperations"
              onChange={(e) => onInputChange(e)}
            >
              <option value={"0"}>Mon</option>
              <option value={"1"}>Tue</option>
              <option value={"2"}>Wed</option>
              <option value={"3"}>Thu</option>
              <option value={"4"}>Fri</option>
              <option value={"5"}>Sat</option>
              <option value={"6"}>Sun</option>
            </select>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "20px",
              gap: "2%",
            }}
          >
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <button type="submit" className="btn btn-outline-danger">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStaff;
