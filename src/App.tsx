import React from 'react';
import {Layout} from './components/layout/Layout';
import {Users} from './pages/users/Users';

const App: React.FC = () => {
  return (
    <Layout>
      <Users/>
    </Layout>
  );
};

export default App;
