'use client'

import * as React from 'react';
import { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box, Typography } from '@mui/material';

interface Player {
  name: string;
  stats: { [key: string]: string }; // Dynamic stats object
}

interface TeamStats {
  teamName: string;
  players: Player[];
}

const RugbyStatInputForm = () => {
  const [teams, setTeams] = useState<TeamStats[]>([]);
  const [date, setDate] = useState<string>('');

  const handleAddTeam = () => {
    setTeams((prevTeams) => [...prevTeams, { teamName: '', players: [] }]);
  };

  const handleAddPlayer = (teamIndex: number) => {
    setTeams((prevTeams) => {
      const newTeams = [...prevTeams];
      newTeams[teamIndex].players.push({ name: '', stats: {} });
      return newTeams;
    });
  };

  const handleChange = (event: React.ChangeEvent<any>, field: string, teamIndex = 0, playerIndex = 0) => {
    setTeams((prevTeams) => {
      const newTeams = [...prevTeams];
      if (field === 'teamName') {
        newTeams[teamIndex].teamName = event.target.value as string;
      } else if (field === 'date') {
        setDate(event.target.value as string);
      } else if (field === 'playerName') {
        newTeams[teamIndex].players[playerIndex].name = event.target.value as string;
      } else if (field === 'statValue') {
        const statName = event.target.name; // Get stat name from input name
        newTeams[teamIndex].players[playerIndex].stats[statName] = event.target.value as string;
      }
      return newTeams;
    });
  };

  const handleStatChange = (event: React.ChangeEvent<any>, statName: string, playerIndex: number, teamIndex: number) => {
    handleChange(event, 'statValue', teamIndex, playerIndex);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Date" type="date" value={date} onChange={(event) => handleChange(event, 'date')} />
      {teams.map((team, teamIndex) => (
        <Box key={teamIndex} sx={{ display: 'flex', flexDirection: 'column', gap: 2, border: '1px solid #ccc', padding: 2 }}>
          <TextField label="Team Name" value={team.teamName} onChange={(event) => handleChange(event, 'teamName', teamIndex)} />
          {team.players.map((player, playerIndex) => (
            <Box key={playerIndex} sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
              <TextField label="Player Name" value={player.name} onChange={(event) => handleChange(event, 'playerName', teamIndex, playerIndex)} />
              {Object.keys(player.stats).map((statName) => (
                <TextField
                  key={statName}
                  label={statName}
                  name={statName} // Set stat name as input name for identification
                  value={player.stats[statName]}
                  onChange={(event) => handleStatChange(event, statName, playerIndex, teamIndex)}
                />
              ))}
            </Box>
          ))}
          <Button variant="contained" onClick={() => handleAddPlayer(teamIndex)}>Add Player</Button>
        </Box>
      ))}
      <Button variant="contained" onClick={handleAddTeam}>Add Team</Button>
    </Box>
  );
};

export default RugbyStatInputForm;
