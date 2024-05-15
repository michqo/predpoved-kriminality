import { DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Modal from './components/Modal';

function App() {
  return (
    <div className="relative grid h-screen grid-flow-row grid-rows-3">
      <div className="row-span-1 flex flex-col items-center bg-background text-foreground relative">
 
  
        <h1 className="header">PREDPOVEĎ KRIMINALITY</h1>
        <h2 className="under">VYBRAŤ ROK</h2>
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
      <div className="container">
            <img
                src="/icon.png"
                alt="My Image"
                className="image"
            />
        </div>
    </div>
  );
}

export default App;
