import { ReactNode } from "react";

// Components
import Header from "./header";
import Footer from "./footer/Footer";
import { FooterData } from "../../interfaces/FooterData";
import { NavLink } from "../../interfaces/NavLink";

const links: NavLink[] = [
  {
    name: "Home",
    href: "/",
    icon: "/icons/hospital.svg",
  },
  {
    name: "Tests",
    href: "/tests",
    icon: "/icons/medicine.svg",
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
    icon: "/icons/microscope.svg",
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
