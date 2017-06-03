import { autobind } from 'core-decorators';
import React, { Component } from 'react';

import Button from '../Components/Button';
import Output from '../Components/Output';
import ReroleButton from '../Components/ReroleButton';
import Header from '../Components/Header';

const style = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
  },
  content: {
    display: 'flex',
    backgroundColor: '#151d25',
    flexDirection: 'column',
    minHeight: '92vh',
  },
  innerContainer: {
    padding: '100px',
  },
  parent1: {
    display: 'flex',
    minHeight: '160px',
    justifyContent: 'center',
    backgroundColor: '#364554',
  },
  parent2: {
    display: 'flex',
    minHeight: '160px',
    justifyContent: 'center',
  },
  children: {
    alignSelf: 'center',
    color: 'white',
    fontSize: '25px',
  },
  rerole: {
    margin: '0px',
    padding: '75px',
    textAlign: 'center',
  },
};

export default class UltimateBravery extends Component {
  constructor() {
    super();
    this.state = {
      lane: '----------',
      fullwhat: '----------',
      champion: '----------',
    };
  }

  @autobind
  getChampion() {
    const champion = ['Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia',
      'Annie', 'Ashe', 'Aurelion Sol', 'Azir', 'Bard', 'Blitzcrank', 'Brand',
      'Caitlyn', 'Cassiopeia', 'Chogath', 'Corki', 'Darius', 'Diana', 'Dr. Mundo',
      'Draven', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio',
      'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Graves', 'Hecarim', 'Heimerdinger',
      'Illaoi', 'Irelia', 'Janna', 'Jarvan IV', 'Jax', 'Jayce', 'Jhin', 'Kalista',
      'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kennen', 'Khazix',
      'Kindred', 'Kled', 'KogMaw', 'LeBlanc', 'Lee Sin', 'Leona', 'Lulu',
      'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai',
      'Master Yi', 'Miss Fortune', 'Mordekaiser', 'Morgana', 'Nami', 'Nasus',
      'Nautilus', 'Nidalee', 'Nocturne', 'Nunu', 'Olaf', 'Orianna', 'Pantheon',
      'Poppy', 'Quinn', 'Rammus', 'Reksai', 'Renekton', 'Rengar', 'Riven',
      'Rumble', 'Ryze', 'Sejuani', 'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion',
      'Sivir', 'Skarner', 'Sona', 'Soraka', 'Swain', 'Syndra', 'Tham Kench',
      'Thalyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle',
      'Trydamere', 'Twisted Fate', 'Twitch', 'Udyr', 'Urgot', 'Varus', 'Vayne',
      'Veigar', 'VelKoz', 'Vi', 'Viktor', 'Vladimir', 'Volibear', 'Warwick',
      'Wukong', 'Xerath', 'Xin Zhao', 'Yasuo', 'Yorick', 'Zac', 'Zed', 'Ziggs',
      'Zilean', 'Zyra'];
    const min = Math.ceil(0);
    const max = Math.floor(132);
    const x = Math.floor(Math.random() * (max - min)) + min;
    return this.setState({ champion: champion[x] });
  }

  @autobind
  getLane() {
    const lane = ['Top', 'Mid', 'Bot', 'Support', 'Jungle'];
    const min = Math.ceil(0);
    const max = Math.floor(5);
    const x = Math.floor(Math.random() * (max - min)) + min;
    return this.setState({ lane: lane[x] });
  }

  @autobind
  getFullWhat() {
    const fullwhat = ['Ad', 'Ap', 'Tank', 'Hybrid'];
    const min = Math.ceil(0);
    const max = Math.floor(4);
    const x = Math.floor(Math.random() * (max - min)) + min;
    return this.setState({ fullwhat: fullwhat[x] });
  }

  @autobind
  getAll() {
    this.getChampion();
    this.getLane();
    this.getFullWhat();
  }

  render() {
    return (
      <div style={style.main}>
        <Header title={'Ultimate Bravery'} />
        <div style={style.content}>
          <div style={style.innerContainer}>
            <div style={style.parent1}>
              <div style={style.children}>
                <Output title={this.state.champion} />
              </div>
              <div style={style.children}>
                <Button title="Champion" change={this.getChampion} />
              </div>
            </div>
            <div style={style.parent2}>
              <div style={style.children}>
                <Output title={this.state.fullwhat} />
              </div>
              <div style={style.children}>
                <Button title="Fullwhat" change={this.getFullWhat} />
              </div>
            </div>
            <div style={style.parent1}>
              <div style={style.children}>
                <Output title={this.state.lane} />
              </div>
              <div style={style.children}>
                <Button title="Lane" change={this.getLane} />
              </div>
            </div>
            <div style={style.rerole}>
              <ReroleButton title="Rerole-All" change={this.getAll} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
