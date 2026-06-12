import { AdminLayout } from "@/components/admin/admin-layout";

export const metadata = {
  title: "Zufeet Admin",
  description: "Admin dashboard for Zufeet footwear brand",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AdminLayout>{children}</AdminLayout>;
}
