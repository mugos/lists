# References
- https://github.com/archfirst/node-rest-template-lite
- https://github.com/archfirst/node-rest-template
- https://github.com/archfirst/manage-my-money-server

E = Event arrives from the outside world

port(E)

port E => {
// port uses a technology specific adaptaer to convert into usable procedure
// and passes to aplications
tecParse(E) |> App
}

External :: Event |>
Port EntryPoint |>
Event Parse For Tecnology expecific |>
App

When the App has to send
AppEvent |>
Port EntryPoint |>
Adapter |>
External


// Facebook adapter can post something on Facebook, User Interface adapter can be a React component
// https://medium.com/@Killavus/hexagonal-architecture-in-javascript-applications-and-how-it-relates-to-flux-349616d1268d#.77trytdg5

/src
-- /adapter
    -- /api.js
    -- /resolvers.js
    -- /sample.js
    -- /schema.js
-- /app
    -- /list.js
    -- /storage.js

- The `adapter` layer `adapts` interactions from the external world to the application layer
- The `app` handles the domain objects behaviour
    - `list.js` is the main api, it espose the the functions
    - `storage.js` handles the persistence it has methods that talk to redis
      i will switch it to the real redis later
