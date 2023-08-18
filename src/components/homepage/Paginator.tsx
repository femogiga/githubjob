import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Paginator = ({onChange,currentPage}) =>{
    return(
    <Stack spacing={10}>
      <Pagination count={300} page={currentPage} variant="outlined" color="secondary" onChange={onChange} />
    </Stack>
    )
}


export default Paginator
