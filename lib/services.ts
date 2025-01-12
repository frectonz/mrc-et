import { join } from "path";
import { parse } from "yaml";
import { readdirSync, readFileSync } from "fs";

import { ServiceData } from "../interfaces/ServiceData";

const SERVICES_DIR = join(process.cwd(), "/data/services");

export function getAllServices(): ServiceData[] {
  return readdirSync(SERVICES_DIR).map((serviceFile) =>
    readServiceFile(serviceFile)
  );
}

export function readServiceFile(serviceFile: string): ServiceData {
  const content = readFileSync(join(SERVICES_DIR, serviceFile), "utf-8");
  const parsed = parse(content);

  return {
    code: parsed.code,
    title: parsed.title,
    image: parsed.image,
    bgImage: parsed.bgImage,
    description: parsed.description,
  };
}
