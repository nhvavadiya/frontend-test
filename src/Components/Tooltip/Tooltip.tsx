import { useState } from "react";
import "./Tooltip.css";

const Tooltip = (props:any) => {
  const [activeOnHover, setActiveOnHover] = useState(false);
  const [activeOnClick, setActiveOnClick] = useState(false);

  const showTip = () => {
    setActiveOnHover(true);
  };

  const hideTip = () => {
    setActiveOnHover(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      onFocus={() => setActiveOnClick(true)}
      onBlur={() => setActiveOnClick(false)}
      tabIndex={0}
    >
      {props.children}
      {(activeOnClick || activeOnHover)&& (
        <div className={`Tooltip-Tip ${props.direction || "top"}`}>
          <div className="tooltip-content">
            <h6>{props.title}</h6>
            {props.content}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
