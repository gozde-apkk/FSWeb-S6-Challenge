import {useState} from "react";

function Dropdown ({title,children}){
  const[isOpen,setIsOpen] = useState(false);

  return(
    <div className="dropDown">
      <div className="dropDown_title" onClick={() => setIsOpen(!isOpen)}>{title}</div>
      {isOpen && <div className="dropDown_detail">{children}</div>}
    </div>

  )
}

export default Dropdown;