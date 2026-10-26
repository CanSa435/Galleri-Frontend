import type React from 'react'
import type CarModel from '../../../models/CarModel'
import type { JSX } from '@emotion/react/jsx-runtime'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Link } from 'react-router-dom';
 
const AdminCarList :React.FC<CarModel> = ({ id ,plaka,production,model,productionYear,price,currencyType,damagePrice } : CarModel) : JSX.Element => {
  return (
      <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center'>
                {id}
              </TableCell>
              <TableCell align='center'>
                {plaka}
              </TableCell>
              <TableCell align="center">{production}</TableCell>
              <TableCell align="center">{model}</TableCell>
              <TableCell align="center">{productionYear}</TableCell>
              <TableCell align="center">{price}</TableCell>
              <TableCell align="center">{currencyType}</TableCell>
              <TableCell align="center">{damagePrice}</TableCell>
              <TableCell align='center'>
                <Link to={`/admin/car-detail/${id}`} className="border border-solid border-blue-100 p-3 rounded-2xl bg-blue-300 hover:shadow-yellow-200">Detay</Link>
              </TableCell>
          </TableRow>
  )
}

export default AdminCarList