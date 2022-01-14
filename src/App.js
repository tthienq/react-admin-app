import React from 'react'
import { Admin, fetchUtils, Resource } from 'react-admin'
//import { authProvider } from './Auth';
import restProvider from 'ra-data-simple-rest';
import UserList from './components/UserList';
import UserEdit from './components/UserEdit';
import UserShow from './components/UserShow';
import HomePage from './components/HomePage';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  options.headers.set('Access-Control-Expose-Headers', 'Content-Range');
  return fetchUtils.fetchJson(url, options);
};

function App() {
  return (
    <Admin
      dataProvider={restProvider(process.env.REACT_APP_ADMIN_MANAGE_BASE_URL, httpClient)}
      dashboard={HomePage}
    >
      <Resource
        name='users'
        show={UserShow}
        list={UserList}
        edit={UserEdit}
      />
    </Admin>
  );
}

export default App;
