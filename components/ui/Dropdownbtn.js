import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export default function DropdownMenu({ buttonLabel, menuItems }) {
  return (
    <div className="relative inline-block text-right">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-700">
          {buttonLabel || "Login"}
          <ChevronDownIcon className="h-4 w-4 fill-white/60" />
        </MenuButton>

        <MenuItems
          className="absolute right-0 w-52 origin-top-right rounded-xl border border-white/5 bg-gray-900 p-1 text-sm text-white shadow-lg transition duration-100 ease-out focus:outline-none"
        >
          {menuItems?.map((item, id) => (
            <MenuItem key={id} as="button" onClick={item.action} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-white/10">
              {item.icon && <item.icon className="h-4 w-4 fill-white/30" />}
              {item.label}
              {item.shortcut && (
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">{item.shortcut}</kbd>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
}
