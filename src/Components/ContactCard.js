import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  //   console.log(props.contact);
  //   console.log(id);
  return (
    <div className="item">
      <div>
        <img className="ui avatar image" src={user} alt="user" />
        <div className="content">
          <div className="header">{name}</div>
          <div>{email}</div>
        </div>
      </div>
      <div>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px" }}
          onClick={() => props.clickHandler(id)}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
