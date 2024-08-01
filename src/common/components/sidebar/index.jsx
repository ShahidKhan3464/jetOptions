'use client';

import React from 'react';
import Image from 'next/image';
import { Icons } from '../../assets';
import { useRouter, usePathname } from 'next/navigation';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Typography
} from '@mui/material';

export default function Sidebar({ component }) {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    {
      text: 'Quotes',
      path: '/quotes',
      icon: Icons.quotes,
      whiteIcon: Icons.quotesWhite,
      isActive: pathname === '/quotes' || pathname === '/create-quote'
    },
    {
      text: 'Client Info',
      path: '/client-info',
      icon: Icons.clientInfo,
      isActive: pathname === '/client-info',
      whiteIcon: Icons.clientInfoWhiteWhite
    },
    {
      text: 'Settings',
      path: '/settings',
      icon: Icons.settings,
      whiteIcon: Icons.settingsWhite,
      isActive: pathname === '/settings'
    }
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ width: '288px' }}>
        <Box
          sx={{
            left: 0,
            right: 0,
            width: '288px',
            height: '100vh',
            position: 'fixed',
            boxShadow: '2px 0px 20px 0px #0000001A'
          }}
        >
          <Box
            sx={{
              p: 4.5,
              gap: '5px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Image src={Icons.jetLogo} alt="jet-logo" />
            <Typography
              component="h3"
              sx={{
                fontWeight: 400,
                fontSize: '22px',
                color: '#000000',
                lineHeight: '23px',
                fontFamily: 'Anybody'
              }}
            >
              jetoptions
            </Typography>
          </Box>
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  onClick={() => router.push(item.path)}
                  sx={{
                    mb: 4,
                    px: 4.5,
                    gap: 0.5,
                    background: item.isActive ? '#DD524C' : 'transparent',
                    '&:hover': {
                      background: item.isActive ? '#DD524C' : 'transparent'
                    }
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: 'center'
                    }}
                  >
                    <Image
                      alt="icon"
                      src={item.isActive ? item.whiteIcon : item.icon}
                    />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      m: 0,
                      span: {
                        fontWeight: 400,
                        fontSize: '20px',
                        letterSpacing: 0,
                        lineHeight: '30px',
                        fontFamily: 'Poppins !important',
                        color: item.isActive ? '#FFFFFF' : '#000000B2'
                      }
                    }}
                    primary={item.text}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      <Box sx={{ width: 'calc(100% - 288px)', p: 6 }}>{component}</Box>
    </Box>
  );
}
