import React from "react";

export const Home = ({email, password}) => {

  return (
    <div className="home">
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  )
}

export default Home;