import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return <footer>{`Copyright © Rushed Forum S.A. ${year}`}</footer>;
};

export default Footer;
