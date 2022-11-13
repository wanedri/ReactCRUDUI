import { useState } from "react"
import { DummyUser } from "../DummyData"
import UserInfoModal from "./UserInfoModal";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

export default function Table() {
    const [showInfo, setShowInfo] = useState(false);
    const [showDelete, setDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [userInfo, setUserInfo] = useState({});

    const showInfoModal = (item) => {
        setUserInfo(item)
        setShowInfo(true)
    }

    const closeInfoModal = () => {
        setShowInfo(false)
    }

    const showDeleteModal = () => {
        setDelete(true)
    }

    const closeDeleteModal = () => {
        setDelete(false)
    }

    const showEditModal = (item) => {
        setUserInfo(item)
        setShowEdit(true)
    }

    const closeEditModal = () => {
        setShowEdit(false)
    }

    return (
        <>
            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-md text-gray-700 bg-gray-200">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Title
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Email
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            DummyUser.map((item) => (
                                <tr key={item.id} className="bg-white border-b">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                                        {item.Name}
                                    </th>
                                    <td className="py-4 px-6">
                                        {item.Title}
                                    </td>
                                    <td className="py-4 px-6">
                                        {item.Email}
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex flex-row">
                                            <button onClick={() => showInfoModal(item)} className="mr-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                                </svg>
                                            </button>
                                            <button onClick={() => showEditModal(item)} className="mr-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                            <button onClick={() => showDeleteModal(item)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <UserInfoModal userInfo={userInfo} show={showInfo} closeModal={closeInfoModal} />
            <EditModal userInfo={userInfo} show={showEdit} closeModal={closeEditModal} />
            <DeleteModal show={showDelete} closeModal={closeDeleteModal} />
        </>
    )
}