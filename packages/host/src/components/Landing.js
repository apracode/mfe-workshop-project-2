import React, { useRef, useEffect } from "react";
import { mount } from "landing/Landing";

const Landing = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default Landing;