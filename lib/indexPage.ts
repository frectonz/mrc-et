import { join } from "path";
import { readFileSync } from "fs";
import { FooterData } from "../interfaces/FooterData";

const indexPage = join(process.cwd(), "data", "pages", "index.json");

export interface IndexPageData extends FooterData {
  headlineTitle: string;
  headlineDetail: string;
  headlineImage: string;

  goToTestsLabel: string;
  goToContactPageLabel: string;
}

export const readIndexPageData = (): IndexPageData => {
  const content = readFileSync(indexPage, "utf-8");

  const data = JSON.parse(content);

  return {
    headlineTitle: data.headline_title,
    headlineDetail: data.headline_detail,
    headlineImage: data.headline_image,

    goToTestsLabel: data.go_to_tests_page_label,
    goToContactPageLabel: data.go_to_contact_page_label,

    phone: data.phone,
    email: data.email,
    address: data.address,
    twitter: data.twitter,
    facebook: data.facebook,
    linkedin: data.linkedin,

    licenseInformation: data.license_information,
  };
};
