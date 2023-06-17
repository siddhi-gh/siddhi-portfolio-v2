import { styled } from "@mui/material";

export const SectionWrapper = styled("section")(() => ({
  backgroundColor: "white",
  padding: "15rem 0",
  "@media (max-width: 1020px)": {
    padding: "8rem 0",
  },
}));

export const SectionContainer = styled("div")(() => ({
  maxWidth: "107rem",
  margin: "0 auto",
  padding: "0 4rem",
}));

export const AboutContent = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width: 1020px)": {
    gridTemplateColumns: "1fr",
    textAlign: "center",
  },
}));

export const ImageSideContainer = styled("div")(() => ({
  position: "relative",
  ".img-side span": {
    width: "19rem",
    height: "19rem",
    position: "absolute",
    backgroundColor: "white",
    bottom: "-33px",
    right: "33px",
    borderRadius: "50%",
  },
  "@media (max-width: 1020px)": {
    ".img-side span": {
      width: "17rem",
      height: "17rem",
      bottom: "-3px",
      right: "190px",
    },
  },
  "@media (max-width: 880px)": {
    ".img-side span": {
      bottom: "-3px",
      right: "100px",
    },
  },
  "@media (max-width: 750px)": {
    ".img-side span": {
      display: "none",
    },
  },
  ".img-side span img": {
    width: "19rem",
    animation: "rotate 9s linear infinite",
  },
  "@media (max-width: 1020px)": {
    ".img-side span img": {
      width: "17rem",
    },
  },
  "@keyframes rotate": {
    to: {
      transform: "rotate(360deg)",
    },
  },
}));

export const WorkEmoji = styles("div")(() => ({
  position: "absolute",
  zIndex: 10,
  width: "6rem !important",
  bottom: "35px",
  right: "98px",
  "@media (max-width: 1020px)": {
    bottom: "25px",
    right: "245px",
  },
  "@media (max-width: 880px)": {
    bottom: "57px",
    right: "156px",
  },
  "@media (max-width: 750px)": {
    display: "none",
  },
}));

export const ContentImage = styled("div")(() => ({
  width: "41rem",
  height: "35rem",
  borderRadius: "1.7rem",
  "@media (max-width: 1020px)": {
    marginBottom: "3.5rem",
  },
  "@media (max-width: 460px)": {
    width: "90%",
    height: "auto",
  },
}));

export const ContentText = styled("div")(() => ({
  paddingRight: "1.5rem",
  "@media (max-width: 1020px)": {
    maxWidth: "54rem",
    margin: "0 auto",
  },
  "@media (max-width: 400px)": {
    paddingRight: "0",
  },
  "& span": {
    WebkitTextDecoration: "underline #147efb",
    textDecoration: "underline #147efb",
  },
  "& h3": {
    fontSize: "1.7rem",
    color: "#147efb",
    textTransform: "uppercase",
    fontWeight: 700,
    marginBottom: "1rem",
  },
  "& h4": {
    fontSize: "2.5rem",
    fontFamily: '"Poppins", sans-serif',
    lineHeight: 1.4,
    marginBottom: "2rem",
    color: "#2d2e32",
  },
  "& p": {
    fontSize: "1.7rem",
    fontFamily: '"Mulish", sans-serif',
    color: "#767676",
    fontWeight: 500,
    lineHeight: 1.5,
  },
}));
