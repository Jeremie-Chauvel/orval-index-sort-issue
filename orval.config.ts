import { defineConfig } from "orval";

export default defineConfig({
  test: {
    output: {
      mode: "tags",
      schemas: "api",
      mock: false,
      prettier: true,
      clean: true,
    },
    input: {
      target:
        "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/examples/v2.0/json/petstore-simple.json",
    },
  },
});
