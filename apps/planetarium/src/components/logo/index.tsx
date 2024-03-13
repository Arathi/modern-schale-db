import { Image } from 'antd';
import logo from '@/static/logo.png';

const Logo = () => {
  return <Image src={logo} alt={'Planetarium'} width={256} />;
};

export default Logo;
