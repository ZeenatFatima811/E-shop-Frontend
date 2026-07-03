import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../server"

const ActivationPage = () => {
  const { activation_token } = useParams();

  const [loading, setLoading] = useState(true);   
  const [success, setSuccess] = useState(false);  
  const [error, setError] = useState(false);


  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(`${server}/user/activation`, {
            activation_token,
          });

          console.log(res.data.message);
          setSuccess(true);   
        } catch (error) {
          console.log(error.response?.data?.message);
          setError(true);
        } finally {
          setLoading(false);  
        }
      };

      activationEmail();
    }
  }, []);

  return (
    <div style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      {loading ? (
        <p>Activating your account...</p>
      ) : error ? (
        <p>Your token is expired!</p>
      ) : success ? (
        <p>Your account has been created successfully</p>
      ) : null}
    </div>
  );
};

export default ActivationPage;