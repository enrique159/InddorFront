import type { RemovableRef } from "@vueuse/shared";

export type MainState = {
  rememberSession: RemovableRef<string>;
}