import {
  createModule,
  FetchHTTPClient,
  inject,
  resolve,
} from "@sabasayer/module.core";

export const movieModule = createModule();

movieModule.useDecorators(resolve);
movieModule.useDecorators(inject);

movieModule.registerApi(FetchHTTPClient, {
  hostName: "api.themoviedb.org",
  prefix: "3",
  protocol: "https",
});

console.log(movieModule);
