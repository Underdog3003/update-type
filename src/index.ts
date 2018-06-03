/* tslint:disable: max-classes-per-file */
import { CollapseModule } from './collapse/collapse.module';
import { TypeaheadModule } from './typeahead/typeahead.module';

export { listLocales } from './chronos/locale/locales';
export { setTheme } from './utils/theme-provider';

export { CollapseDirective, CollapseModule } from './collapse/index';

export {
  TypeaheadOptions,
  TypeaheadContainerComponent,
  TypeaheadDirective,
  TypeaheadMatch,
  TypeaheadModule
} from './typeahead/index';

export { OnChange, LinkedList, isBs3, Trigger, Utils } from './utils/index';

export {
  ComponentLoader,
  ComponentLoaderFactory,
  ContentRef
} from './component-loader/index';

export {
  Positioning,
  PositioningOptions,
  PositioningService,
  positionElements
} from './positioning/index';

export { defineLocale, getSetGlobalLocale, LocaleData } from './chronos/index';

export * from './locale';
