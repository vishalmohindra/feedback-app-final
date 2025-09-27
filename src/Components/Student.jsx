function Student({ name = "Vishal", rollNo = "01", studentClass = "10" }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{rollNo}</td>
      <td>{studentClass}</td>
    </tr>
  )
}

export default Student

//if we have to take only one student
// Student.jsx
// function Student({ name = "Vishal", rollNo = "01", studentClass = "10" }) {
//   return (
//     <table border="1" cellPadding="8" style={{ margin: "10px auto", borderCollapse: "collapse" }}>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Roll No</th>
//           <th>Class</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>{name}</td>
//           <td>{rollNo}</td>
//           <td>{studentClass}</td>
//         </tr>
//       </tbody>
//     </table>
//   )
// }

// export default Student
