import { defineConfig } from "vitest/config";
export default defineConfig({
    test: {
        exclude: [],
        testTimeout: 1000 * 30,
    },
});
