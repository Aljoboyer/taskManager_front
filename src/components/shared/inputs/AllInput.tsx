import React from 'react';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  type SelectChangeEvent,
  TextField,
  type SxProps,
  type Theme,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { COLORS } from '../../../theme/colors';
import type { AllInputsProps } from '../../../typeInterFace/shared/AllInputFileTypes';

export const customStyle: SxProps<Theme> = {
  backgroundColor: 'white',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ccc',
    },
    '&:hover fieldset': {
      borderColor: COLORS.baseColor,
    },
    '&.Mui-focused fieldset': {
      borderColor: COLORS.baseColor,
    },
  },
  '& .MuiInputLabel-root': {
    color: 'gray',
  },
  '& label.Mui-focused': {
    color: COLORS.baseColor,
  },
};

export const selectCustomstyle: any= {
  '& .MuiInputBase-root': {
    height: '45px',
    minHeight: '45px',
  },
  '& input': {
    padding: '0 8px',
    fontSize: '0.875rem',
  },
  '& label': {
    fontSize: '15px',
  },
};

export default function AllInputs({
  inputType = 'textfield',
  label = 'Input',
  placeholder,
  value,
  field,
  field_id = '',
  errors = {},
  options,
  onChangeHandler,
  otherStyle,
}: AllInputsProps) {
  
  const [showPassword, setShowPassword] = React.useState(false);

  // ---------------- PASSWORD INPUT ----------------
  if (inputType === 'password') {
    return (
      <div className="w-full">
        <TextField
          {...field}
          fullWidth
          label={label}
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          size="small"
          sx={{ ...otherStyle, ...customStyle }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword((p) => !p)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {errors[field_id] && (
          <p className="text-psm text-red-500">{errors[field_id]?.message}</p>
        )}
      </div>
    );
  }

  // ---------------- SEARCH INPUT ----------------
  if (inputType === 'search') {
    return (
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: { xs: '100%', md: '100%' },
          ...otherStyle,
        }}
        elevation={1}
        variant="outlined"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={placeholder}
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => onChangeHandler?.(e.target.value)}
        />
        <IconButton type="button" sx={{ p: '10px', backgroundColor: 'white' }}>
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }

  // ---------------- NUMBER INPUT ----------------
  if (inputType === 'number') {
    return (
      <div className="w-full">
        <TextField
          {...field}
          type="number"
          placeholder={placeholder}
          fullWidth
          label={label}
          variant="outlined"
          size="small"
          sx={{ ...customStyle, ...otherStyle }}
        />
        {errors[field_id] && (
          <p className="text-psm text-red-500">{errors[field_id]?.message}</p>
        )}
      </div>
    );
  }

  // ---------------- SELECT INPUT ----------------
  if (inputType === 'select') {
    return (
      <FormControl
        sx={{ ...customStyle, ...otherStyle, ...selectCustomstyle }}
        fullWidth
      >
        <InputLabel>{label}</InputLabel>
        <Select
          label={label}
          value={value ?? ''}
          onChange={(e: SelectChangeEvent) => onChangeHandler?.(e.target.value)}
        >
          {options?.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  // ---------------- DEFAULT TEXTFIELD ----------------
  return (
    <div className="w-full">
      <TextField
        {...field}
        placeholder={placeholder}
        fullWidth
        label={label}
        variant="outlined"
        size="small"
        sx={{ ...customStyle, ...otherStyle }}
      />
      {errors[field_id] && (
        <p className="text-psm text-red-500">{errors[field_id]?.message}</p>
      )}
    </div>
  );
}
