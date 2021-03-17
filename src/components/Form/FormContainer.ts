import { connect } from "react-redux";
import FormView from "./FormView";
import userActions from "../../redux/usersActions";


const mapDispatchToProps = { addUser: userActions.addUser };

export default connect(null, mapDispatchToProps)(FormView);
