# Viridis

___

## About:

**Viridis** is a monorepo MERN project that helps with cooking.

App was created to help with picking recipes using available or preferable ingredients as filters.
Also, it displays all available recipes and sorts them by categories.
Admins can add, delete or edit recipes.
Users can save recipes in favorite tab.

___

## Development:

#### Pre-requirements:

Some development scripts require [pm2](https://www.npmjs.com/package/pm2).
If you are planning to use them, install [pm2](https://www.npmjs.com/package/pm2) globally.

#### Clone project and install dependencies:

1.`git clone https://github.com/k10wl/viridis`  
2.`cd viridis`  
3.`yarn install`

#### Populate .env files with required info.

Applications require `.env` file to work, set them up before launching applications.   
Make sure that all packages, that have `.env-example` also have `.env` file next to it.   
To correctly setup project environmental variables, copy `.env-exmaple` file and populate it with data.

### Workspaces short information:

Workspaces are contained in `packages` folder.

| Workspace                          | Shortcut      |
|------------------------------------|---------------|
| **_Client_** React application     | `yarn client` |
| **_Server_** created using Express | `yarn server` |
| **_Shared_** types and constants   | `yarn shared` |

### Local development:

You can either use [pm2](https://www.npmjs.com/package/pm2) for local development or vanilla scripts.   
Using vanilla way may be a bit slower because of the parallel processes.   
Anyway, here are two tables.
The first table requires [pm2](https://www.npmjs.com/package/pm2).
The second one does not.   
What should you use?
Up to you ✨.

| Action that use [pm2](https://www.npmjs.com/package/pm2) | Script               |
|----------------------------------------------------------|----------------------|
| Run client, server and storybook processes               | `yarn dev`           |
| Run client only                                          | `yarn dev:client`    |
| Run server only                                          | `yarn dev:server`    |
| Run storybook only                                       | `yarn dev:storybook` |
| Stop all processes                                       | `yarn dev:stop`      |
| Restart all processes                                    | `yarn dev:restart`   |
| Monitor  processes                                       | `yarn dev:monitor`   |

| Vanilla actions           | Script                  |
|---------------------------|-------------------------|
| Run client without pm2    | `yarn client dev`       |
| Run server without pm2    | `yarn server dev`       |
| Run storybook without pm2 | `yarn client storybook` |

### CI:

To ease maintenance, this project uses [husky](https://www.npmjs.com/package/husky).   
Make sure your code passes ESLint requirements and the tests are passing.
If any of the mentioned above conditions fails - you won't be able to commit.

| Action                                               | Script             |
|------------------------------------------------------|--------------------|
| Run all tests                                        | `yarn test`        |
| Run client tests                                     | `yarn client:test` |
| Run server tests                                     | `yarn server:test` |
| Check for errors and enforce code style using ESLint | `yarn eslint:fix`  |

## Additional info:

Design was inspired by
[Daria Dainiak](https://www.behance.net/dariadaini489b)
creation -
[E-Commerce-Online-Coffee-Shop](https://www.behance.net/gallery/135930329/E-Commerce-Online-Coffee-Store)
