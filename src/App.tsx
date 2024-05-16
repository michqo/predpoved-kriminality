import { DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Modal from './components/Modal';

function App() {
  return (
    <div className="relative grid h-screen grid-flow-row grid-rows-3">
      <div className="relative row-span-1 flex flex-col items-center bg-background text-foreground">
        <h1 className="mt-12 text-4xl font-extrabold text-slate-800">PREDPOVEĎ KRIMINALITY</h1>
        <h2 className="text-2xl font-bold text-blue-500">VYBRAŤ ROK</h2>
      </div>

      <div className="row-span-2 grid w-full grid-flow-col items-stretch">
        <Modal text="2030">
          <DialogHeader>
            <DialogTitle>Predpoveď pre rok 2030</DialogTitle>
            <DialogDescription>Údaje kriminality</DialogDescription>
          </DialogHeader>
        </Modal>
        <Modal text="2035">
          <DialogHeader>
            <DialogTitle>Predpoveď pre rok 2035</DialogTitle>
            <DialogDescription>Údaje kriminality</DialogDescription>
          </DialogHeader>
        </Modal>
      </div>
      <img src="/icon.png" alt="My Image" className="absolute ml-5 h-56 w-72 object-contain" />
    </div>
  );
}

export default App;
