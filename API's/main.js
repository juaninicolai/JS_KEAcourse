fetch("https://yesno.wtf/api/")
  .then((Response) => Response.json())
  .then((yesNo) => {
    console.log(yesNo.answer);

    const answerP = document.querySelector("p");
    answerP.innerHTML = yesNo.answer;

    const image = document.querySelector("img");
    image.setAttribute("src", yesNo.image);
  });

fetch("https://jsonplaceholder.typicode.com/comments", {
  method: "POST",
  body: JSON.stringify({
    name: "Juan",
    email: "juaninicolai@hotmail.com",
    body: "lalala",
  }),
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((Response) => Response.json())
  .then((apiAnswer) => {
    console.log(apiAnswer);
  });
