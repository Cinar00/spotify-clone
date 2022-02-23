import { Menu } from "@headlessui/react";
import { Icon } from "../../Icons";

function Auth() {
  const user = {
    name: "Cinar Byt",
    avatar:
      "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1941426536076709&height=300&width=300&ext=1645847434&hash=AeTiO0w3sUrXSKedbyo",
  };

  return (
    <Menu as="nav" className={"relative"}>
      {({ open }) => (
        <div>
          <Menu.Button className={`flex items-center h-8 rounded-3xl pr-2 ${open ? 'bg-active' : 'bg-black'} hover:bg-active`}>
                        <img src={user.avatar} className={"w-8 h-8 rounded-full p-0.5 mr-2"} alt="" />
                        <span className="text-sm font-semibold mr-2">{user.name}</span>
                        <span className={open && 'rotate-180'}>
                            <Icon size={16} name="downDir" />
                        </span>
                    </Menu.Button>
                    <Menu.Items className={"absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2"}>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                    href="##"
                                >
                                    Account
                                    <Icon size={16} name="external" />
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                    href="##"
                                >
                                    Profile
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                    href="##"
                                >
                                    Log out
                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </div>
            )}
        </Menu>
    )
}

export default Auth;
