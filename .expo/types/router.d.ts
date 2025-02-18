/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/config/expence_tracker_interface`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/history` | `/history`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/home` | `/home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/report` | `/report`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/settings` | `/settings`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/transaction` | `/transaction`; params?: Router.UnknownInputParams; } | { pathname: `/components/botton-sheet/bottom-sheet`; params?: Router.UnknownInputParams; } | { pathname: `/components/button/button`; params?: Router.UnknownInputParams; } | { pathname: `/components/date-picker/date-picker`; params?: Router.UnknownInputParams; } | { pathname: `/components/dropdown/dropdown`; params?: Router.UnknownInputParams; } | { pathname: `/components/icons/icons`; params?: Router.UnknownInputParams; } | { pathname: `/components/label/label`; params?: Router.UnknownInputParams; } | { pathname: `/components/text-input/text-input`; params?: Router.UnknownInputParams; } | { pathname: `/components/time-picker/time-picker`; params?: Router.UnknownInputParams; } | { pathname: `/components/transaction-components/transaction-header`; params?: Router.UnknownInputParams; } | { pathname: `/config/expence_tracker_enums`; params?: Router.UnknownInputParams; } | { pathname: `/config`; params?: Router.UnknownInputParams; } | { pathname: `/hooks/bottom-sheet-hooks`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/config/expence_tracker_interface`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/history` | `/history`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/home` | `/home`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/report` | `/report`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/settings` | `/settings`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/transaction` | `/transaction`; params?: Router.UnknownOutputParams; } | { pathname: `/components/botton-sheet/bottom-sheet`; params?: Router.UnknownOutputParams; } | { pathname: `/components/button/button`; params?: Router.UnknownOutputParams; } | { pathname: `/components/date-picker/date-picker`; params?: Router.UnknownOutputParams; } | { pathname: `/components/dropdown/dropdown`; params?: Router.UnknownOutputParams; } | { pathname: `/components/icons/icons`; params?: Router.UnknownOutputParams; } | { pathname: `/components/label/label`; params?: Router.UnknownOutputParams; } | { pathname: `/components/text-input/text-input`; params?: Router.UnknownOutputParams; } | { pathname: `/components/time-picker/time-picker`; params?: Router.UnknownOutputParams; } | { pathname: `/components/transaction-components/transaction-header`; params?: Router.UnknownOutputParams; } | { pathname: `/config/expence_tracker_enums`; params?: Router.UnknownOutputParams; } | { pathname: `/config`; params?: Router.UnknownOutputParams; } | { pathname: `/hooks/bottom-sheet-hooks`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/config/expence_tracker_interface${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/history${`?${string}` | `#${string}` | ''}` | `/history${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/home${`?${string}` | `#${string}` | ''}` | `/home${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/report${`?${string}` | `#${string}` | ''}` | `/report${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/settings${`?${string}` | `#${string}` | ''}` | `/settings${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/transaction${`?${string}` | `#${string}` | ''}` | `/transaction${`?${string}` | `#${string}` | ''}` | `/components/botton-sheet/bottom-sheet${`?${string}` | `#${string}` | ''}` | `/components/button/button${`?${string}` | `#${string}` | ''}` | `/components/date-picker/date-picker${`?${string}` | `#${string}` | ''}` | `/components/dropdown/dropdown${`?${string}` | `#${string}` | ''}` | `/components/icons/icons${`?${string}` | `#${string}` | ''}` | `/components/label/label${`?${string}` | `#${string}` | ''}` | `/components/text-input/text-input${`?${string}` | `#${string}` | ''}` | `/components/time-picker/time-picker${`?${string}` | `#${string}` | ''}` | `/components/transaction-components/transaction-header${`?${string}` | `#${string}` | ''}` | `/config/expence_tracker_enums${`?${string}` | `#${string}` | ''}` | `/config${`?${string}` | `#${string}` | ''}` | `/hooks/bottom-sheet-hooks${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/config/expence_tracker_interface`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/history` | `/history`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/home` | `/home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/report` | `/report`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/settings` | `/settings`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/transaction` | `/transaction`; params?: Router.UnknownInputParams; } | { pathname: `/components/botton-sheet/bottom-sheet`; params?: Router.UnknownInputParams; } | { pathname: `/components/button/button`; params?: Router.UnknownInputParams; } | { pathname: `/components/date-picker/date-picker`; params?: Router.UnknownInputParams; } | { pathname: `/components/dropdown/dropdown`; params?: Router.UnknownInputParams; } | { pathname: `/components/icons/icons`; params?: Router.UnknownInputParams; } | { pathname: `/components/label/label`; params?: Router.UnknownInputParams; } | { pathname: `/components/text-input/text-input`; params?: Router.UnknownInputParams; } | { pathname: `/components/time-picker/time-picker`; params?: Router.UnknownInputParams; } | { pathname: `/components/transaction-components/transaction-header`; params?: Router.UnknownInputParams; } | { pathname: `/config/expence_tracker_enums`; params?: Router.UnknownInputParams; } | { pathname: `/config`; params?: Router.UnknownInputParams; } | { pathname: `/hooks/bottom-sheet-hooks`; params?: Router.UnknownInputParams; };
    }
  }
}
