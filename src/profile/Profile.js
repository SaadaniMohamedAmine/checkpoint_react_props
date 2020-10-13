import React, { Profiler } from 'react'
import Proptypes from "prop-types"  


const Profile=(props) => {
   
    return (
        <form>
            <div>
    <span>Full name: {props.fullName}</span>
            </div>
            <div>
    <span>Profession: {props.profession}</span>
            </div>
            <div>
    <span>Bio: {props.bio}</span>
            </div>
            <div>
                <button onClick={()=>{props.handleName(props.fullName)}}>Click Here !</button>
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
    fullName:PropTypes.string,
    profession:PropTypes.string,
    bio:PropTypes.string,
    handleName:PropTypes.func ,
}

export default Profile  ;