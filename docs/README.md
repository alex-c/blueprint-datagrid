# Blueprint Datagrid Docs

Contains documentation and examples for the Blueprint Datagrid library.

To run:

- Build the parent project with `npm run build`
- Run the docs app under `/docs` with `npm run start`

You might need to link the docs app's React to the parent project's React with `npm link`:

- Navigate to the docs app's `node_modules/react`
- Execute `npm link`
- Navigate to the parent project's main directory
- Execute `npm link react`

To deploy to Github Pages:

- Run `npm run deploy`
