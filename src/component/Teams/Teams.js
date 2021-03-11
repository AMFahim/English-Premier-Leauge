import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css';

const Teams = (props) => {
  const {strTeam, strTeamBadge, strSport, idTeam} = props.team;
  return (
    <div className="col-md-4">
    <div className="card">
  <img src={strTeamBadge} />
  <div className="container">
    <h4><b>{strTeam}</b></h4>
    <p>Sports type: {strSport}</p>
    <Link to={`/explore/${idTeam}`}>
    <button className="btn btn-primary">Explore <FontAwesomeIcon icon={faArrowRight}/></button>
    </Link>

  </div>
</div>

    </div>
  );
};

export default Teams;