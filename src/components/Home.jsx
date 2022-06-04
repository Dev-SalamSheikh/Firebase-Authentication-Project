import React from "react";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../contexts/useAuthContext";

const Home = () => {
  const { user, logOut } = useUserAuth();
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.messaage);
    }
  };
  return (
    <div>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogOut}>
          Log out
        </Button>
      </div>
    </div>
  );
};

export default Home;
