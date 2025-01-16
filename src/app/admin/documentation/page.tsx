"use client"

import Card from "@/components/admin/Card";
import AdminLayout from "@/components/layouts/AdminLayout";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

const AdminDocumentation = () => {
    const documentation = [
        {
            slug: "documentation-1",
            title: "documentation 1",
            image: "https://placehold.co/150",
        },
        {
            slug: "documentation-2",
            title: "documentation 2",
            image: "https://placehold.co/150",
        },
    ];

    return (
        <AdminLayout>
            <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-bold">Documentation</h1>
                    <Link
                        className="flex items-center gap-2 rounded bg-admin-primary px-4 py-2 text-primary hover:text-white transition-colors duration-200"
                        href={"/admin/documentation/add"}
                        type="button"
                    >
                        <FiPlus className="h-5 w-5" /> Add Documentation
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {documentation.map((documentation) => (
                        <Card
                            key={documentation.slug}
                            slug={documentation.slug}
                            title={documentation.title}
                            image={documentation.image}
                            type="documentation"
                        />
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminDocumentation;
