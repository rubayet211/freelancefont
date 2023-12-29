import Button from "./Button";


function Modal({ closeModal , content }) {

    function closeModalBgClick(e) {
        if (e.target.id === 'modal-bg') {
            console.log(e.target);
            closeModal();
        }
    }

    return (
        <div id="modal-bg" onClick={closeModalBgClick} className="bg-zinc-700/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-screen h-screen">
            <div className="relative p-4 w-full max-w-md max-h-full">
                    { content }
            </div>
        </div>

    );
}

export default Modal;