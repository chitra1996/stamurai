module.exports = {
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json",
        },
    },
    moduleFileExtensions: ["ts", "js", "json"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    modulePathIgnorePatterns: ["dist"],
    testMatch: ["**/__tests__/*.test.(ts|js)"],
    testEnvironment: "node",
};
