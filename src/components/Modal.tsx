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
import { regions } from '@/lib/api';
import { DataShape } from '@/lib/types';
import Chart from './Chart';

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  year: number;
  data: DataShape;
}

function Modal({ open, onOpenChange, year, data }: ModalProps) {
  const charts = regions.map((region) => (
    <>
      <h1 className="mb-2 text-lg">{region} kraj</h1>
      <Chart data={data[region]} year={year} regionName={region} />
    </>
  ));

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="h-screen min-w-full overflow-y-auto rounded-none border-0 outline-none">
          <DialogHeader>
            <DialogTitle>Predpoveď pre rok {year}</DialogTitle>
            <DialogDescription>Údaje kriminality</DialogDescription>
          </DialogHeader>
          <div className="flex w-full flex-row flex-wrap items-center">{charts}</div>
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
