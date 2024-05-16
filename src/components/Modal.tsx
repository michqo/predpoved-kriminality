import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import Chart from './Chart';

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  year: number;
}

function Modal({ open, onOpenChange, year }: ModalProps) {
  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Predpoveď pre rok {year}</DialogTitle>
            <DialogDescription>Údaje kriminality</DialogDescription>
          </DialogHeader>
          <div className="flex w-full items-center">
            <Chart />
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Modal;
