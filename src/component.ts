import {
  Application,
  injectable,
  Component,
  config,
  ContextTags,
  CoreBindings,
  inject,
} from '@loopback/core';
import {LoopbackRestCacheComponentBindings} from './keys'
import {DEFAULT_LOOPBACK_REST_CACHE_OPTIONS, LoopbackRestCacheComponentOptions} from './types';

// Configure the binding for LoopbackRestCacheComponent
@injectable({tags: {[ContextTags.KEY]: LoopbackRestCacheComponentBindings.COMPONENT}})
export class LoopbackRestCacheComponent implements Component {
  constructor(
    @inject(CoreBindings.APPLICATION_INSTANCE)
    private application: Application,
    @config()
    private options: LoopbackRestCacheComponentOptions = DEFAULT_LOOPBACK_REST_CACHE_OPTIONS,
  ) {}
}
