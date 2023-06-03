# loopback-rest-cache

[![LoopBack](https://github.com/loopbackio/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

## Installation

Install LoopbackRestCacheComponent using `npm`;

```sh
$ [npm install | yarn add] loopback-rest-cache
```

## Basic Use

Configure and load LoopbackRestCacheComponent in the application constructor
as shown below.

```ts
import {LoopbackRestCacheComponent, LoopbackRestCacheComponentOptions, DEFAULT_LOOPBACK_REST_CACHE_OPTIONS} from 'loopback-rest-cache';
// ...
export class MyApplication extends BootMixin(ServiceMixin(RepositoryMixin(RestApplication))) {
  constructor(options: ApplicationConfig = {}) {
    const opts: LoopbackRestCacheComponentOptions = DEFAULT_LOOPBACK_REST_CACHE_OPTIONS;
    this.configure(LoopbackRestCacheComponentBindings.COMPONENT).to(opts);
      // Put the configuration options here
    });
    this.component(LoopbackRestCacheComponent);
    // ...
  }
  // ...
}
```
