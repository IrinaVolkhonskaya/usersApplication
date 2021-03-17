import React from "react";
import { connect } from "react-redux";
import usersActions from "../../redux/usersActions";
import * as selectors from "../../redux/usersSelectors";
import * as usersOperations from "../../redux/usersOperations";

import UserView from "./UserView";

const User = () => ({
  render() {
    return <UserView {...this.props} />;
  },
});

const mapStateToProps = (state) => ({
  user: selectors.getUserById(state),
});

const mapDispatchToProps = {
  getUserById: usersActions.getUserById,
  updateUser: usersActions.updateUser,
  deleteUser: usersOperations.deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
