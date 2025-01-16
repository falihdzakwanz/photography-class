"use client"

import Card from "@/components/admin/Card";
import AdminLayout from "@/components/layouts/AdminLayout";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

const AdminWorkshops = () => {
    const workshops = [
        {
            slug: "workshop-1",
            title: "Workshop 1",
            image: "https://placehold.co/150",
        },
        {
            slug: "workshop-2",
            title: "Workshop 2",
            image: "https://placehold.co/150",
        },
    ];

    return (
        <AdminLayout>
            <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-bold">Workshops</h1>
                    <Link
                        className="flex items-center gap-2 rounded bg-admin-primary px-4 py-2 text-primary hover:text-white transition-colors duration-200"
                        href={"/admin/workshops/add"}
                        type="button"
                    >
                        <FiPlus className="h-5 w-5" /> Add Workshop
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {workshops.map((workshop) => (
                        <Card
                            key={workshop.slug}
                            slug={workshop.slug}
                            title={workshop.title}
                            image={workshop.image}
                            type="workshops"
                        />
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminWorkshops;
