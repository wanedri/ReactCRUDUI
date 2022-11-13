import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function Modals({show , closeModal}) {
    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={show} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                            <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-center text-gray-900">
                                                Add New Users
                                            </Dialog.Title>
                                            <div className="md:grid md:grid-cols-1 md:gap-6">
                                                <div className="md:col-span-1">
                                                    <form action="#" method="POST">
                                                        <div className="overflow-hidden sm:rounded-md">
                                                            <div className="bg-white py-5">
                                                                <div className="grid gap-6">
                                                                    <div className="">
                                                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                                            Name
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="first-name"
                                                                            id="first-name"
                                                                            autoComplete="given-name"
                                                                            className="mt-1 block w-72 rounded-md border-2 border-grey-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                                        />
                                                                    </div>
                                                                    <div className="">
                                                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                                                            Title
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="title"
                                                                            id="title"
                                                                            autoComplete="given-name"
                                                                            className="mt-1 block w-52 rounded-md border-2 border-grey-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                                        />
                                                                    </div>
                                                                    <div className="">
                                                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                                            Email address
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="email-address"
                                                                            id="email-address"
                                                                            autoComplete="email"
                                                                            className="mt-1 block w-72 rounded-md border-2 border-grey-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg-gray-50 py-3 text-right">
                                                                <div className="bg-gray-50 py-3 sm:flex sm:flex-row-reverse">
                                                                    <button
                                                                        // type="submit"
                                                                        type="button"
                                                                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                                                        // onClick={() => setOpen(false)}
                                                                    >
                                                                        Save
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                                        onClick={closeModal}
                                                                        ref={cancelButtonRef}
                                                                    >
                                                                        Cancel
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
