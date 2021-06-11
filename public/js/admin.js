const deleteProduct = (btn) => {
  const prodId = btn.parentNode.querySelector("[name=productId").value;
  const csrf = btn.parentNode.querySelector("[name=_csrf").value;
  const productElement = btn.closest("article"); //gieve the closest ansester
  fetch("/admin/product/" + prodId, {
    method: "DELETE",
    headers: {
      "csrf-token": csrf, //csufr looks for this key (csrf-token)
    },
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      console.log(data);
      productElement.remove();
      //   productElement.parentNode.removeChild(productElement); // this is although work for ie8/ie9
    })
    .catch((err) => {
      console.log(err);
    });
};
