import PropTypes from 'prop-types';


function Student(props) {
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Sudent: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.proptypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultprops = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student;