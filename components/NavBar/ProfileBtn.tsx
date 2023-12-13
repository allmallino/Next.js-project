import { Logout} from "@mui/icons-material";
import { Avatar, IconButton, ListItemIcon, Menu, MenuItem, useMediaQuery } from "@mui/material";
import { useSignOut } from 'react-firebase-hooks/auth';
import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { orange } from "@mui/material/colors";

const L = styled(Link)`
    display:flex;
    align-items: center;
    text-decoration: none;
    color: black;
`;

const C = styled.div`
    width:200px;
    display:flex;
    justify-content:end;

    
    @media screen and (max-width:768px) {
        width:fit-content;
    }
`


export default function ProfileBtn({photoURL, name, auth, selectUser}){
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [signOut, loading, error] = useSignOut(auth);
    const matches = useMediaQuery('(min-width:768px)');


    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl((v)=>{return v?null:event.currentTarget});
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(<>
    <C>
      <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}>
            <Avatar src={photoURL} alt={name} sx={{ width: matches?45:35, height: matches?45:35, bgcolor:orange[500],  }}>{name[0]}</Avatar>
      </IconButton>
    </C>
        <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
            <L href="/profile">
                <Avatar/> Profile
            </L>
        </MenuItem>
        <MenuItem onClick={async () => {
                //Вихід з акаунту користувача
                const success = await signOut();
                if (success) {
                    selectUser("");
                }}}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      </>
    );

}