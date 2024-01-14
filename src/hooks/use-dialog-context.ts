import { useContext } from 'react';
import DialogContext from '@/contexts/dialog';

function useDialogContext() {
  return useContext(DialogContext);
}

export default useDialogContext;
