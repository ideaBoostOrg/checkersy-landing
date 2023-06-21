/** @jsx jsx */
import { jsx, Container, Box, Text, Heading, } from 'theme-ui';
import Image from 'components/image';
import products from 'assets/images/products.png';
import checkFilledCircle from 'assets/images/icons/check-circle-filled.png';


export default function Product() {
  return (
    <Box as="section" id="product" variant="section.product">
      <Container>
      <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
              Attendance Management Perfected
            </Heading>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Access effortlessly from any device 
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Admin and Lecturer-Friendly Desktop Version
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Student-Focused Mobile App
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Anytime, Anywhere Access 
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              A visually appealing and responsive interface 
            </Text>
          </Box>
          <Box sx={styles.illustration}>
            <Image src={products} alt="banner" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  contentWrapper: {
    display: [null, null, null, 'flex', 'grid'],
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: [null, null, null, null, null, null],
    pt: [100, null, null, 120, 130, 120, 0],
  },
  content: {
    maxWidth: [507, null, null, 324, 450],
  },
  title: {
    fontWeight: 'bold',
    fontSize: ['20px', null, null, null, '24px', '24px', '36px'],
    lineHeight: 1.33,
    letterSpacing: '-1px',
    color: 'textSecondary',
    mb: ['14px', '16px'],
  },
  text: {
    fontSize: ['14px', '14px', '14px', '16px', '16px', '18px'],
    lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2.33],
    color: 'textSecondary',
    mt: ['14px', '19px'],
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
    mt: ['30px', '30px', 0],
    mb: ['60px', '60px', 0],
    img: {
      maxWidth: ['100%', '100%', '100%', '100%', '90%', '90%', '100%'],
      scale:'0.6',
    },
  },
  listItem: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 2.81,
    display: 'flex',
    alignItems: 'center',
    img: {
      mr: '10px',
      mt: '15px',
      mb: 'auto',
      minWidth: 'auto',
    },
    mt: ['12px', '12px'],
  },
};

  
  