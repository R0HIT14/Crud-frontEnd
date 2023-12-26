import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type staffs = {
  name: string;
  dayOfOperations: string;
  contactNumber: string;
};
const Home = () => {
  const { id } = useParams();
  const [staffs, setStaffs] = useState([]);
  useEffect(() => {
    loadStaff();
  }, []);

  const loadStaff = async () => {
    const result = await axios.get("http://localhost:8080/staffs");
    setStaffs(result.data);
    console.log(result);
  };

  const deleteStaff = async (id: any) => {
    await axios.delete(`http://localhost:8080/staff/${id}`);
    loadStaff();
  };
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Day of Operation</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffs.map((staff, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{staff.name}</td>
                <td>{staff.contactNumber}</td>
                <td>{staff.dayOfOperations}</td>
                <td>
                  <Link
                    to={`/viewstaff/${staff.id}`}
                    className="btn btn-primary mx-2"
                  >
                    View
                  </Link>
                  <Link
                    to={`/edituser/${staff.id}`}
                    className="btn btn-outline-primary mx-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteStaff(staff.id)}
                    className="btn btn-danger mx-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
