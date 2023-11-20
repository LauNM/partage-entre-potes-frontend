import React, { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { TfiClose } from 'react-icons/tfi';

interface Props {
  openModal: boolean;
  setOpenModal: any;
  modalText: string;
}

export default function Modal({ openModal, setOpenModal, modalText }: Props) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={ openModal } as={ Fragment }>
      <Dialog as="div" className="relative z-10" initialFocus={ cancelButtonRef } onClose={ setOpenModal }>
        <Transition.Child
          as={ Fragment }
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-blue bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={ Fragment }
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 "
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0"
            >
              <Dialog.Panel
                className="relative h-72 w-96 max-w-[95%] transform flex flex-col justify-around overflow-hidden rounded-lg bg-white shadow-xl transition-all">
                <button onClick={ setOpenModal }>
                  <TfiClose
                    class="absolute top-3 right-3 text-blue"
                  />
                </button>
                <div className="bg-white p-4 text-center">
                  <p className="text-blue">
                    { modalText }
                  </p>
                </div>
                <div className="flex justify-center gap-4">
                  <button
                    type="button"
                    className="rounded-md bg-white px-3 py-2 text-base font-semibold text-primary ring-1 ring-inset ring-primary hover:bg-primary-light hover:ring-primary-light min-w-[25%]"
                    onClick={ setOpenModal }
                    ref={ cancelButtonRef }
                  >
                    Annuler
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-primary px-3 py-2 text-base font-semibold text-white hover:bg-primary-light hover:text-primary min-w-[25%]"
                    onClick={ setOpenModal }
                  >
                    Valider
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}