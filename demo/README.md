# Blueprint Datagrid Demo

Contains examples of the Blueprint Datagrid features, using a local build for quick testing cycles during development.

To run:

- Build the parent project with `npm run build`
- Run the demo app under `/demo` with `npm run start`

You might need to link the demo app's React to the parent project's React with `npm link`:

- Navigate to the demo app's `node_modules/react`
- Execute `npm link`
- Navigate to the parent project's main directory
- Execute `npm link react`
