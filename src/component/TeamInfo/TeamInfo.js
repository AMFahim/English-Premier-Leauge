import React from 'react';
import './TeamInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faFlag, faFutbol, faMars, faFacebook} from '@fortawesome/free-solid-svg-icons';



const TeamInfo = (props) => {
  const {strTeam, strTeamBadge, intFormedYear, strCountry, strSport, strGender, strTeamFanart3, strDescriptionEN, strStadiumDescription}=props.teams;
  return (
    <div>
      <img className="logo" src={strTeamBadge}/>
      <div style={{display: 'flex'}} className="info-card">
       <div style={{backgroundColor: 'rgb(238, 79, 61)'}}>
       <h3>{strTeam}</h3>
          <p><FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon> Founded: {intFormedYear} </p>
          <p><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon> Founded: {strCountry} </p>
          <p><FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon> Sport type: {strSport}</p>
          <p><FontAwesomeIcon icon={faMars}></FontAwesomeIcon> Gender: {strGender}</p>
       </div>
          <div>
            <img  className="info-img .float-right" src={strTeamFanart3}/>
          </div>
      </div>
      <div className="container description">
        <p>{strDescriptionEN}</p>
        <br/>
        <p>{strStadiumDescription}</p>
        
      </div>
     
    </div>
  );
};

export default TeamInfo;