import { ReactNode } from "react";

// Components
import Header from "../header";
import Footer from "../footer/Footer";
import { FooterData } from "../../interfaces/FooterData";

const navProps = {
  links: [
    {
      name: "Tests",
      href: "/tests",
    },
    {
      name: "Blogs",
      href: "/blogs",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ],
};

const controlsProps = {
  actionButton: "Book A Test",
};

interface LayoutProps {
  children?: ReactNode;
  footerData: FooterData;
}

export default function Layout({ children, footerData }: LayoutProps) {
  return (
    <>
      <Header
        links={navProps.links}
        actionButtonLabel={controlsProps.actionButton}
      />
      {children}
      <Footer
        logoImage="/logo.webp"
        licenseInfo={footerData.licenseInformation}
        telephone={footerData.phone}
        email={footerData.email}
        location={footerData.address}
        facebookLink={footerData.facebook}
        twitterLink={footerData.twitter}
        linkedInLink={footerData.linkedin}
      />
    </>
  );
}
