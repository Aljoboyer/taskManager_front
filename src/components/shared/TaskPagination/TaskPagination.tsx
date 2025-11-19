import { Pagination, Select, MenuItem, Box, Typography, type SelectChangeEvent } from '@mui/material';
import { COLORS } from '../../../theme/colors';

interface TaskPaginationProps {
  totalPage: number;
  perPage: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  handlePerPageChange: (event: SelectChangeEvent<number>) => void;
}

export default function TaskPagination({
  totalPage,
  handlePageChange,
  handlePerPageChange,
  perPage,
}: TaskPaginationProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: { xs: 'wrap', md: 'nowrap' },
      }}
      gap={2}
    >
      <Box display="flex" alignItems="center" gap={1}>
        <Typography sx={{ color: COLORS.grey500, fontSize: '14px' }}>
          Items per page:
        </Typography>

        <Select<number>
          value={perPage}
          onChange={handlePerPageChange}
          size="small"
        >
          {[5, 10, 20, 50].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <Pagination
        count={totalPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        sx={{
          marginTop: { xs: '5px', md: '0px' },
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: `${COLORS.baseColor} !important`,
            color: `${COLORS.white} !important`,
            '&:hover': {
              backgroundColor: `${COLORS.baseColor} !important`,
            },
          },
        }}
      />
    </Box>
  );
}
