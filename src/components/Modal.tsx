import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from './ui/button';

interface ModalProps {
  text: string;
  children: React.ReactNode;
}

function Modal({ text, children }: ModalProps) {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button variant="ghost" className="w-full">
            {text}
          </Button>
        </DialogTrigger>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </>
  );
}

export default Modal;
