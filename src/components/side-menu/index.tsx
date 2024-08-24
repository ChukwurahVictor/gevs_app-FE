"use client";

import { ReactNode, useState } from "react";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaSignOutAlt } from "react-icons/fa";

const { Header, Content, Sider } = Layout;

type PropType = {
  items?: ReactNode | undefined;
  navItems: {
    label: string;
    path: string;
    icon?: string;
  }[];
};

const SideMenu = ({ items, navItems }: PropType): any => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const pathname = usePathname();
  
  const handleLogout = () => {
    sessionStorage.removeItem("userData");
    router.push("/auth/login");
    toast.success("Logout Successful!");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
        breakpoint="lg"
        theme="light"
      >
        <div style={{ height: 12, margin: 36 }}></div>

        <Menu defaultSelectedKeys={[pathname]} mode="inline">
          {navItems.map(item => {
            return (
              <Menu.Item
                key={item.path}
                icon={item.icon}
                style={{ marginTop: "3rem" }}
              >
                <Link href={item.path}>{item.label}</Link>
              </Menu.Item>
            );
          })}
          <Menu.Item
              key="bottom-spacer"
              disabled
              style={{ marginTop: "50%", display: "hidden" }}
            />
          <Menu.Item key={"logout"} icon={<FaSignOutAlt size={25} />}>
            <Link onClick={handleLogout} href={"/auth/login"}>
              Logout
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ width: "auto", background: "#F6F7F9" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {items}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default SideMenu;
