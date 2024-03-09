import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// const apiUrl = "https://65e3190788c4088649f54e9b.mockapi.io/Student";

function UpdateData() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:5001" + "/" + id)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <>
      <input
        className="m-3 p-2 border rounded-pill border-2 w-50 border-dark"
        type="text"
        value={data.name}
        onChange={(e) => {
          setData({ ...data, name: e.target.value });
        }}
      />
      <br />
      <input
        className="m-3 p-2 border rounded-pill border-2 w-50 border-dark"
        type="text"
        value={data.image}
        onChange={(e) => {
          setData({ ...data, image: e.target.value });
        }}
      />
      <br />
      <input
        className="m-3 p-2 border rounded-pill border-2 w-50 border-dark"
        type="text"
        value={data.phone}
        onChange={(e) => {
          setData({ ...data, phone: e.target.value });
        }}
      />
      <input
        className="m-3 p-2 border rounded-pill border-2 w-50 border-dark"
        type="text"
        value={data.email}
        onChange={(e) => {
          setData({ ...data, email: e.target.value });
        }}
      />
      <input
        className="m-3 p-2 border rounded-pill border-2 w-50 border-dark"
        type="text"
        value={data.address}
        onChange={(e) => {
          setData({ ...data, address: e.target.value });
        }}
      />
      <br />
      <button
        className="btn btn-secondary w-25 m-3"
        onClick={() => {
          fetch("http:/localhost:5001" + "/" + id, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              return res.json();
            })
            .then(() => {
              navigate("/");
            });
        }}
      >
        Save
      </button>
    </>
  );
}

export default UpdateData;
