import React, { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  // const [getuserdata, setUserdata] = useState([]);
  // console.log(getuserdata);

  const navigate = useNavigate("");

  const [inputval, setInputval] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    jobrole: "",
    addr: "",
    desc: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setInputval((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const { id } = useParams("");
  console.log(id);

  const getdata = async () => {
    const res = await fetch(`/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setInputval(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateuser = async(e)=>{
    e.preventDefault();

    const {name, email, age, jobrole, mobile, addr, desc} = inputval;

    const res2 = await fetch(`/updateuser/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        name, email, age, jobrole, mobile, addr, desc
      })
    });

    const data2 = await res2.json();
    console.log(data2);

    if(res2.status === 422 || !data2){
      alert("fill the data");
    }else{
      alert("Data Added");
      navigate("/");
    }

  }

  return (
    <div className="container">
      <NavLink to="/">home</NavLink>
      <form className="mt-4">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              onChange={setdata}
              value={inputval.name}
              className="form-control"
              name="name"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              onChange={setdata}
              value={inputval.email}
              className="form-control"
              name="email"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Age
            </label>
            <input
              type="text"
              onChange={setdata}
              value={inputval.age}
              className="form-control"
              name="age"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Mobile
            </label>
            <input
              type="number"
              onChange={setdata}
              value={inputval.mobile}
              className="form-control"
              name="mobile"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              JobRole
            </label>
            <input
              type="text"
              onChange={setdata}
              value={inputval.jobrole}
              className="form-control"
              name="jobrole"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="address"
              onChange={setdata}
              value={inputval.addr}
              className="form-control"
              name="addr"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-12 col-md-12 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              onChange={setdata}
              value={inputval.desc}
              className="form-control"
              name="desc"
              id="exampleInputPassword1"
              cols="30"
              rows="5"
            />
          </div>

          <button type="submit" onClick={updateuser} className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
