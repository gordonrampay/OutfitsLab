import AuthHeader from "@/components/auth/AuthHeader";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header dùng chung cho Sign In / Sign Up */}
            <AuthHeader />

            {/* Nội dung từng trang */}
            <main className="flex-1 flex justify-center">
                {children}
            </main>
        </div>
    );
}
