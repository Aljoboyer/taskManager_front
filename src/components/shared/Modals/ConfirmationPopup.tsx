import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Buttons } from '../buttons/Buttons';
import { COLORS } from '../../../theme/colors';

interface ConfirmationPopupProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  confirmHandler: () => void;
  note: string;
  setNote?: (note: string) => void;
  loading?: boolean;
  sendBtnShow?: boolean;
  modalTitle?: string;
  title1?: string;
  show?: boolean;
}

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({
  open,
  setOpen,
  confirmHandler,
  note,
  setNote,
  loading = false,
  sendBtnShow = true,
  modalTitle = '',
  title1 = 'Send',
  show
}) => {

  const handleClose = () => setOpen(false);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      PaperProps={{
        sx: {
          borderRadius: 3,
          backgroundColor: 'white',
          border: `2px solid ${COLORS.baseColor}`,
        },
      }}
    >
      <DialogTitle
        id="responsive-dialog-title"
        sx={{ pr: 5 }}
      >
        <p className='text-p_lg text-basecolor font-semibold'>{modalTitle}</p>
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            color: COLORS.baseColor,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <div className='p-4 w-full md:w-[400px] lg:w-[500px]'>
        <p className='my-2 text-blackshade font-medium text-p_lg'>{note}</p>
      </div>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Buttons
          bgColor='black'
          textColor={COLORS.white}
          onClickHandler={handleClose}
          title='Cancel'
          other_style={{ border: `1px solid ${COLORS.baseColor}`, width: '150px'}}
        />
          <Buttons
            bgColor={COLORS.blueOverlay}
            textColor={COLORS.baseColor}
            onClickHandler={confirmHandler}
            title={title1}
            other_style={{ width: '150px'}}
            isLoading={loading}
          />
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationPopup;
