import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import neverbland from './logo.svg';

const Wrapper = styled.div`
  text-align: center;
`;

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Logo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`;

const Intro = styled.div`
  font-size: large;
`;

const Resources = styled.ul`
  list-style: none;
`;

const Resource = styled.li`
  display: inline-block;
  padding: 1rem;
`;

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Logo src={neverbland} alt="Neverbland Logo" />
          <h2>Welcome to Razzle dsfasf</h2>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> or{' '}
          <code>src/Home.js</code> and save to reload.
        </Intro>
        <Resources>
          <Resource>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </Resource>
          <Resource>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </Resource>
          <Resource>
            <a href="https://palmer.chat">Community Slack</a>
          </Resource>
        </Resources>
      </Wrapper>
    );
  }
}

export default Home;
