import { module } from "@prisma/composer";
import expressApiService from "./service.js";

export default module("express-api", ({ provision }) => {
  provision(expressApiService, { id: "expressapi" });
});
