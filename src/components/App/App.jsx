import { Switch, Route } from 'react-router-dom';

import { Login, Signup, Chat } from 'components';

export const App = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Chat exact path="/" component={Chat} />
    </Switch>
  );
};
