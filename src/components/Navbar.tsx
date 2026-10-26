import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import type LinkModel from '../models/Links';
import { Button } from '@mui/material';
import { useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Navbar = () => {

  const linksData : LinkModel[] = [
    {
        id:1,
        name:"Arabalar",
        href:"/cars"
    },
    {
        id:2,
        name:"Customers",
        href:"#customers"
    },
    {
        id:3,
        name : "Giriş Yap",
        href:'/login'
    },
    {
        id:4,
        name:"Kayıt Ol",
        href:'/register'
    }
  ]
  const [mobileMenuState,setMobileMenuState] = useState<boolean>(false);
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            RestCar
          </Typography>
          <Typography className='flex-1 mr-28 md:hidden'>
            <Button onClick={() => setMobileMenuState((e:any) => !e)}>
                <MenuOutlinedIcon className='text-white'/>
            </Button>
          </Typography>
          <ul className="hidden md:flex flex-row items-center justify-between gap-5">
            {
                linksData.map((data:LinkModel) => (
                    <li key={data.id} className="list-none font-medium">
                        <a href={data.href}>
                            {
                                data.name
                            }
                        </a>
                    </li>
                ))
            }
          </ul>
        </Toolbar>
      </AppBar>
    </Box>
    {/****MOBILE MENU***/}
    <div className={ mobileMenuState ? 'container mx-auto bg-gray-300 mt-2.5 w-39.5 border border-solid border-transparent rounded-3xl md:hidden' :'hidden' }>
        <ul className='flex flex-col items-center justify-around px-4 py-7'>
            {
                linksData.map((data:LinkModel) => (
                    <li key={data.id} className="list-none font-medium">
                        <a href={data.href}>
                            {
                                data.name
                            }
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
    </>
  )
}

export default Navbar