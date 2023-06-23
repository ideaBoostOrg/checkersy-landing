/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button, Image, Grid } from 'theme-ui';
import home from 'assets/images/home.png';
import paypal from 'assets/images/paypal.png';
import google from 'assets/images/google.png';
import dropbox from 'assets/images/dropbox.png';
import { NavLink } from 'components/link';

const Banner = () => {

  return (
    <Box id="home" as="section" variant="section.banner">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Container sx={styles.container}>
            <Grid
              sx={{
                ...styles.grid,
                gridTemplateColumns: [
                  "1fr",
                  null,
                  null,
                  "1fr 1fr",
                  `repeat(2, 1fr)`,
                ],
              }}
            >
              <Box sx={styles.content}>
                <Heading sx={styles.title}>
                  Effortless Attendance Management
                </Heading>
                <Text as="p" sx={styles.text}>
                  The QR-based seamless solution for students, lecturers, and administrators.
                </Text>
                <Button variant="primary" sx={styles.button}>
                  <NavLink
                    path='about'
                    label='Get Started'
                  />
                </Button>
                {/* <Box sx={styles.clients}>
              <Image src={paypal} alt="paypal" />
              <Image src={google} alt="google" />
              <Image src={dropbox} alt="dropbox" />
            </Box> */}
              </Box>
              <Box sx={styles.illustration}>
                <Image src={home} alt="banner" sx={styles.image} />
              </Box>
            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  contentWrapper: {
    pt: [100, null, null, 120, 130, 120, 0],
  },
  container: {
    width: [null, null, null, null, null, null, "1390px"],
  },
  grid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: ["column-reverse", null, null, "row"],
  },
  content: {
    maxWidth: [507, null, null, 324, 650],
  },
  title: {
    fontWeight: 'bold',
    fontSize: ['30px', null, null, null, '42px', '40px', '50px'],
    lineHeight: 1.33,
    letterSpacing: '-1px',
    color: 'textSecondary',
  },
  text: {
    fontSize: ['14px', '14px', '14px', '16px', '16px', '18px'],
    lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2.33],
    color: 'textSecondary',
    mt: ['14px', '19px'],
  },
  button: {
    display: ['none', 'flex'],
    mt: [45, 45, 45, 25, 25],
    backgroundColor: "#2ED573",
    borderColor:"#ffffff",
    borderRadius:['30px'],
  },
  clients: {
    display: 'flex',
    alignItems: 'center',
    mt: ['20px', '45px', '45px', '30px', '45px'],
    img: {
      maxWidth: ['80px', '100%', '100%', '100%'],
      '+ img': {
        ml: ['14px', '28px', '28px', '20px'],
      },
    },
  },
  illustration: {
    display: ['block', 'block'],
    mt: ['30px', '30px', '30px'],
    mb: ['60px', '60px', 0],
    img: {
      maxWidth: ['100%', '100%', '100%', '100%', '90%', '90%', '100%'],
    },
  },
};
