import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Email from '../screens/email';
import Index from '../screens/index';
import Password from '../screens/password';
import RaceTime from '../screens/raceTime';
import Races from '../screens/races';
import TrackDetail from '../screens/trackDetail';
import Settings from '../screens/settings';

const AUTH = [
  { key: 'password',  component: Password},
]

const MAIN = [
  { key: 'email',          component: Email},
  { key: 'index',          component: Index},
  { key: 'racetime',       component: RaceTime},
  { key: 'races',          component: Races},
  { key: 'trackdetail',    component: TrackDetail},
  { key: 'settings',       component: Settings},
]

export const AuthPage = props => (
  <Router>
    <Stack key='root'>
     { AUTH.map(a => (<Scene key={a.key} component={a.component} hideNavBar />))}
     <Scene key="signin" component={SignIn} update={(res)=>props.logIn(res)} hideNavBar />
    </Stack>
  </Router>
)

export const MainPage = props => {

  return(
  <Router>
    <Stack key='root'>
    { MAIN.map(a => (<Scene key={a.key} component={a.component} hideNavBar />))}
    </Stack>
  </Router>)
}