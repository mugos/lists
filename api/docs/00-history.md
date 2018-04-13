# Timeline
  - decide to use Graphql
  - decide to create isolated cli list app
  - decide that this package shoulb be migrated after finished
  - ponder on architeture

# worklog
  - http://dev.apollodata.com/tools/graphql-tools/resolvers.html
  -
# Notes
  - Create authentication proxy service
  - Create a isolated component of lists, it's more testable
  - try to create isolated components, only with business logic, remove http
    dependency, and make it more like a cli app, it is more testable
  - How would a make it less copled with database?
  - Uncle bob, on how to develop whiout database: https://www.youtube.com/watch?v=o_TH-Y78tt4&t=42s
  - "A good architerue allows majos decisions to be defered!", Uncle bob
  - maybe not pass storage arround? maybe the list class can handle it?
    the problem here is, change it because a process that needs to be done by hand
  - Interactor represent use case entity represent bussiness object(bussines rules goes in here)

# References
  - https://hapijs.com/tutorials
  - https://mochajs.org
  - https://yarnpkg.com/en/docs/usage
  - https://github.com/yurifrl/yarn-image
  - http://jsonapi.org/format/
  - https://github.com/alessioalex/karlsruhejs/blob/master/top-10-mistakes-nodejs-devs-make.md
  -  Like:
    *  https://github.com/lerna/lerna
  - Tests:
    * https://github.com/hapijs/hapi/blob/master/test/auth.js
    * http://mherman.org/blog/2015/09/10/testing-node-js-with-mocha-and-chai/#.WFrKTvFie01
    * https://medium.com/@thedon/how-test-your-hapi-api-with-lab-b72f6e8ed641#.2fv73loo3
    * https://jacky.wtf/weblog/testing-routes-with-hapi/
  - Graphql:
    - https://developer.github.com/early-access/graphql/explorer/
    - https://github.com/apollostack/graphql-server
    - https://github.com/mike866/hapi-graphql-tutorial
    - https://medium.com/entria/testing-a-graphql-server-using-jest-4e00d0e4980e#.9y0d3rfv9
    - https://github.com/nnance/express-hapi-graphql
    - http://dev.apollodata.com/tools/graphql-server/setup.html
    - https://github.com/apollostack/frontpage-server/blob/master/.babelrc


# Links
  - Prod url: http://35.185.11.233/

# Example
  - Create
    ```
    mutation myMut {
      createList(name: "asdasd", slug: "asdasd", img: "asdasd") {
        id
      }
    }
    ```

  - Query
    ```
    query myQuery {
      allLists {
        id
      }
    }
    ```
