import { forwardRef, useRef } from 'react';

const ModalManageItem = ({ closeModal, updateData, handleSubmit }, ref) => {
    const formRef = useRef(null);

    return (
        <div>
            {/* Open the modal using ID.showModal() method */}
            {/* <button className="btn" onClick={() => window.my_modal_1.showModal()}>open modal</button> */}
            <dialog id="my_modal_1" ref={ref} className="modal">
                <form onSubmit={handleSubmit} ref={formRef} method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>

                    <div>
                        <input type="text" name="title"
                            defaultValue={updateData?.title} />
                    </div>
                    <div>
                        <input type="text" name="price"
                            defaultValue={updateData?.price} />
                    </div>

                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <input type="submit" value="Submit" />
                        <button onClick={() => {
                            closeModal();
                            formRef.current.reset();
                        }} className="btn">Close</button>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default forwardRef(ModalManageItem);