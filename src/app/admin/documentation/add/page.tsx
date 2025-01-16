"use client"

import { useState, ChangeEvent, FormEvent } from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";

type DocumentationImage = File | null;

type DocumentationData = {
    title: string;
    description: string[];
    images: DocumentationImage[];
};

const AddDocumentation = () => {
    const router = useRouter();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [images, setImages] = useState<DocumentationImage[]>([null, null, null, null, null]);

    const handleImageChange = (index: number, file: File | null): void => {
        const newImages = [...images];
        newImages[index] = file;
        setImages(newImages);
    };

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();

        const documentationData: DocumentationData = {
            title,
            description: description.split("\n"), // Split by newlines for multiple paragraphs
            images,
        };

        console.log("Submitting documentation: ", documentationData);

        // Replace this with actual submission logic
        alert("Documentation added successfully!");
        router.push("/admin/documentations");
    };

    return (
        <AdminLayout>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Add New Documentation</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            className="w-full rounded border border-gray-300 p-2"
                            value={title}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium text-gray-700">Description</label>
                        <textarea
                            className="w-full rounded border border-gray-300 p-2"
                            rows={5}
                            value={description}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                            placeholder="Use new lines to separate paragraphs"
                            required
                        ></textarea>
                    </div>

                    <div>
                        <label className="block mb-2 font-medium text-gray-700">Images</label>
                        <div className="grid grid-cols-3 gap-4">
                            {images.map((image, index) => (
                                <div key={index} className="relative w-32 h-32 border border-gray-300 rounded flex items-center justify-center">
                                    <label
                                        htmlFor={`image-input-${index}`}
                                        className="w-full h-full flex items-center justify-center cursor-pointer"
                                    >
                                        {image ? (
                                            <Image
                                                src={URL.createObjectURL(image)}
                                                alt={`Preview ${index + 1}`}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded"
                                            />
                                        ) : (
                                            <FiPlus className="text-gray-400 text-2xl" />
                                        )}
                                    </label>
                                    <input
                                        id={`image-input-${index}`}
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                            handleImageChange(index, e.target.files ? e.target.files[0] : null)
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded bg-blue-600 py-2 text-white font-medium hover:bg-blue-500"
                    >
                        Add Documentation
                    </button>
                </form>
            </div>
        </AdminLayout>
    );
};

export default AddDocumentation;
