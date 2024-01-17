module.exports = {
  roots: ["<rootDir>"],
  extensionsToTreatAsEsm: [".ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  modulePathIgnorePatterns: [
    "<rootDir>/test/__fixtures__",
    "<rootDir>/node_modules",
    "<rootDir>/dist",
  ],
  passWithNoTests: true,
  preset: "ts-jest",
  "^.+\\.tsx?$": [
    "ts-jest",
    {
      useESM: true,
    },
  ],
};
