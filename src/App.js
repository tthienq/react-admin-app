import React from 'react'
import { Admin, fetchUtils, Resource } from 'react-admin'
//import { authProvider } from './Auth';
import restProvider from 'ra-data-simple-rest';
import { VerifiedUserRounded, ViewListRounded, GroupRounded } from '@material-ui/icons';
import HomePage from './components/HomePage';
import UserList from './components/UserList';
import UserEdit from './components/UserEdit';
import UserShow from './components/UserShow';
import ClassShow from './components/ClassShow/ClassShow';
import ClassList from './components/ClassList';
import ClassEdit from './components/ClassEdit';
import AdminList from './components/AdminList';
import AdminShow from './components/AdminShow';
import AdminEdit from './components/AdminEdit';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  options.headers.set('Access-Control-Expose-Headers', 'Content-Range');
  return fetchUtils.fetchJson(url, options);
};

function App() {
  return (
    <Admin style={{backroundColor: 'violet'}}
      dataProvider={restProvider(process.env.REACT_APP_ADMIN_MANAGE_BASE_URL, httpClient)}
      dashboard={HomePage}
    >
      <Resource
        name='admins'
        show={AdminShow}
        list={AdminList}
        edit={AdminEdit}
        icon={VerifiedUserRounded}
      />
      <Resource
        name='users'
        show={UserShow}
        list={UserList}
        edit={UserEdit}
        icon={GroupRounded}
      />
      <Resource
        name='classes'
        show={ClassShow}
        list={ClassList}
        edit={ClassEdit}
        icon={ViewListRounded}
      />
    </Admin>
  );
}

export default App;
