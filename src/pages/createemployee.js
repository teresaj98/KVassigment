import Sidebar from '../components/sidebar.jsx'
import Logo from '../components/logo.jsx';
import '../css/styles.css'
import Header from '../components/header';
import Inputtext from '../components/inputtext';
import Inputselect from '../components/inputselect';
import Choosefile from '../components/choosefile';
import Submit from '../components/button';


function CreateEmployee() {
  return (
    <div >
        <Logo />
        <Sidebar/>
        <div className="Content">
            <Header heading="Create Employee"/>
            <br />
            <div className="Form">
              <div className="Container">
                <Inputtext label="Employee Name" id="ename" name="name" placeholder="Employee Name"/>
                <Inputtext label="Employee Id" id="eid" name="id" placeholder="Employee Id"/>
                <Inputtext label="Joining Date(dd/mm/yyyy)" id="jdate" name="date" placeholder="Joining Date"/>
              </div>
              <div className="Container">
                <Inputselect label="Role" id="erole" name="role" selected="Role" value1="Developer" value2="QA"/>
                <Inputselect label="Status" id="estatus" name="status" selected="Status" value1="Active" value2="Not Active"/>
                <Inputtext label="Experiance" id="expe" name="expe" placeholder="Experiance"/>
              </div>
              <div className="Container">
                <Inputtext label="Address" id="addr" name="addr" placeholder="Address"/>
                <Choosefile/>
                <div></div>
              </div>
                <Submit id="create" value="create"/>
                <Submit id="cancel" value="cancel"/>
              </div>
        </div>
    </div>
  );
}

export default CreateEmployee;