import { join } from "path";
import { parse } from "yaml";
import { readdirSync, readFileSync } from "fs";

import { TestData } from "../interfaces/Test";

const TESTS_DIR = join(process.cwd(), "/data/tests");

export function getAllTests(): TestData[] {
  return readdirSync(TESTS_DIR).map((testFile) =>
    readTestFile(join(TESTS_DIR, testFile))
  );
}

export function readTestFile(testFile: string): TestData {
  const content = readFileSync(testFile, "utf-8");
  const parsed = parse(content);

  return {
    code: parsed.test_code,
    name: parsed.test_name,
    method: parsed.method,
    specimen: parsed.specimen,
    specimenVolume: parsed.specimen_volume,
    temperature: parsed.temperature,
    frequency: parsed.frequency,
    timePeriod: parsed.reported_after,
    price: parsed.price_birr,
  };
}
