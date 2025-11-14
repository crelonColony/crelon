import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

function PublicPortfolio() {
  const { username } = useParams(); // ✅ This reads the dynamic param
  console.log("Captured username:", username);
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    if (!username) return; // wait for param to load
    axios
      .get(`http://localhost:5000/api/portfolio/${username}`)
      .then((res) => setPortfolio(res.data))
      .catch((err) => console.error("Error fetching portfolio:", err));
  }, [username]);

  return (
    <div>
      {portfolio ? (
        <>
          <h1>{portfolio.fullName}</h1>
          <p>{portfolio.about}</p>
        </>
      ) : (
        <p>Loading portfolio...</p>
      )}
    </div>
  );
}

export default PublicPortfolio;
