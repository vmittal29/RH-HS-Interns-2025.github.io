const students = [
  {
    "name": "First Last",
    "location": "Raleigh, North Carolina",
    "school": "High School",
    "class": "2025",
    "pronouns": "He/Him",
  },
  {
    "name": "First Last",
    "location": "Boston, Massachusetts",
    "school": "High School",
    "class": "2025",
    "pronouns": "He/Him",
  }
];


const wrapper = document.querySelector('.student-card-list');
let html = '';
for (let student of students) {

  let locationChip = '';

  if(student.location === "Raleigh, North Carolina") {
    locationChip =
    `
    <span class="pf-v6-c-label pf-m-red">
      <span class="pf-v6-c-label__content">
        <span class="pf-v6-c-label__icon">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
        </span>
        <span class="pf-v6-c-label__text student-location">${student.location}</span>
      </span>
    </span>
    `
  }

  if(student.location === "Boston, Massachusetts") {
    locationChip =
    `
    <span class="pf-v6-c-label pf-m-cyan">
      <span class="pf-v6-c-label__content">
        <span class="pf-v6-c-label__icon">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
        </span>
        <span class="pf-v6-c-label__text student-location">${student.location}</span>
      </span>
    </span>
    `
  }

  let projectLink = `./interns/${student.name.replace(/\s+/g, '-').toLowerCase()}/index.html`;
  let journalLink = `./interns/${student.name.replace(/\s+/g, '-').toLowerCase()}/journals/index.html`;
  html +=
  `
    <div class="pf-v6-c-card" id="student-card">
      <div class="pf-v6-c-card__title">
        <h2 class="pf-v6-c-card__title-text student-name">${student.name}</h2>
      </div>
      <div class="pf-v6-c-card__body student-info">
        <span class="student-school">${student.school} | Class of ${student.class}</span>
        ${locationChip}
      </div>
      <div class="pf-v6-c-card__footer">
        <a
          class="pf-v6-c-button pf-m-secondary student-page"
          href=${projectLink}
        >Test page</a>
        <a
          class="pf-v6-c-button pf-m-link student-journal"
          href=${journalLink}
        >Journal entries</a>
      </div>
    </div>
  `
};

wrapper.innerHTML = html;