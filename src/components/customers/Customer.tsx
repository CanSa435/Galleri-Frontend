import TableRow from '@mui/material/TableRow';
import type CustomerModel from '../../models/CustomerModel'
import TableCell  from '@mui/material/TableCell';

const Customer = ({id,firstName,lastName}:CustomerModel) => {
  return (
    <> 
    <TableRow key={id} sx={{'&:last-child td, &:last-child th' : {border:0}}}>
        <TableCell align='left'>
            {firstName}
        </TableCell>
        <TableCell align='left'>
            {lastName}
        </TableCell>
    </TableRow>
    </>
  )
}

export default Customer