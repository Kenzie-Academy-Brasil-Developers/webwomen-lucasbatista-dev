// CATCHING UL -----> RENDER PRODUCTS
const ulJobs = document.querySelector("#jobsList");
const ulSelectedJobs = document.getElementById("ulSelectedJobs");

//<--------------------------------- CRIAR E RENDERIZAR VAGAS --------------------------------->

function render(array) {
  const section = document.getElementById("mainSection");
  array.forEach((job) => {
    const vacancy = renderJobs(job);
    section.appendChild(vacancy);
  });
}
function renderJobs(element) {
  const tagLi = document.createElement("li");
  tagLi.classList = "container-vacancy adaptative";
  const tagH2 = document.createElement("h2");
  tagH2.classList.add("vacancy-title");
  const tagDiv1 = document.createElement("div");
  tagDiv1.classList.add("size-small");
  const tagSmall1 = document.createElement("small");
  tagSmall1.classList.add("vacancy-small");
  const tagSmall2 = document.createElement("small");
  tagSmall2.classList.add("vacancy-small");
  const tagP = document.createElement("p");
  tagP.classList.add("vacancy-p");
  const tagDiv2 = document.createElement("div");
  tagDiv2.classList = "width100 flex justify-between adaptativeButton";
  const tagSpan = document.createElement("span");
  tagSpan.classList.add("vacancy-span");
  const tagButton = document.createElement("button");
  tagButton.classList.add("buttun-apply");

  tagH2.innerText = element.title;
  tagSmall1.innerText = element.enterprise;
  tagSmall2.innerText = element.location;
  tagP.innerText = element.descrition;
  tagSpan.innerText = element.modalities;
  tagButton.innerText = "Candidatar";

  if (jobAlreadySelected(element) >= 0) {
    tagButton.innerText = "Remover Candidatura";
  } else {
    tagButton.innerText = "Candidatar";
  }

  tagButton.addEventListener("click", () => {
    selectAndRemove(element, tagButton);
  });

  tagLi.append(tagH2, tagDiv1, tagP, tagDiv2);
  tagDiv1.append(tagSmall1, tagSmall2);
  tagDiv2.append(tagSpan, tagButton);

  ulJobs.append(tagLi);
  return ulJobs;
}
render(jobsData);

//<---------------------------- CRIAR E RENDERIZAR VAGAS SELECIONADAS ---------------------------->

function renderSelected(array) {
  const section = document.getElementById("mainAside");
  array.forEach((job, index) => {
    const vacancy = renderSelectedJobs(job, index);
    section.appendChild(vacancy);
  });
}
renderSelected(getSelectedJobs());

function renderSelectedJobs(vacancy, index) {
  const { title, enterprise, location } = vacancy;

  const tagLi = document.createElement("li");
  tagLi.classList.add("aside-li");
  const tagDiv1 = document.createElement("div");
  tagDiv1.classList.add("flex");
  const tagH3 = document.createElement("h3");
  tagH3.classList.add("vacancy-title");
  const tagButton = document.createElement("button");
  tagButton.classList.add("button-trash");
  const tagImg = document.createElement("img");
  const tagDiv2 = document.createElement("div");
  const tagSmall1 = document.createElement("small");
  tagSmall1.classList.add("vacancy-small");
  const tagSmall2 = document.createElement("small");
  tagSmall2.classList.add("vacancy-small");

  tagH3.innerText = title;
  tagImg.src = "assets/img/trash (2).svg";
  tagSmall1.innerText = enterprise;
  tagSmall2.innerText = location;
  tagButton.id = index;

  tagButton.addEventListener("click", (event) => {
    event.preventDefault();
    getSelectedJobs().splice(index, 1);
  });

  tagLi.append(tagDiv1, tagDiv2);
  tagDiv1.append(tagH3, tagButton);
  tagButton.append(tagImg);
  tagDiv2.append(tagSmall1, tagSmall2);

  ulSelectedJobs.append(tagLi);

  return ulSelectedJobs;
}
