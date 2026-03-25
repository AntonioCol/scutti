// Disable react-i18next's global type augmentation that breaks React types.
// Caused by Sanity pulling react-i18next as a transitive dependency.
import "react";

declare module "react" {
  // Reset ReactI18NextChildren back to standard ReactNode
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES {}
}

declare module "react-i18next" {
  interface CustomTypeOptions {
    allowObjectInHTMLChildren: false;
  }
}
