import { Outlet } from '@modern-js/runtime/router';
import Navigator from '@/components/navigator';
import './layout.scss';

export default function Layout() {
  return (
    <>
      <Navigator />
      <Outlet />
    </>
  );
}
