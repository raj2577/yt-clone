// // import { Box, Stack, Typography } from "@mui/material";
// // import React, { useEffect, useState } from "react";

// // import { fetchFromAPI } from "../utils/fetchFromAPI";
// // import { Sidebar, Videos } from "./";

// // const Feed = () => {
// //   const [selectedCategory, setselectedCategory] = useState('New')
// //   const [videos, setvideos] = useState([])
// //   useEffect(() => {
// //     fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
// //       .then((data) => setvideos(data.items));
// //   }, [selectedCategory]);
// //   return (
// //     <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
// //       <Box
// //         sx={{
// //           height: { sx: "auto", md: "92vh" },
// //           borderRight: "1px solid #d3d3d3",
// //           px: { sx: 0, md: 2 },
// //         }}
// //       >
// //         <Sidebar 
// //           selectedCategory={selectedCategory}
// //           setselectedCategory={setselectedCategory}
// //           />
// //         <Typography
// //           className="copyright"
// //           variant="body2"
// //           sx={{ mt: 1.5, color: "#fff" }}
// //         >
// //           © 2022 All rights reserved.
// //         </Typography>
// //       </Box>
// //       <Box p={2} sx={{ overflowY: "auto", flex: 2, height: "90vh" }}>
// //         <Typography
// //           variant="h4"
// //           fontWeight="bold"
// //           mb={2}
// //           sx={{ color: "white" }}
// //         >
// //           {selectedCategory}
// //           <span style={{ color: "#F31503" }}>videos</span>
// //         </Typography>
// //         <Videos videos={[]} />
// //       </Box>
// //     </Stack>
// //   );
// // };

// // export default Feed;
// import { Box, Stack, Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";

// import { fetchFromAPI } from "../utils/fetchFromAPI";
// import { Sidebar, Videos } from "./";

// const Feed = () => {
//   const [selectedCategory, setselectedCategory] = useState('New')
//   const [videos, setvideos] = useState([])
//   useEffect(() => {
//     fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
//       .then((data) => setvideos(data.items));
//   }, [selectedCategory]);
//   return (
//     <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
//       <Box
//         sx={{
//           height: { sx: "auto", md: "92vh" },
//           borderRight: "1px solid #d3d3d3",
//           px: { sx: 0, md: 2 },
//         }}
//       >
//         <Sidebar 
//           selectedCategory={selectedCategory}
//           setselectedCategory={setselectedCategory}
//           />
//         <Typography
//           className="copyright"
//           variant="body2"
//           sx={{ mt: 1.5, color: "#fff" }}
//         >
//           © 2022 All rights reserved.
//         </Typography>
//       </Box>
//       <Box p={2} sx={{ overflowY: "auto", flex: 2, height: "90vh" }}>
//         <Typography
//           variant="h4"
//           fontWeight="bold"
//           mb={2}
//           sx={{ color: "white" }}
//         >
//           {selectedCategory} 
//           <span style={{ color: "#F31503" }}>videos</span>
//         </Typography>
//         <Videos videos={videos} />
//       </Box>
//     </Stack>
//   );
// };

// export default Feed;

import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Sidebar, Videos } from "./";

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState('New')
  const [videos, setvideos] = useState([])
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setvideos(data.items));
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #d3d3d3",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar 
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
          />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
          style={{textAlign: "center"}}
        >
          © 2022 All rights reserved. <br /> Made by {"Raj2577"}
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", flex: 2, height: "90vh" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <br /> 
          <span style={{ color: "#F31503" }}></span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
