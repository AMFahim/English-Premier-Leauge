import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamInfo from '../TeamInfo/TeamInfo';

const TeamDetail = () => {
  const {idTeam}= useParams();
  const [teamDetail, setTeamDetail] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
    fetch(url)
    .then(res => res.json())
    .then(data =>setTeamDetail(data.teams))
  }, [idTeam])
  return (
    <div>
      <p></p>
     {
      teamDetail && teamDetail.map(teams => <TeamInfo teams={teams}></TeamInfo>)
     }
    </div>
  );
};

export default TeamDetail;