import React, { Component, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
// import usersActions from "../../redux/usersActions";
import * as selectors from "../../redux/usersSelectors";
import * as usersOperations from "../../redux/usersOperations";

import UsersView from "./UsersView.tsx";
// import usersActions from "../../redux/usersActions";

class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return <UsersView {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  users: selectors.getUsers(state),
});

const mapDispatchToProps = {
  fetchUsers: usersOperations.fetchUsers,
  deleteUser: usersOperations.deleteUser,
  // updateUser: usersOperations.updateUser,
  getUserById: usersOperations.getUserById,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);

// НА ХУКАХ!!

// import { Link } from "react-router-dom";
// import routes from "../configs/routes";

// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import Button from "@material-ui/core/Button";

// const useStyles = makeStyles({
//   table: {
//     maxWidth: 1000,
//   },
// });

// export default function Users() {
//   const classes = useStyles();

//   const dispatch = useDispatch();
//   const users = useSelector(selectors.getUsers);
//   const id = useSelector(selectors.getUserById);

//   useEffect(() => {
//     dispatch(usersOperations.fetchUsers());
//   }, [dispatch]);

//   useEffect(() => {
//     dispatch(usersActions.updateUser(id));
//   }, [dispatch, id]);

//   const onDelete = useEffect(() => {
//     dispatch(usersOperations.deleteUser(id));
//   }, [dispatch, id]);

//   // const onGetUser = useEffect(() => {
//   //   dispatch(usersActions.getUserById(userId));
//   // }, [dispatch, userId]);

//   return (
//     <>
//       <TableContainer component={Paper}>
//         <Table
//           className={classes.table}
//           size="small"
//           aria-label="a dense table"
//         >
//           <TableHead>
//             <TableRow>
//               <TableCell align="left">First Name</TableCell>
//               <TableCell align="left">Last Name</TableCell>
//               <TableCell align="left">Birth Date</TableCell>
//               <TableCell align="left">Gender</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users.map((user) => (
//               <TableRow key={user.id}>
//                 <TableCell align="left">{user.first_name}</TableCell>
//                 <TableCell align="left">{user.last_name}</TableCell>
//                 <TableCell align="left" width="100">
//                   {user.birth_date}
//                 </TableCell>
//                 <TableCell align="left">{user.gender}</TableCell>

//                 <TableCell align="left">
//                   <Button variant="outlined" size="small" onClick={onDelete}>
//                     Удалить
//                   </Button>
//                 </TableCell>
//                 <TableCell align="left">
//                   {/* <Link to={`${routes.USER}`}>
//                   {/* <Link to={`users/${user.id}`}>
//                     <Button
//                       variant="outlined"
//                       size="small"
//                       onClick={onGetUser(user.id)}
//                     >
//                       Больше инфо
//                     </Button> */}
//                   {/* </Link> */}
//                 </TableCell>
//                 <Button
//                   variant="outlined"
//                   size="small"
//                   // onClick={() => updateUser(user.id)}
//                 >
//                   Update
//                 </Button>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </>
//   );
// }
