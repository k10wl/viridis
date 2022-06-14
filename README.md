<h1 align="center">
    Viridis
</h1>

___
## About:
**Viridis** is monorepo MERN project that helps with cooking.  

App was created to help with picking recipes using available or
preferable ingredients as filters.
Also, it displays all available recipes and
sorts them by categories.
Admins can add, delete or edit recipes.
Users can save recipes in favorite tab.

___
## To install and run application locally:

#### Clone project and install dependencies:
1.`git clone https://github.com/k10wl/viridis`  
2.`cd viridis`  
3.`yarn`  

#### Populate .env files with required info.
Server application require `.env` file to work, set it up before launching application.  
Server contains `.env-example` file.
To correctly setup project environmental variables copy example file
and populate it with real data.

#### Information about available actions and scripts:

| Action                                              | Script             |
|-----------------------------------------------------|--------------------|
| Start server and client in parallel for development | `yarn dev`         |
| Start development server only                       | `yarn server dev`  |
| Start development client only                       | `yarn client dev`  |
| Run client unit tests                               | `yarn client test` |

## Additional info:
Design was inspired by
[Daria Dainiak](https://www.behance.net/dariadaini489b)
creation -
[E-Commerce-Online-Coffee-Shop](https://www.behance.net/gallery/135930329/E-Commerce-Online-Coffee-Store)
