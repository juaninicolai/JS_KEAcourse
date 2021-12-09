const router = new Navigo("/", { hash: true });
router
  .on({
    "/": () => {
      console.log("User requested main page");
    },
    about: () => {
      console.log("User requested the about page");
    },
    "/user/:id/": ({ data }) => {
      console.log("User requested user page with id " + data.id);
    },
  })
  .resolve();
