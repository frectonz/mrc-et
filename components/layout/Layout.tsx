import { ReactNode } from "react";

// Components
import Header from "../header";
import Footer from "../footer/Footer";

const logoProps = {
  logoImage: "/logo.png",
};

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
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header
        links={navProps.links}
        logoImage={logoProps.logoImage}
        actionButtonLabel={controlsProps.actionButton}
      />
      {children}
      <Footer
        logoImage="/logo.png"
        licenseInfo={`Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio quod numquam amet accusantium sed explicabo deserunt
              fuga vero illo laudantium consectetur, nam perferendis eveniet
              aspernatur maxime placeat. Ex, porro! Ex!`}
        telephone="251940170100"
        email="fraol0912@gmail.com"
        location="4 killo, Addis Abeba"
        facebookLink="https://www.facebook.com"
        twitterLink="https://www.twitter.com"
        linkedInLink="https://www.linkedin.com"
      />
    </>
  );
}
