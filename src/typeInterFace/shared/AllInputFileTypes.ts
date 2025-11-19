import {
  type SxProps,
  type Theme,
} from '@mui/material';

// ---------- Types ----------
export type InputType =
  | 'textfield'
  | 'password'
  | 'search'
  | 'number'
  | 'select' | 'textarea';

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface AllInputsProps {
  inputType?: InputType;
  label?: string;
  placeholder?: string;
  value?: any;

  field?: any;
  field_id?: string;
  errors?: any;

  options?: SelectOption[];
  onChangeHandler?: (value: any) => void;

  otherStyle?: SxProps<Theme>;
}
