import { title } from "radash";
import type { ReactNode } from "react";
import type { Except } from "type-fest";

export type Option<TValue extends string> = {
  description?: ReactNode;
  icon?: ReactNode;
  label: ReactNode;
  value: TValue;
};

export type OptionMap<
  TValue extends string,
  TOption extends Option<TValue>,
> = Partial<Record<TValue, Partial<Except<TOption, "value">>>>;

export type MakeOptionArgs<
  TValue extends string,
  TOption extends Option<TValue>,
> = {
  optionMap?: OptionMap<TValue, TOption>;
  // eslint-disable-next-line no-unused-vars
  makeLabel?: (value: TValue) => ReactNode;
};

export const _makeOption =
  <TValue extends string, TOption extends Option<TValue>>({
    makeLabel = title,
    optionMap = {},
  }: MakeOptionArgs<TValue, TOption>) =>
  (value: TValue) => {
    const option = optionMap[value];

    const label = option?.label || makeLabel(value);

    return {
      ...option,
      label,
      value,
    } as TOption;
  };
