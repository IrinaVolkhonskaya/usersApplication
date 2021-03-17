import React from "react";
import { Link } from "react-router-dom";
import routes from "../configs/routes";

// import UserView from "../User/UserView";

// const UsersView = ({ users = [], updateUser, deleteUser }) => (
//   <div>
//     {users &&
//       users.map((user) => (

//         <UserView

//           key={user.id}
//           {...user}
//           onChange={() => updateUser(user.id)}
//           onDelete={() => deleteUser(user.id)}
//         />
//       ))}
//   </div>
// );
// export default UsersView;

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  table: {
    maxWidth: 1000,
  },
});

export default function UsersView({
  users = [],
  updateUser,
  deleteUser,
  getUserById,
}) {
  const classes = useStyles();

  return (
    <>
      <Link to={routes.FORM}>
        <Button variant="outlined" size="small">
          Add new user
        </Button>
      </Link>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="left">First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">Birth Date</TableCell>
              <TableCell align="left">Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <TableRow key={user.id}>
                  {/* <Link to={`${routes.USERS}/${user.id}`}> */}
                  <TableCell align="left">{user.first_name}</TableCell>
                  <TableCell align="left">{user.last_name}</TableCell>
                  <TableCell align="left" width="100">
                    {user.birth_date}
                  </TableCell>
                  <TableCell align="left">{user.gender}</TableCell>
                  <TableCell align="left">
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell align="left">
                    <Link to={`${routes.USERS}/${user.id}`}>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => getUserById(user.id)}
                      >
                        More info
                      </Button>
                    </Link>
                  </TableCell>

                  {/* <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => updateUser(user.id)}
                  >
                    Update
                  </Button>
                </TableCell> */}
                  {/* <Link to={routes.FORM}>
                    <Button variant="outlined" size="small">
                      Add new user
                    </Button>
                  </Link> */}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
