import { createPlugin } from '@backstage/core';
import Employee from './components/Employee';
import Login from './components/Login';
import Table from './components/Table';


export const plugin = createPlugin({
  id: 'welcome',
  register({ router }) {
    router.registerRoute('/', Login);
    router.registerRoute('/Employee', Employee);
    router.registerRoute('/Table', Table);
  },
});
