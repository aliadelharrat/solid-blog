import { For } from "solid-js";
import { A } from "@solidjs/router";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import {
  IoCalendarOutline,
  IoDiamondOutline,
  IoMailOutline,
  IoMaleFemaleOutline,
  IoSearchOutline,
  IoSettingsOutline,
} from "solid-icons/io";
import { TbCategory2, TbFolder, TbUsers } from "solid-icons/tb";
import { ar } from "~/lib/languages/ar";

const items = [
  {
    title: ar.users,
    url: "/admin/users",
    icon: TbUsers,
  },
  {
    title: ar.categories,
    url: "/admin/categories",
    icon: TbCategory2,
  },
  {
    title: ar.forums,
    url: "/admin/forums",
    icon: TbFolder,
  },
  {
    title: ar.settings,
    url: "#",
    icon: IoSettingsOutline,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel class="flex items-center gap-2">
            <IoDiamondOutline />
            <span>{ar.adminControlPanel}</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <For each={items}>
                {(item) => (
                  <SidebarMenuItem>
                    <SidebarMenuButton as={A} href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )}
              </For>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
