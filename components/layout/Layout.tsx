import { ReactNode } from "react";

// Components
import Header from "./header";
import Footer from "./footer/Footer";

// Interfaces
import { NavLink } from "../../interfaces/NavLink";
import { FooterData } from "../../interfaces/FooterData";

const links: NavLink[] = [
  {
    name: "Home",
    href: "/",
    icon: "/icons/hospital.svg",
  },
  {
    name: "Tests",
    href: "/tests",
    icon: "/icons/microscope.svg",
  },
  {
    name: "Blogs",
    href: "/blogs",
    icon: "/icons/newspaper.svg",
  },
  {
    name: "About",
    href: "/about",
    icon: "/icons/heart.svg",
  },
  {
    name: "Contact",
    href: "/contact",
    icon: "/icons/contact.svg",
  },
];

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
      <Header links={links} actionButtonLabel={controlsProps.actionButton} />
      {children}
      <Footer
        logoImage="/logo.webp"
        email={footerData.email}
        telephone={footerData.phone}
        location={footerData.address}
        twitterLink={footerData.twitter}
        facebookLink={footerData.facebook}
        linkedInLink={footerData.linkedin}
        licenseInfo={footerData.licenseInformation}
        recommendedLinks={footerData.recommendedLinks}
      />
    </>
  );
}
