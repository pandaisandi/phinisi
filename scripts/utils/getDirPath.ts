import { resolve, join } from "path";

export const rootDir = resolve(__dirname, "..", "..");

export const scriptsDir = join(rootDir, "..");

export const packagesDir = join(rootDir, "packages");

export const buildDir = join(rootDir, "build");
