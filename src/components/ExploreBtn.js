import { useEffect } from "react";
import { Button } from "theme-ui";
import btnShape from "assets/images/cta-btn-shape-1.svg";
const ExploreBtn = ({ headerBtn = true }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    const link = document.createElement("link");
    link.setAttribute(
      "href",
      "https://assets.calendly.com/assets/external/widget.css"
    );
    link.setAttribute("rel", "stylesheet");
    head.appendChild(link);
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);

    return () => {
      head.removeChild(link);
      head.removeChild(script);
    };
  }, []);

  const openPopupWidget = () => {
    console.log("Clicked");
    window.Calendly.showPopupWidget(
      "https://calendly.com/ideaboostpvtltd/demo"
    );
  };

  return (
    <Button
      onClick={openPopupWidget}
      ml={2}
      sx={styles.explore}
      variant="buttons.primary"
    >
      Schedule a Demo
    </Button>
  );
};
const styles = {
  headerBtn: {
    backgroundColor: "rgba(0,0,0,0)",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "-0.16px",
    borderRadius: "5px",
    border: "2px solid",
    borderColor: "primary",
    color: "primary",
    padding: "8px 24px",
    display: ["none", null, null, null, "inline-block"],
    ml: ["0", null, null, "auto", "0"],
    mr: ["0", null, null, "20px", "0"],
    "&:hover": {
      color: "#fff",
    },
  },
  btn: {
    backgroundColor: "#fff",
    color: "primary",
    borderRadius: "5px",
    fontSize: [0, 1, null, null, null, null, "17px"],
    fontWeight: "700",
    letterSpacing: "0.1em",
    fontFamily: "body",
    padding: ["10px 24px", null, null, null, null, "15px 44px"],
    position: "relative",
    outline: "none",
    webkitAppearance: "none",
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      width: "73px",
      height: "26px",
      backgroundImage: `url(${btnShape})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      bottom: "calc(100% + 10px)",
      left: "50%",
      transform: "translateX(-50%)",
    },
    "&:after": {
      bottom: "auto",
      top: "calc(100% + 10px)",
      transform: "translateX(-50%) rotate(180deg)",
    },
    "&:hover": {
      backgroundColor: "black",
      color: "#fff",
    },
  },
  explore: {
    display: ["block", "block", "block", "block", "block"],
    bottom: 40,
    borderRadius: ["50px"],
    ml: ["20px"],
    backgroundColor: "#2ED573",
  },
};

export default ExploreBtn;
