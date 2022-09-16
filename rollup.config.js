import resolve from "@rollup/plugin-node-resolve";

export default [
  {
    input: "index.js",
    output: [
      {
        format: "esm",
        file: "bundle-index.js",
      },
    ],
    plugins: [resolve()],
  },

  {
    input: "viewer.js",
    output: [
      {
        format: "esm",
        file: "bundle-viewer.js",
      },
    ],
    plugins: [resolve()],
  },
];
