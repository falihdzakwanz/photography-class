import AdminLayout from '@/components/layouts/AdminLayout';

export default function Dashboard() {
    return (
        <AdminLayout>
            <div className="flex min-h-[calc(100vh-144px)] items-center justify-center">
                <h1 className="text-4xl font-medium text-primary">
                    Admin Panel
                </h1>
            </div>
        </AdminLayout>
    );
}