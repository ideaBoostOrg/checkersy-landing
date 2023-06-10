/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
const about = [
  {
    title: 'QR Code Integration',
    contents: (
      <div>
        Enable seamless attendance marking using QR codes for efficient and accurate tracking.
      </div>
    ),
  },
  {
    title: 'User-Friendly Interface',
    contents: (
      <div>
        Intuitive and easy-to-use platform for students, lecturers, and administrators.
      </div>
    ),
  },
  {
    title: `Real-time Reporting`,
    contents: (
      <div>
        Access comprehensive attendance reports instantly for effective monitoring and analysis.
      </div>
    ),
  },
  {
    title: `Admin Control Panel`,
    contents: (
      <div>
        Empower administrators with advanced management tools and permissions.
      </div>
    ),
  },
];
export default function About() {
  return (
    <Box as="section" id="about" variant="section.about">
      <Container>
        <SectionHeader
          // title="Do you have any quesiton"
          description="Checkersy is a cutting-edge attendance marking platform that revolutionizes the way attendance 
          management is handled. With its QR-based solution, Checkersy brings efficiency and convenience to students, 
          lecturers, and administrators alike. Here's how Checkersy transforms attendance management:"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={about} />
        </Box>
      </Container>
    </Box>
  );
}
