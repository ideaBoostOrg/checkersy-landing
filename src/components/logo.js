/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/images/ideaboost_logo.png';
import logoWhite from 'assets/images/logo-white.png';

export default function Logo({ isWhite }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image src={logo} alt="startup landing logo" />
    </Link>
  );
}
