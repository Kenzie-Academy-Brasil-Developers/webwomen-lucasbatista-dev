function getSelectedJobs() {
  return JSON.parse(localStorage.getItem("@WebWomen:selectedJobs")) || [];
}
console.log(getSelectedJobs());
function jobAlreadySelected(vacancy) {
  return getSelectedJobs().findIndex(
    (element) => element.title === vacancy.title
  );
}

function selectAndRemove(vacancy, button) {
  const jobExist = jobAlreadySelected(vacancy);
  let selectedJobs = getSelectedJobs();

  if (jobExist < 0) {
    selectedJobs = [...selectedJobs, vacancy];
    renderSelectedJobs(vacancy);
    button.innerText = "Remover Candidatura";
  } else {
    selectedJobs.splice(jobExist, 1);
    button.innerText = "Candidatar";
  }
  localStorage.setItem("@WebWomen:selectedJobs", JSON.stringify(selectedJobs));
}
