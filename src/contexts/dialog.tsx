import { createContext, useState, ReactNode } from 'react';

const DialogContext = createContext<any>(null);

interface DialogProviderProps {
  children: ReactNode;
}

function DialogProvider({ children }: DialogProviderProps) {
  const [dialogType, setDialogType] = useState<string>('');

  const value = {
    dialogType,
    setDialogType,
  };

  return (
    <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
  );
}

export { DialogProvider };
export default DialogContext;
