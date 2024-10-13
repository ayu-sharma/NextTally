import React, {useState} from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Link from 'next/link';

export default function Dropdownbtn({ buttonName, menuItems, className }) {
    const [isDropdownClose, setDropdownClose] = useState(false)

    const handleDropdownClose = () => {
        setDropdownClose(false);
    };
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <Button className={`${className}`} style={{ textTransform: 'none' }} {...bindTrigger(popupState)}>
                        {buttonName}
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        {menuItems?.map((item, index) => (
                            <MenuItem
                                key={index}
                                onClick={() => {
                                    if (item.action) {
                                        item.action();  // Call action if it exists
                                    }
                                    if (item.link) {
                                        popupState.close();  // Close the menu before navigating
                                    }
                                }}
                            >
                                {item.link ? (
                                    <Link href={item.link} passHref>
                                        {item.label}
                                    </Link>
                                ) : (
                                    item.label  // Display label directly if no link
                                )}
                            </MenuItem>
                        ))}
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}
