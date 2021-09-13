/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  root: "cms",
  workspaceRoot: "/cms",
  mount: {
    "cms/public": { url: "/", static: true },
    "cms/src": { url: "/dist" },
  },
  plugins: ["@snowpack/plugin-typescript"],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
    out: "cms/dist",
  },
};
