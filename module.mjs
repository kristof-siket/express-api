// @ts-check
import { module } from "@prisma/composer";
import expressApiService from "./service.mjs";

export default module("express-api", ({ provision }) => {
  provision(expressApiService, { id: "expressapi" });
});
