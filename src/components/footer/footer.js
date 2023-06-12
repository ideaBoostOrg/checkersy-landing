/** @jsx jsx */
import { jsx, Box, Text, Container } from 'theme-ui';
import Logo from 'components/logo';
import { Link } from 'components/link';
import FooterWidget from 'components/footer-widget';
import { menuItems, footerNav } from './footer.data';
import { rgba } from 'polished';
import Image from 'components/image';


import email from 'assets/images/icons/email.webp';
import visitus from 'assets/images/icons/visitUs.png';
import linkedin from 'assets/images/icons/linkedin_logo.png';

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
          <Box sx={styles.copyright}>
            <Logo />
            {/* <Text as="span">
              Copyright by {new Date().getFullYear()} RedQ, Inc
            </Text> */}
          </Box>
          <Box as="ul" sx={styles.footerNav}>
              <Link path={'contactus@ideaboost.tech'} label={'contactus@ideaboost.tech'} variant="footer" >
                <Image sx={styles.footerNavImg} src={email} alt="widgets" />
              </Link>
              <Link path={'https://ideaboost.tech'} variant="footer" sx={styles.link}>
                <Image sx={styles.footerNavImg} src={visitus} alt="widgets" />
              </Link>
            {/* <li sx={styles.footerNavList} >   */}
              <Link path={'https://www.linkedin.com/company/ideaboosts/'} variant="footer" sx={styles.link}>
                <Image sx={styles.footerNavImg} src={linkedin} alt="widgets" />
              </Link>
            {/* </li> */}
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
    flexDirection: ['row'],
    justifyContent: 'space-between',
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
    flexDirection: ['row'],
    flexWrap: ['wrap', null, null, 'unset'],
    justifyContent: ['center', null, 'flex-start'],
    'li + li': {
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
    width: ['30px'],
    height: ['30px'],
    display: 'flex',
    mt: 'auto',
    mb: 'auto',
    mr: '15px',
  },
  footerCopyRight: {
    ml: '5px',
  },
  link:{
    textDecoration: 'none',
    fontSize: ' 11pt',
  }
};
