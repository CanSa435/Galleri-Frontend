import type React from 'react'
import type { JSX } from '@emotion/react/jsx-runtime'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import type CustomerModel from '../../../models/CustomerModel';

const AdminCustomerList : React.FC<CustomerModel> = ({id,tckn,firstName,lastName } : CustomerModel) : JSX.Element => {
  return (
    <TableRow
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center'>
                {id}
              </TableCell>
              <TableCell align='center'>
                {tckn}
              </TableCell>
              <TableCell align="center">
                {firstName}
              </TableCell>
              <TableCell align="center">
                {lastName}
              </TableCell>
          </TableRow>
  )
}

export default AdminCustomerList