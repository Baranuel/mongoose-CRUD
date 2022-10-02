function showErrors(response) {
  if (document.getElementById("sign")) document.getElementById("sign").remove();

  const errorSign = document.createElement("div");
  errorSign.classList.add("error-sign");
  errorSign.setAttribute("id", "sign");
  errorSign.addEventListener("click", () => {
    errorSign.remove();
  });

  response.errors.forEach((err) => {
    Object.entries(err).map((error) => {
      const errorDiv = document.createElement("div");
      errorDiv.classList.add("error-div");
      const h4 = document.createElement("h4");
      h4.textContent = error[0] + " -";

      const p = document.createElement("p");
      p.textContent = error[1];

      errorDiv.append(h4);
      errorDiv.append(p);
      errorSign.append(errorDiv);
    });
  });
  form.append(errorSign);
}
