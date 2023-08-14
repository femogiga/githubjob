import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Paginator = () =>{
    return(
    <Stack spacing={10}>
      <Pagination count={15} variant="outlined" color="secondary" />
    </Stack>
    )
}


export default Paginator
