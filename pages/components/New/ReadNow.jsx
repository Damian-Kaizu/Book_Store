import { Box, Typography } from '@mui/material'
import React from 'react'

const ReadNow = () => {
    return (
        <Box sx={{ borderBottom: 1 }} className="bg-white px-10 py-10 border-b-black">
            <Box className="grid grid-flow-col bottom">
                <Box>
                    <img src="/img/Robinson.png" width="600" height="800" />
                </Box>
                <Box>
                    <Typography variant="h1" className="font-bebas">READ NOW</Typography>
                </Box>

            </Box>
        </Box>
    )
}

export default ReadNow