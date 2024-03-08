import React from 'react';
import './App.css';
import CollegeBasketballTeams from './CollegeBasketballTeams.json';

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return <h1>College Basketball Teams</h1>;
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;
    return (
      <div>
        <h2>{oneTeam.school}</h2>
        <h3>Mascot: {oneTeam.name}:</h3>
        <h3>
          Loaction: {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {CollegeBasketballTeams.teams.map((oneTeam, index) => (
        <React.Fragment key={index}>
          <Team {...oneTeam} />
          {index !== CollegeBasketballTeams.teams.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
