# Hub development

From the repository root: `cd docs`, `npm install`, `node scripts/snapshot.mjs`, `npm run build`. Initial lockfile generation and build verification are pending. The snapshot contains public issue titles, numbers, states and links only. No secrets are embedded. The placeholder URL must be replaced before any approved deployment. No separate deployment workflow is authorized.

## Application foundation

Pinned official starter revision: [50a9f6c1011183b6a005eda47625f910ea99fb80](https://github.com/laravel/react-starter-kit/tree/50a9f6c1011183b6a005eda47625f910ea99fb80). 179 text files were verified at import; the project retains its README and single CI workflow. Binary icons are omitted and the upstream SVG is retained. PHP 8.5 and Node 24 are candidate runtime versions pending CI evidence.

Use PostgreSQL 18 with separate local development and disposable test databases (muzik and muzik_test). Set local credentials in an untracked .env; never use production credentials for tests. Public registration is disabled using Fortify. No default real account provisioning or seeding is authorized.

Once genuine lockfiles exist, use composer install and npm ci, configure .env, generate an application key, migrate the local database and run npm run build. Run composer ci:check against a disposable test database. These commands are documented, not executed evidence.
