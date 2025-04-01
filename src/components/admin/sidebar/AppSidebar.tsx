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

const items = [
  {
    title: "Users",
    url: "/admin/users",
    icon: TbUsers,
  },
  {
    title: "Categories",
    url: "/admin/categories",
    icon: TbCategory2,
  },
  {
    title: "Forums",
    url: "/admin/forums",
    icon: TbFolder,
  },
  {
    title: "Settings",
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
            <span>Admin Control Panel</span>
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
