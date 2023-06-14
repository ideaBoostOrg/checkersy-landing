/** @jsx jsx */
import { jsx, Box, Container, Text } from 'theme-ui';
import Lecturer from 'sections/lecturer';
import Admin from 'sections/admin';
import Student from 'sections/student';


const Featureset = () => {
  return (
    <Box as="section" id="featureset" variant="section.featureset">
      <Container>
        <Student />
        <Lecturer />
        <Admin />
      </Container>
    </Box>
  );
};

export default Featureset;

