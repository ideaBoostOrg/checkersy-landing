/** @jsx jsx */
import { jsx, Box, Text, Container } from "theme-ui";
import Logo from 'assets/images/ideaboost.png';
import { Link } from 'components/link';
import Image from 'components/image';
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import data from "./footer.data";

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        {/* End of footer widgets area */}
        <Box sx={styles.footer.footerBottomArea}>
          <Link path="/">
            <Image src={Logo} alt="Logo" width="220px" />
          </Link>
          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map(({ path, label }, i) => (
                <ScrollLink
                  activeClass="active"
                  to={path}
                  key={i}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  sx={styles.footer.link}
                >
                  {label}
                </ScrollLink>
              ))}
            </nav>
          </Box>
          <Box>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/ideaboostlab"
            >
              <FaLinkedin size={18} sx={styles.footer.icons} />
            </a>
            <a target="_blank" href="https://github.com/ideaBoostOrg">
              <FaGithub size={18} sx={styles.footer.icons} />
            </a>
            <a target="_blank" href="https://medium.com/@ideaboosts">
              <FaMedium size={18} sx={styles.footer.icons} />
            </a>
          </Box>
          <Text sx={styles.footer.copyright}>
            Copyright by {new Date().getFullYear()} ideaBoost
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      // borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      pt: [5, null, 4],
      pb: ["40px", null, "0"],
      textAlign: "center",
      flexDirection: "column",
    },
    menus: {
      mt: [1, 1],
      mb: 2,
      nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      },
    },
    icons: {
      mr:"10px",
      color: "black",
      cursor:"pointer",
      ":hover": {
        color: "#007dfe",
      },
    },
    link: {
      fontSize: [1, "15px"],
      color: "text",
      fontWeight: "400",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ":hover": {
        color: "primary",
      },
    },
    copyright: {
      fontSize: [1, "15px"],
      width: "100%",
    },
  },
  widgets: {
    py: [8, null, 9],
    px: [4, 0, 3, null, 7, 10],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: ["40px 0", null, "45px 30px", null, "60px 30px", "50px 90px"],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      "repeat(3,1fr)",
    ],
    widgetItem: {
      textAlign: "center",
    },
    infoWrapper: {
      mt: [2, 3, null, 2, 4],
      mb: -1,
      h3: {
        fontSize: [3, null, null, 2, 3, 4],
        color: "heading_secondary",
        lineHeight: 1.4,
        fontWeight: 700,
        mb: [2, null, null, null, "15px"],
      },

      p: {
        fontSize: [1, "15px"],
        fontWeight: 400,
        lineHeight: 2,
      },
    },
  },
};