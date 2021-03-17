import React from "react";
import { Link } from "react-router-dom";
import routes from "../configs/routes";
import { makeStyles } from "@material-ui/core/styles";
import { getUserById } from "../../redux/usersSelectors";

// import {
//   Table,
//   Button,
//   TableBody,
//   TableHead,
//   TableCell,
//   TableContainer,
//   TableRow,
//   Paper,
// } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   table: {
//     maxWidth: 1000,
//   },
// }));

// const User = ({
//   id,
//   first_name,
//   last_name,
//   birth_date,
//   gender,
//   job,
//   biography,
//   is_active,
//   onDelete,
//   onChange,
//   getUserById,
// }) => {
//   const classes = useStyles();

//   // onClick={getUserById}

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} size="small" aria-label="a dense table">
//         <TableHead>
//           <TableRow>
//             <TableCell>First Name</TableCell>
//             <TableCell align="right">Last Name</TableCell>
//             <TableCell align="right">Birth Date</TableCell>
//             <TableCell align="right">Gender</TableCell>
//             <TableCell align="right">Job</TableCell>
//             <TableCell align="right">Biography</TableCell>
//             <TableCell align="right">Status</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           <TableRow key={id}>
//             {/* <Link to={`${routes.USER}`}> */}
//             <TableCell align="left" width="100">
//               {first_name}
//             </TableCell>
//             <TableCell align="left" width="100">
//               {last_name}
//             </TableCell>
//             <TableCell align="left" width="50">
//               {birth_date}
//             </TableCell>
//             <TableCell align="left" width="50">
//               {gender}
//             </TableCell>
//             <TableCell align="left" width="100">
//               {job}
//             </TableCell>
//             <TableCell align="left" width="500">
//               {biography}
//             </TableCell>
//             <TableCell align="left" width="30">
//               {is_active}
//             </TableCell>
//             {/* </Link> */}

//             <TableCell align="left">
//               <Button variant="outlined" size="small" onClick={onDelete}>
//                 Удалить
//               </Button>
//             </TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//       {/* <Link to={`${routes.USER}`}>  */}
//       {/* <Button variant="outlined" size="small" onClick={onChange}>
//           Редактировать
//         </Button> */}
//       {/* </Link>  */}
//     </TableContainer>
//   );
// };
const User = ({
  id,
  first_name,
  last_name,
  birth_date,
  gender,
  job,
  biography,
  is_active,
  onDelete,
  onChange,
}) => {
  return (
    <div>
      {/* <Link to={`routes/USER`}> */}
        <div>{first_name}</div>
        <div>{last_name}</div>
        <div>{birth_date}</div>
        <div>{gender}</div>
        <div>{job}</div>
        <div>{biography}</div>
        <div>{is_active}</div>
      {/* </Link> */}
      <button onClick={() => onDelete(id)}>Удалить</button>
      <button onClick={() => onChange(id)}>Редактировать</button>
    </div>
  );
};

export default User;
