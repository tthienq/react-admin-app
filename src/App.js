import React from 'react'
import { Admin, Resource } from 'react-admin'
import lb4Provider from 'react-admin-lb4';

function App() {
  return (
    <Admin dataProvider={lb4Provider('http://localhost:4000')}>
       <Resource name='customers' />
    </Admin>
  );
}

export default App;
