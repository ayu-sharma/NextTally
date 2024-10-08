import React from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Link from 'next/link';

export default function Dropdownbtn({ buttonName, menuItems, className }) {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <Button className={` ${className}`} style={{ textTransform: 'none' }} {...bindTrigger(popupState)}>
                        {buttonName}
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        {menuItems?.map((item, index) => (
                            <MenuItem
                                key={index}
                                onClick={() => {
                                    item.action();  
                                    popupState.close();  
                                }}
                            >
                                <Link href={item.link} passHref>
                                {item.label} 
                                </Link>
                            </MenuItem>
                        ))}
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}
