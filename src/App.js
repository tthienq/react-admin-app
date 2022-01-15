import React from 'react'
import { Admin, fetchUtils, Resource } from 'react-admin'
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

import {axiosAdmin} from './api/axiosAdmin'

const authProvider = {
  login: async ({ username, password }) => {
      try {
        const res = await axiosAdmin.post('/auth/login', { email: username, password });
        console.log(res)
          localStorage.setItem('adminToken', res.data.token);
          localStorage.setItem('adminInfo', JSON.stringify(res.data.adminInfo));

          return Promise.resolve();
      } catch (error) {
          throw new Error('Username or password is incorrect!');
      }
  },
  logout: () => {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminInfo');
      return Promise.resolve();
  },
  checkError: (error) => {
      if (error.status === 401 || error.status === 403) {
          localStorage.removeItem('adminToken');
          localStorage.removeItem('adminInfo');
          return Promise.reject();
      }
      return Promise.resolve();
  },
  checkAuth: () => {
      return localStorage.getItem('adminToken') ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
  getIdentity: () => {
      try {
          if (localStorage.getItem('adminInfo')) {
              const { id, fullname, avatar } = JSON.parse(
                  localStorage.getItem('adminInfo'),
              );
              console.log({ id, fullname, avatar } )
              return Promise.resolve({ id, fullname, avatar });
          }
          return Promise.resolve();
      } catch (error) {
          return Promise.reject(error);
      }
  },
};


const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('adminToken');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

function App() {
  return (
    <Admin
      dataProvider={restProvider(process.env.REACT_APP_ADMIN_MANAGE_BASE_URL, httpClient)}
      authProvider={authProvider}
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
        options={{ label: 'Classrooms' }}
        show={ClassShow}
        list={ClassList}
        edit={ClassEdit}
        icon={ViewListRounded}
      />
    </Admin>
  );
}

export default App;
