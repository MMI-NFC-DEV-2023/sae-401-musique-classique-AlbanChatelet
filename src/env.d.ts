import type { TypedPocketBase } from "./pocketbase-typegen";

declare global {
  namespace App {
    interface Locals {
      pb: TypedPocketBase;
    }
  }
}
