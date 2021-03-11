// the html

// <body class="HolyGrail">
//   <header>…</header>
//   <div class="HolyGrail-body">
//     <main class="HolyGrail-content">…</main>
//     <nav class="HolyGrail-nav">…</nav>
//     <aside class="HolyGrail-ads">…</aside>
//   </div>
//   <footer>…</footer>
// </body>

// the CSS

// .HolyGrail {
//     display: flex;
//     min-height: 100vh;
//     flex-direction: column;
//   }
  
//   .HolyGrail-body {
//     display: flex;
//     flex: 1;
//   }

//   .HolyGrail-content {
//     flex: 1;
//   }
  
//   .HolyGrail-nav, .HolyGrail-ads {
//     /* 12em is the width of the columns */
//     flex: 0 0 12em;
//   }
  
//   .HolyGrail-nav {
//     /* put the nav on the left */
//     order: -1;
//   }

//   .HolyGrail,
// .HolyGrail-body {
//   display: flex;
//   flex-direction: column;
// }

// .HolyGrail-nav {
//   order: -1;
// }

// @media (min-width: 768px) {
//   .HolyGrail-body {
//     flex-direction: row;
//     flex: 1;
//   }
//   .HolyGrail-content {
//     flex: 1;
//   }
//   .HolyGrail-nav, .HolyGrail-ads {
//     /* 12em is the width of the columns */
//     flex: 0 0 12em;
//   }
// }