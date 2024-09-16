// import React, { useContext } from "react";
// import Header from "./Header";
// import { MY_CONTEXT } from "../../hooks/Context";

// const Index = () => {
//   const { data } = useContext(MY_CONTEXT);
//   if (data) {
//     localStorage.setItem("REDIRECTING_ROUTES", data);
//   }
//   const REDIRECTING_ROUTES = localStorage.getItem("REDIRECTING_ROUTES");

//   localStorage.clear(); // HAVE TO DELETE LATER
//   console.log(REDIRECTING_ROUTES);

//   return (
//     <div
//       style={{
//         display:
//           REDIRECTING_ROUTES === "business"
//             ? "none"
//             : REDIRECTING_ROUTES === "contact"
//             ? "none"
//             : REDIRECTING_ROUTES === "login"
//             ? "none"
//             : "block",
//       }}
//     >
//       <Header />
//     </div>
//   );
// };

// export default Index;
