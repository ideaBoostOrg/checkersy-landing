/** @jsx jsx */
import { jsx, Container, Box, Heading, } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import UltimateFeature from 'components/cards/ultimate-feature';

import qr from 'assets/images/icons/qr.png';
import adminpanel from 'assets/images/icons/admin.png';
import report from 'assets/images/icons/report.png';
import userfriendly from 'assets/images/icons/userfriendly.png';

const data = [
  {
    id: 1,
    icon: qr,
    title: 'QR Code Integration',
    description: 'Enable seamless attendance marking using QR codes for efficient and accurate tracking.',
  },
  {
    id: 2,
    icon: adminpanel,
    title: 'User-Friendly Interface',
    description: 'Intuitive and easy-to-use platform for students, lecturers, and administrators.',
  },
  {
    id: 3,
    icon: report,
    title: 'Real-time Reporting',
    description: 'Access comprehensive attendance reports instantly for effective monitoring and analysis.',
  },
  {
    id: 4,
    icon: userfriendly,
    title: 'Admin Control Panel',
    description: `Empower administrators with advanced management tools and permissions.`,
  },
];
export default function About() {
  return (
    <Box as="section" id="about" variant="section.about">
      <Container>
      <Heading sx={styles.title}>
        Introducing Checkersy
      </Heading>
      <SectionHeading
          sx={styles.heading}
          description="Effortless Attendance Management. Our QR-based solution revolutionizes how educational institutions 
          track attendance. Students simply scan the QR code to mark their attendance accurately and instantly. Real-time 
          reporting provides valuable insights for educators. Administrators have full control via an intuitive panel to 
          manage courses, permissions, and generate comprehensive reports. Seamlessly integrating with existing systems, 
          Checkersy ensures a smooth transition. Automated notifications keep everyone informed. Say goodbye to manual 
          processes and hello to streamlined attendance management. Experience the power of Checkersy today. Get started now."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <UltimateFeature key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  heading: {
    maxWidth: "950px",
    marginBottom: [60, 60, 60, 80],
  },
  features: {
    gap: ["35px 60px", 60, 60, 40, 30, 60],
    display: ["grid", "grid"],
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(2, 1fr)",
      "repeat(4, 1fr)",
    ],
  },
  title: {
    fontWeight: "bold",
    fontSize: ["20px", null, null, null, "24px", "24px", "36px"],
    lineHeight: 1.33,
    letterSpacing: "-1px",
    color: "textSecondary",
    textAlign: "center",
    mb: ["14px", "16px"],
  },
};

