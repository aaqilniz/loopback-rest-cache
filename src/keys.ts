import {BindingKey, CoreBindings} from '@loopback/core';
import {LoopbackRestCacheComponent} from './component';

/**
 * Binding keys used by this component.
 */
export namespace LoopbackRestCacheComponentBindings {
  export const COMPONENT = BindingKey.create<LoopbackRestCacheComponent>(
    `${CoreBindings.COMPONENTS}.LoopbackRestCacheComponent`,
  );
}
