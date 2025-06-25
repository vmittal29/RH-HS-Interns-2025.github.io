// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Function to convert name to directory format (same as used for directory creation)
  function nameToDirectory(name) {
    return name.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '') // Remove special characters except spaces
      .trim()
      .replace(/\s+/g, '-'); // Replace spaces with hyphens
  }

  // Function to generate student card HTML
  function generateStudentCard(student) {
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

    const studentDir = nameToDirectory(student.name);
    let projectLink = `./interns/${studentDir}/about-me.html`;
    let journalLink = `./interns/${studentDir}/journals/journals.html`;
    
    return `
      <div class="pf-v6-c-card" id="student-card">
        <div class="pf-v6-c-card__title">
          <h2 class="pf-v6-c-card__title-text student-name">${student.name}</h2>
        </div>
        <div class="pf-v6-c-card__body student-info">
          <span class="student-school">${student.school} | Cohort ${student.cohort}</span>
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
    `;
  }

  // Separate students by cohort
  const cohort1Students = students.filter(student => student.cohort === 1);
  const cohort2Students = students.filter(student => student.cohort === 2);

  // Store original student data for filtering
  const originalStudents = {
    cohort1: cohort1Students,
    cohort2: cohort2Students
  };

  // Function to render students in a cohort
  function renderStudents(cohortStudents, containerId) {
    const container = document.getElementById(containerId);
    if (container) {
      if (cohortStudents.length === 0) {
        container.innerHTML = '<div class="no-results-message">No students found matching your search.</div>';
      } else {
        const html = cohortStudents.map(student => generateStudentCard(student)).join('');
        container.innerHTML = html;
      }
    }
  }

  // Generate HTML for each cohort
  renderStudents(cohort1Students, 'cohort1-cards');
  renderStudents(cohort2Students, 'cohort2-cards');

  // Search functionality
  function filterStudents(searchTerm) {
    const term = searchTerm.toLowerCase().trim();
    
    if (!term) {
      // If search is empty, show all students
      renderStudents(originalStudents.cohort1, 'cohort1-cards');
      renderStudents(originalStudents.cohort2, 'cohort2-cards');
      return;
    }

    // Filter students based on name, school, or location
    const filteredCohort1 = originalStudents.cohort1.filter(student => 
      student.name.toLowerCase().includes(term) ||
      student.school.toLowerCase().includes(term) ||
      student.location.toLowerCase().includes(term)
    );

    const filteredCohort2 = originalStudents.cohort2.filter(student => 
      student.name.toLowerCase().includes(term) ||
      student.school.toLowerCase().includes(term) ||
      student.location.toLowerCase().includes(term)
    );

    renderStudents(filteredCohort1, 'cohort1-cards');
    renderStudents(filteredCohort2, 'cohort2-cards');
  }

  // Tab switching functionality
  function switchTab(activeTabId, activePanelId) {
    // Remove current state from all tabs and their parent items
    document.querySelectorAll('.pf-v6-c-tabs__link').forEach(tab => {
      tab.classList.remove('pf-m-current');
      tab.setAttribute('aria-selected', 'false');
      tab.setAttribute('tabindex', '-1');
    });
    
    // Remove current state from tab items
    document.querySelectorAll('.pf-v6-c-tabs__item').forEach(item => {
      item.classList.remove('pf-m-current');
    });
    
    // Hide all panels using display:none for reliability
    document.querySelectorAll('.pf-v6-c-tab-content').forEach(panel => {
      panel.style.display = 'none';
    });
    
    // Set active tab
    const activeTab = document.getElementById(activeTabId);
    if (activeTab) {
      activeTab.classList.add('pf-m-current');
      activeTab.setAttribute('aria-selected', 'true');
      activeTab.setAttribute('tabindex', '0');
      
      // Also add current class to the parent tab item
      const parentItem = activeTab.closest('.pf-v6-c-tabs__item');
      if (parentItem) {
        parentItem.classList.add('pf-m-current');
      }
    }
    
    // Show active panel
    const activePanel = document.getElementById(activePanelId);
    if (activePanel) {
      activePanel.style.display = 'block';
    }
  }

  // Add click event listeners to tabs
  const cohort1Tab = document.getElementById('cohort1-tab');
  const cohort2Tab = document.getElementById('cohort2-tab');
  
  if (cohort1Tab) {
    cohort1Tab.addEventListener('click', () => {
      switchTab('cohort1-tab', 'cohort1-panel');
    });
  }
  
  if (cohort2Tab) {
    cohort2Tab.addEventListener('click', () => {
      switchTab('cohort2-tab', 'cohort2-panel');
    });
  }

  // Add keyboard navigation support
  document.querySelectorAll('.pf-v6-c-tabs__link').forEach(tab => {
    tab.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        tab.click();
      }
    });
  });

  // Initialize - show cohort1 by default and hide cohort2
  switchTab('cohort1-tab', 'cohort1-panel');

  // Search input event listeners
  const searchInput = document.getElementById('student-search-input');
  const clearButton = document.getElementById('search-clear-button');

  if (searchInput) {
    // Add input event listener for real-time search
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value;
      filterStudents(searchTerm);
      
      // Show/hide clear button based on input
      if (clearButton) {
        clearButton.style.display = searchTerm ? 'block' : 'none';
      }
    });

    // Add keydown event listener for accessibility
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchInput.value = '';
        filterStudents('');
        if (clearButton) {
          clearButton.style.display = 'none';
        }
      }
    });
  }

  // Clear button event listener
  if (clearButton) {
    clearButton.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      filterStudents('');
      clearButton.style.display = 'none';
    });
  }
  
});