import React from "react";
import { Box, Container, Heading, Button } from "theme-ui";
import BgShape from "assets/images/cta-shape-1.svg";
import CalendlyButton from "components/CalendlyButton";
const CallToAction = () => {
  return (
    <Box sx={styles.wrapper}>
      <Container sx={styles.container}>
        <Box sx={styles.inner}>
          <Heading as="h3">
            Ready to take the next step with our software solutions?
          </Heading>
          <Box sx={styles.btnWrapper}>
            <CalendlyButton headerBtn={false} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CallToAction;

const styles = {
  wrapper: {},
  inner: {
    padding: ["45px 30px 50px", null, null, "45px 50px", null, "45px 70px"],
    mt: [0, null, null, null, "-80px"],
    position: "relative",
    zIndex: "10",
    backgroundColor: "primary",
    backgroundImage: ["none", null, null, null, null, `url(${BgShape})`],
    backgroundRepeat: "no-repeat",
    backgroundPosition: "60% center",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    textAlign: ["center", null, null, "left"],
    flexDirection: ["column", null, null, "row"],
    justifyContent: ["center", null, null, "space-between"],
    h3: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: [5, null, 4, null, null, 3, 4],
      lineHeight: [1.24, null, 1.53],
      padding: ["0 15px", "0"],
      marginBottom: ["50px", null, null, "0"],
      br: {
        display: ["none", null, null, "inherit"],
      },
    },
  },
};
