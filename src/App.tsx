import { DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Modal from './components/Modal';

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="mt-12 text-3xl text-cyan-500 underline">Predpoveď kriminality</h1>
        <h2 className="text-lg text-cyan-700">Vybrať rok</h2>
      </div>

      <div className="mt-36 grid w-full grid-flow-col items-stretch justify-stretch">
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
    </div>
  );
}

export default App;
