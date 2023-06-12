/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeading from 'components/section-heading';


export default function Product() {
  return (
    <Box as="section" id="product" variant="section.product">
      <Container>
      <SectionHeading
          sx={styles.heading}
          title="Product"
          description="Checkersy is a cutting-edge attendance marking platform that revolutionizes the way attendance management is handled. With its QR-based solution, Checkersy brings efficiency and convenience to students, lecturers, and administrators alike. Here's how Checkersy transforms attendance management."
        />
        <Box>
          
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
    heading: {
      marginBottom: [60, 60, 60, 80],
    },
  };
  
  