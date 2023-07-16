'use client';

import { useRef, useState, useTransition } from 'react';
import ModalManageItem from './ModalManageItem';
import { useRouter } from 'next/navigation';


const SingleProduct = ({ product }) => {
    const modalRef = useRef(null);
    const { id, title, price, imageurl, features, categoryId } = product;
    const [isPending, startTransition] = useTransition();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const isLoading = isPending || loading;

    const [updateData, setUpdateData] = useState(null);
    const openModal = (item) => {
        setUpdateData(item)
        modalRef.current.showModal()
    }

    const closeModal = () => {
        setUpdateData(null)
        modalRef.current.close()
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const data = { title, price };
        if (title && price) {
            setLoading(true)
            try {
                const res = await fetch(`http://localhost:5000/products/${updateData.id}`, {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                const result = await res.json();
                console.log(result);
                form.reset();
                closeModal();
                setLoading(false)
                startTransition(() => {
                    router.refresh();
                })
            }
            catch (error) {
                setLoading(false)
                console.log(error)
            }
        }
    }
    const handleDelete = async id => {
        setLoading(true)
        try {
            const res = await fetch(`http://localhost:5000/products/${id}`, {
                method: "DELETE",
            })
            const result = await res.json();
            console.log(result);
            closeModal();
            setLoading(false)
            startTransition(() => {
                router.refresh();
            })
        }
        catch (error) {
            console.log(error)
        }

    }
    return (
        <div>
            {/* <div className="overflow-x-auto"> */}
            <table className={`table ${isLoading ? "opacity-30" : "opacity-100"}`}>
                {/* head */}

                <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>{id}</td>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={imageurl} alt="Loading..." />
                                    </div>
                                </div>

                            </div>
                        </td>
                        <td>{title}</td>
                        <td>{price}</td>
                        <td>{features.map(feature => feature)}</td>

                        <td>
                            <button onClick={() => openModal(product)} className="btn btn-ghost btn-xs">Update</button>
                        </td>
                        <td>
                            <button onClick={() => handleDelete(categoryId)} className="btn btn-ghost btn-xs">Delete</button>
                        </td>
                    </tr>

                </tbody>

            </table>
            <ModalManageItem
                ref={modalRef}
                closeModal={closeModal}
                updateData={updateData}
                handleSubmit={handleSubmit}
            />

            {/* </div> */}
        </div>
    );
};

export default SingleProduct;