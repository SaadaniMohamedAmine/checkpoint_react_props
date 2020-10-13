import React, { Profiler } from 'react'
import PropTypes from "prop-types";
import '../App.css'


const Profile=(props) => {
   
    return (
        <form className="form">
            <div className="div">
    <span><span className="spann">Full name:  </span><span className="descr"> {props.fullName}</span></span>
            </div>
            <div className="div">
    <span><span className="spann">Profession: </span> <span className="descr"> {props.profession}</span></span>
            </div>
            <div className="div">
    <span><span className="spann">Bio:  </span><span className="descr"> {props.bio}</span></span>
            </div>
            <div className="div">
                <button className="btn" onClick={()=>{props.handleName(props.fullName)}}>Click Here !</button>
            </div>
            {props.children}
        </form>
    )

}
Profile.defaultProps={
    fullName:"Saadani Mohamed Amine",
    profession:"Full Stack Web Developper JS",
    bio:"I am Saadani Mohamed Amine. \n I am a Full Stack JS Web Developper \n.For any question,please don't hesitate to join me at 'https//linked.in/saadaniMohamedAmine'" ,
}
Profile.propTypes ={
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string,
    handleName: PropTypes.string,
}

export default Profile  ;