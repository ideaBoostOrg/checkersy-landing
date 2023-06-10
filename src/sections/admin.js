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
              title="Streamline Attendance Administration"
              description="Manage attendance across multiple courses and departments seamlessly with Checkersy's comprehensive administrative features."
            />
            <Text sx={styles.listItem} as="p">
              <Image sx={styles.img} src={checkFilledCircle} alt="check icon" />
              Centralized Control: Monitor attendance records, generate reports, and manage users from a single, powerful admin control panel.
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Streamlined Admin Control: Manage subjects, student groups, and assign them to lecturers, all within a centralized panel.
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Effortlessly generate reports: Easily generate attendance reports for lectures, subjects, or specific criteria, providing valuable insights for improved attendance management.
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Integration and Scalability: Seamlessly integrate Checkersy with your existing systems and scale it to meet your institution's growing needs.
            </Text>
            <Box sx={styles.explore}>
              <LearnMore path="#!" label="Explore More" />
            </Box>
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
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
  },
  heading: {
    textAlign: 'left',
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
    },
  },
  explore: {
    mt: ['20px', '20px', '20px', '20px', '40px'],
  },
};
