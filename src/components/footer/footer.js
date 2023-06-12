/** @jsx jsx */
import { jsx, Box, Text, Container } from 'theme-ui';
import Logo from 'components/logo';
import { Link } from 'components/link';
import FooterWidget from 'components/footer-widget';
import { menuItems, footerNav } from './footer.data';
import { rgba } from 'polished';
import Image from 'components/image';


import email from 'assets/images/icons/email-logo.png';
import visitus from 'assets/images/icons/globe.png';

export default function Footer() {
  return (
    <Box as="footer" variant="layout.footer">
      <Container>
        {/* <Box sx={styles.footerTopInner}>
          {menuItems.map(({ id, title, items }) => (
            <FooterWidget key={id} title={title} items={items} />
          ))}
        </Box> */}
      </Container>
      <Container>
        <Box sx={styles.footerInner}>
          <Box as="ul" sx={styles.footerNav}>
            <li sx={styles.footerNavList} >
              <Image sx={styles.footerNavImg} src={email} alt="widgets" />
              <Link path={'contactus@ideaboost.tech'} label={'contactus@ideaboost.tech'} variant="footer" />
            </li>
            <li sx={styles.footerNavList} >
              <Image sx={styles.footerNavImg} src={visitus} alt="widgets" />
              <Link path={'https://ideaboost.tech'} label={'Visit us'} variant="footer" />
            </li>
          </Box>
          <Box sx={styles.copyright}>
            <Logo />
            <Text as="span">
              Copyright by {new Date().getFullYear()} RedQ, Inc
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  footerTopInner: {
    gap: [50, null, null, null, 17, 50],
    mb: [50],
    display: ['grid'],
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      null,
      null,
      'repeat(3, 1fr)',
      'repeat(5, 1fr)',
    ],
  },
  footerInner: {
    borderTop: `1px solid #D9E0E7`,
    display: ['flex', null, 'flex'],
    flexDirection: ['column'],
    // alignItems: 'center',
    // justifyContent: 'space-between',
    padding: '35px 0 40px',
    '@media only screen and (max-width: 400px)': {
      pb: 10,
    },
    pl: ['10px'],
  },
  copyright: {
    display: ['flex'],
    alignItems: 'center',
    flexDirection: ['column', null, null, null, 'row'],
    span: {
      fontSize: '14px',
      lineHeight: 1.29,
      color: rgba('#0F2137', 0.6),
      mt: ['18px', '18px', '7px'],
    },
  },
  footerNav: {
    listStyle: 'none',
    margin: ['15px 0 0', '15px 0 0', '0'],
    padding: 0,
    display: ['flex'],
    flexDirection: ['column'],
    flexWrap: ['wrap', null, null, 'unset'],
    justifyContent: ['center', null, 'flex-start'],
    'li + li': {
      // ml: ['18px', '18px', '20px'],
      '@media only screen and (max-width: 400px)': {
        mb: '10px',
      },
    },
    a: {
      color: 'textSecondary',
    },
    cursor: 'pointer',
  },
  footerNavList: {
    display: ['flex'],
    flexDirection: ['row'],
  },
  footerNavImg: {
    width: ['35px'],
    height: ['20px'],
    display: 'flex',
    mt: 'auto',
    mb: 'auto',
    mr: '15px',
  }
};
