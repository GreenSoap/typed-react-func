import { TypedOptions } from "typed.js";

export interface ITypedComponentProps extends TypedOptions {
  className?: string,
  isStopped?: boolean,
  hideCursorBeforeStart?: boolean
}