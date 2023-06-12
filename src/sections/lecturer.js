/** @jsx jsx */
import { jsx, Box, Container, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { LearnMore } from 'components/link';
import Image from 'components/image';

import lecturer from 'assets/images/lecturer.jpg';
import checkFilledCircle from 'assets/images/icons/check-circle-filled.png';

const Lecturer = () => {
  return (
    <Box as="section" id="widgets" variant="section.widgets">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            <Image src={lecturer} alt="widgets" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Features for Lecturers"
              description="Simplify attendance marking and focus on what you love—teaching. Checkersy automates the attendance process, making it efficient and hassle-free."
            />
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Save time: Eliminate manual attendance, reduce admin work.
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Precise attendance: Reliable QR code scanning, minimal errors.            
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Real-time count: Instantly track class attendance.            
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Easy manual addition: Add attendance for students with device issues.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Lecturer;

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
