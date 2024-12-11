import React, { useState } from "react";

const Form = () => {
  const [Username, setUsername] = useState("");

  const handelChange = (event) => {
    setUsername(event.target.value);
  };
  const [email, setEmail] = useState("");
  const handelEmailChange = (event) => {
    setEmail(event.target.value);
  };
  console.log(Username);
  console.log(email);
  return (
    <div>
      <div className="flex justify-center flex-col items-center m-5">
        <input
          type="text"
          placeholder="Username"
          required
          value={Username}
          onChange={handelChange}
          className=" bg-slate-900 outline-none rounded-sm text-white border-r-2 m-2"
        />
        <input
          type="email"
          placeholder="enter your email"
          required
          value={email}
          onChange={handelEmailChange}
          className="bg-slate-900 rounded-sm outline-none text-white border-r-2 m-2"
        />
        <button className="ml-3 border-r-2  bg-slate-800 m-2 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;