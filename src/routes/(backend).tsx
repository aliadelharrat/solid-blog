import { JSX } from "solid-js";
import { AppSidebar } from "~/components/admin/sidebar/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";

type BackendLayourProps = {
  children: JSX.Element;
};

const BackendLayout = ({ children }: BackendLayourProps) => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default BackendLayout;
