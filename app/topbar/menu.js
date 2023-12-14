import Link from "next/link";
import { Router} from "next/router";
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1.5),
    minWidth: 130,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    '& .MuiMenu-list': {
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div 
    >
      <Button
        className='minubt'
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
      >
        Menu
      </Button>
      <StyledMenu
        className="theminu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>

        <Link className="linkstyl" href="/" >
            <MenuItem className="linkmnu" onClick={handleClose} disableRipple>
            Home
            </MenuItem>
        </Link>
        <Divider sx={{ my: 0.5 }} />
        <Link className="linkstyl" href="/skills" >
            <MenuItem className="linkmnu" onClick={handleClose} disableRipple>
            Skills
            </MenuItem>
        </Link>
        <Divider sx={{ my: 0.5 }} />
        <Link className="linkstyl" href="/Projects" >
            <MenuItem className="linkmnu" onClick={handleClose} disableRipple>
            Projects
            </MenuItem>
        </Link>
        <Divider sx={{ my: 0.5 }} />
        <Link className="linkstyl" href="/footer" >
            <MenuItem className="linkmnu" onClick={handleClose} disableRipple>
            Contact Me
            </MenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
}