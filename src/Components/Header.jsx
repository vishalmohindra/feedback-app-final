// import React from 'react'

// function Header() {
//   return (
//     <header>
//     <div classname="container">
//     <h2>Feedback APP</h2>
      
//     </div>
//   </header>
//   )
// }

// function Header(props) {
//   return (
//     <header>
//       <div className="container">
//         <h2>{props.text}</h2>
//       </div>
//     </header>
  
//  );  
// }

// export default Header;



//Destructuring
//{ text } in the function parameters lets you use text directly instead of props.text.

// function Header({ text }) {
//   return (
//     <header>
//       <div className="container">
//         <h2>{text}</h2>
//       </div>
//     </header>
//   );
// }

// export default Header;



// 
//output of this will be feedback(by default) otherwise fun (given property)

// function Header({ text="FeedBack UI" }) {
    
//   return (
//     <header>
//       <div className="container">
//         <h2>{text}</h2>
//       </div>
//     </header>
//   );
// }




// export default Header;


// import PropTypes from 'prop-types';

// function Header({ text }) {
//   return (
//     <header>
//       <div className="container">
//         <h2>{text}</h2>
//       </div>
//     </header>
//   );
// }

// // Default prop used if no 'text' prop is provided
// Header.defaultProps = {
//   text: 'Feedback ',
// };

// // PropTypes validation to ensure 'text' is a string
// Header.propTypes = {
//   text: PropTypes.string,
// };

// export default Header;


// import PropTypes from 'prop-types'

// function Header({ text }) {
//   return (
//     <header style={{ backgroundColor: 'blue', color: 'red' }}>
//       <div className='container'>
//         <h2>{text}</h2>
//       </div>
//     </header>
//   )
// }

// // ✅ Default props
// Header.defaultProps = {
//   text: 'Feedback UI',
// }

// // ✅ PropTypes
// Header.propTypes = {
//   text: PropTypes.string,
// }

// export default Header


// import PropTypes from 'prop-types'

// function Header({ text, bgColor, textColor }) {
//   const headerStyles = {
//     backgroundColor: bgColor,
//     color: textColor,
//   }

//   return (
//     <header style={headerStyles}>
//       <div className="container">
//         <h2>{text}</h2>
//       </div>
//     </header>
//   )
// }

// Header.defaultProps = {
//   text: 'Feedback UI',
//   bgColor: 'blue',
//   textColor: 'red',
// }

// Header.propTypes = {
//   text: PropTypes.string,
//   bgColor: PropTypes.string,
//   textColor: PropTypes.string,
// }

// export default Header


// import PropTypes from 'prop-types'

// function Header({ text, bgColor, textColor }) {
//   const headerStyles = {
//     backgroundColor: bgColor,
//     color: textColor,
//   }

//   return (
//     <header style={headerStyles}>
//       <div className="container">
//         <h2>{text}</h2>
//       </div>
//     </header>
//   )
// }

// // ✅ Default props
// Header.defaultProps = {
//   text: 'Feedback UI',
//   bgColor: 'rgba(0,0,0,0.4)', // corrected spelling from "Orgba"
//   textColor: '#ff6a95',
// }

// // ✅ PropTypes validation
// Header.propTypes = {
//   text: PropTypes.string,
//   bgColor: PropTypes.string,
//   textColor: PropTypes.string,
// }

// export default Header


// import Header from './Components/Header.jsx'
// import Student from './Components/Student.jsx'
// import StudentTable from './Components/StudentTable.jsx'

// function App() {
//   return (
//     <div>
//       <Header />
//       <Student />
//       <StudentTable />
//     </div>
//   )
// }

// export default App


// function Header({ bgColor = "red", textColor = "white" }) {
//   const headerStyle = {
//     backgroundColor: bgColor,
//     color: textColor,
//     padding: "10px",
//     textAlign: "center",
//     whiteSpace: "nowrap"
//   }

//   return (
//     <header style={headerStyle}>
//       <h2 style={{ margin: 0 }}>Welcome to Student Dashboard</h2>
//     </header>
//   )
// }

// export default Header


//to make Header dynamic
// Header.jsx
// function Header({ text = "Welcome to Student Dashboard", bgColor = "red", textColor = "white" }) {
//   const headerStyle = {
//     backgroundColor: bgColor,
//     color: textColor,
//     padding: "10px",
//     textAlign: "center",
//     whiteSpace: "nowrap",
//   }

//   return (
//     <header style={headerStyle}>
//       <h2 style={{ margin: 0 }}>{text}</h2>
//     </header>
//   )
// }

// export default Header


function Header() {
  return (
    <header>
      <div className="container">
        <h2>Feedback UI</h2>
      </div>
    </header>
  )
}

export default Header
