/** @jsx jsx */
import { jsx, Box, Container, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { LearnMore } from 'components/link';
import Image from 'components/image';

import admin from 'assets/images/admin.jpg';
import checkFilledCircle from 'assets/images/icons/check-circle-filled.png';

const Admin = () => {
  return (
    <Box as="section" id="widgets" variant="section.widgets">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            <Image src={admin} alt="widgets" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Features for Administration"
              description="Manage attendance across multiple courses and departments seamlessly with Checkersy's comprehensive administrative features."
            />
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Centralized control: Monitor attendance, generate reports, manage users from one admin panel.            
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Streamlined admin control: Manage subjects, groups, assign lecturers in one panel.            
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Effortless report generation: Obtain valuable attendance insights for improved management.            
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Seamless integration and scalability: Integrate Checkersy, scale with ease.            
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Admin;

const styles = {
  contentWrapper: {
    gap: [0, 0, 0, 0, 10, 100],
    display: ['block', 'block', 'grid'],
    gridTemplateColumns: '1.5fr 2fr',
    alignItems: 'center',
  },
  heading: {
    textAlign: 'left',
    fontWeight: 500,
    mb: ['20px'],
    mt: [0, 0, 0, 0, '-70px'],
    h2: {
      fontSize: ['24px', '24px', '24px', '28px', '32px', '40px'],
      lineHeight: [1.45, 1.5],
      letterSpacing: '-1.5px',
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
  },
  explore: {
    mt: ['20px', '20px', '20px', '20px', '40px'],
  },
};
