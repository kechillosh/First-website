import React, { useEffect } from "react";
import "../styles/NoCheckout.css";

function NoCheckout({ setShowFooter }) {
  useEffect(() => {
    setShowFooter(false);

    return () => {
      setShowFooter(true);
    };
  }, []);

  return (
    <div className="no-cars-container">
      <div className="no-cars-text">
        Sorry, no cars available at this time. Please try again later.
      </div>
    </div>
  );
}

export default NoCheckout;
