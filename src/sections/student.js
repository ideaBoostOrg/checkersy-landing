/** @jsx jsx */
import { jsx, Box, Container, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { LearnMore } from 'components/link';
import Image from 'components/image';

import student from 'assets/images/student.jpg';
import checkFilledCircle from 'assets/images/icons/check-circle-filled.png';

const Student = () => {
  return (
    <Box as="section" id="widgets" variant="section.widgets">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            <Image src={student} alt="widgets" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Manage Your Attendance with Ease"
              description="With Checkersy, tracking your attendance has never been simpler. Simply scan the QR code in your classes and stay up-to-date with your attendance record."
            />
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Quick and Convenient: Scan the QR code with your smartphone and mark your attendance within seconds.
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Accessible Anywhere: Use Checkersy on any device, ensuring you never miss a check-in.
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Track Attendance History: Students can effortlessly view their past attendance records, keeping them informed and accountable.
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

export default Student;

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
      mt: '15px',
      mb: 'auto',
      minWidth: 'auto',
    },
  },
  explore: {
    mt: ['20px', '20px', '20px', '20px', '40px'],
  },
};
