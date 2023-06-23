/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/images/ideaboost_logo.png';
import logoWhite from 'assets/images/logo-white.png';

export default function IdeaBoost({ isWhite }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image sx={styles.logo} src={isWhite ? logoWhite : logo} alt="ideaboost checkersy" />
    </Link>
  );
}

const styles = {
    logo: {
        scale: ['0.7'],
    }
}
