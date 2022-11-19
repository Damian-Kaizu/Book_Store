import React from 'react';
import { Avatar, Box, Button, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Link from 'next/link';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const navigation = [
        { name: 'Home', href: '/Main', current: true },
        { name: 'BookShelf', href: '#', current: false },
        { name: 'Contact', href: '#', current: false },
        { name: 'Reader', href: '/Reader', current: false },
    ]
    return (
        <nav >
            <Box sx={{ borderBottom: 1 }} className='flex  justify-between'>

                <Box sx={{ borderRight: 1 }} className="flex  mx-10 justify-center items-center">
                    <span className='text-2xl text-orange-600 font-montserrat md:mr-10 sm:mr-2'>LOGO</span>
                </Box>


                {navigation.map((item) => (
                    <Box className='flex justify-self-center'>


                        <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                item.current ? '  text-black px-1 ' : 'text-black hover:bg-gray-300 hover:text-black',
                                'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </Link>
                    </Box>
                ))}

                <Box className="flex flex-shrink-0 justify-between gap-1" sx={{ borderRight: 1 }}>
                    <Button>
                        <SearchIcon />

                    </Button>
                    <Button>

                        <NotificationsNoneIcon />
                    </Button>

                </Box>


                <Avatar className='md:mr-20 sm:mr-2' />


            </Box>
        </nav >
    )
}
