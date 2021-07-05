// const deleteProduct = btn => {
//   const prodId = btn.parentNode.querySelector('[name=productId]').value;
//   const csrf = btn.parentNode.querySelector('[name=_csrf]').value;

//   const productElement = btn.closest('article');

//   fetch('/admin/product/' + prodId, {
//     method: 'DELETE',
//     headers: {
//       'csrf-token': csrf
//     }
//   })
//     .then(result => {
//       return result.json();
//     })
//     .then(data => {
//       console.log(data);
//       productElement.parentNode.removeChild(productElement);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

document.querySelectorAll("#dlBtn").forEach((p) => {
  p.addEventListener("click", myFunction.bind(this));
  return;
});

function myFunction(p) {
  console.log(p.path[2]);
  let btn = p.path[2];
  const prodId = btn.closest("article").querySelector("[name=productId]").value;
  console.log(prodId);
  const csrf = btn.parentNode.querySelector("[name=_csrf]").value;

  const productElement = btn.closest("article");

  fetch("/admin/product/" + prodId, {
    method: "DELETE",
    headers: {
      "csrf-token": csrf,
    },
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      console.log(data);
      productElement.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}
