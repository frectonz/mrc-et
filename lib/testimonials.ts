import { join } from "path";
import { parse } from "yaml";
import { readdirSync, readFileSync } from "fs";

import { Testimonial } from "../interfaces/Testimonial";

const TESTIMONIALS_DIR = join(process.cwd(), "/data/testimonials");

export function getAllTestimonials(): Testimonial[] {
  return readdirSync(TESTIMONIALS_DIR).map((serviceFile) =>
    readTestimonialFile(join(TESTIMONIALS_DIR, serviceFile))
  );
}

export function readTestimonialFile(serviceFile: string): Testimonial {
  const content = readFileSync(serviceFile, "utf-8");
  const parsed = parse(content);

  return {
    personTitle: parsed.person_title,
    personImage: parsed.person_image,
    personSubtitle: parsed.person_subtitle,
    testimonial: parsed.testimonial,
  };
}
