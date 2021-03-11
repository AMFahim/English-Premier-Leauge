import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Header from '../Header/Header';
import Teams from '../Teams/Teams';





const Home = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
    .then(res => res.json())
    .then(data => setTeams(data.teams))
  }, [])
  return (
    <div>
      <Header/>
      <Row>
      {
     teams.map(team => <Teams team={team}></Teams>) 
      }
      </Row>
    </div>
  );
};

export default Home;