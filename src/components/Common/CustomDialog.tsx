import { ReactNode } from 'react';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import useDialogContext from '@/hooks/use-dialog-context';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialog-paper': { width: '100%', maxHeight: 435 },
}));

interface CustomDialogProps {
  title: string;
  children: ReactNode;
  isOpen?: boolean;
}

export default function CustomDialog({
  title,
  children,
  isOpen = false,
}: CustomDialogProps) {
  const { setDialogType } = useDialogContext();

  const handleClose = () => {
    setDialogType('');
  };

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={isOpen}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id='customized-dialog-title'>
          {title}
        </DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
      </BootstrapDialog>
    </>
  );
}
