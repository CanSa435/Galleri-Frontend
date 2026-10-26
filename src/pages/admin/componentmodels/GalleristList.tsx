import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import type React from 'react';
import type GalleristModel from '../../../models/GalleristModel';
import type { JSX } from '@emotion/react/jsx-runtime';


const GalleristList : React.FC<GalleristModel> = ({id,firstName,lastName,address}: GalleristModel) : JSX.Element => {
  return (
    <>
      <TableRow
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
        <TableCell component="th" scope="row">
          {id}
        </TableCell>
        <TableCell align="right">
          {firstName}
        </TableCell>
        <TableCell align="right">
          {lastName}
          </TableCell>
          <TableCell align="right">
            {address.city}
          </TableCell>
          <TableCell align="right">
            {address.district}
          </TableCell>
      </TableRow>
    </>
  )
}

export default GalleristList