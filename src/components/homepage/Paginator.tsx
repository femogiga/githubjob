import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Paginator = ({onChange,currentPage , pagesize}) =>{
    return(
    <Stack spacing={10}>
      <Pagination count={pagesize} page={currentPage} variant="outlined" color="secondary" onChange={onChange} />
    </Stack>
    )
}


export default Paginator
