import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Email from '../Screens/email';
import Index from '../Screens/index';
import Password from '../Screens/password';
import RaceTime from '../Screens/raceTime';
import Races from '../Screens/races';
import TrackDetail from '../Screens/trackDetail';
import Settings from '../Screens/settings';
import Login from '../Screens/login';
import Results from '../Screens/results';

const MAIN = [
  { key: 'index', component: Index },
  { key: 'trackdetail', component: TrackDetail },
  { key: 'racetime', component: RaceTime },
  { key: 'email', component: Email },
  { key: 'password', component: Password },
  { key: 'races', component: Races },
  { key: 'results', component: Results },

]

export const AuthPage = props => (
  <Router>
    <Stack key='root'>
      <Scene key="login" component={Login} hideNavBar login={()=>props.login()}/>
    </Stack>
  </Router>
)

export const MainPage = props => {
  return (
    <Router>
      <Stack key='root'>
        { MAIN.map(a => (<Scene key={a.key} component={a.component} hideNavBar />))}
        <Scene key="settings" component={Settings} hideNavBar logout={()=>props.logout()}/>

      </Stack>
    </Router>
  )
}