
let nav = document.getElementById('navbar');


nav.innerHTML = `<div class="container-fluid">
      <div class="row">
        <nav class="navbar bgcol_pri navbar-expand-sm nav-hide">
          <div class="container-fluid justify-content-center">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link top-nav-text" aria-current="page" href="#">DBIT Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link top-nav-text" href="http://parent.dbit.in/"
                  >Parent Login</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link top-nav-text" href="https://alumni.dbit.in/">Alumni</a>
              </li>
              <li class="nav-item">
                <a class="nav-link top-nav-text" href="https://moodle.dbit.in/">Moodle</a>
              </li>
              <li class="nav-item">
                <a class="nav-link top-nav-text" href="https://elearn.dbit.in/">E-Learn</a>
              </li>
              <li class="nav-item">
                <a class="nav-link top-nav-text" href="http://dbitlrc.dbit.in/">Library</a>
              </li>
              <li class="nav-item">
                <a class="nav-link top-nav-text" href="https://dbcldrive.dbit.in/"
                  >DBCL Drive</a
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="row">
        <img class="p-0" src="/assets/final.jpg" alt="" srcset="" />
      </div>
    </div>

    <header class="sticky-top bgcol_pri" style="z-index: 10">
      <nav
        class="navbar navbar-expand-xl container-fluid justify-content-between"
      >
        <span class="navbar-brand mb-0 h1 ms-3">COMPS DBIT</span>
        <button
          class="navbar-toggler me-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header justify-content-end">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 offcanvas-nav">
              <li class="nav-item text-center">
                <a class="nav-link" aria-current="page" href="/index.html">HOME</a>
              </li>
              <li class="nav-item text-center">
                <a class="nav-link" href="/aboutus/aboutus.html">ABOUT US</a>
              </li>
              <li class="nav-item dropdown text-center">
                <a
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ACADEMICS
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/academics/academic-calendar.html">Academic Calender</a>
                  </li>
                  <li><a class="dropdown-item" href="/academics/exam-calendar.html">Exam Timetable</a></li>
                  <li><a class="dropdown-item" href="/academics/mou.html">MOU</a></li>
                  <li><a class="dropdown-item" href="/academics/corporate_advisory.html">Corporate Advisory</a></li>
                  <li><a class="dropdown-item" href="/academics/timetable.html">Timetable</a></li>
                  <li><a class="dropdown-item" href="/academics/academic_syllabus.html">Syllabus</a></li>
                  <li><a class="dropdown-item" href="/academics/university_question_papers.html">University Question Papers</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown text-center">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  FACULTY
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/faculty/faculty_profile.html">Profile</a>
                  </li>
                  <li><a class="dropdown-item" href="/faculty/faculty_recognition.html">Recognition</a></li>
                  <li><a class="dropdown-item" href="/faculty/minor_grants.html">Minor grants</a></li>
                  <li><a class="dropdown-item" href="/faculty/research_publications.html">Research Publications</a></li>
                  
                </ul>
              </li>
              <li class="nav-item dropdown text-center">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  STUDENTS
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/students/undergraduate-project.html">Under Graduate Projects</a>
                  </li>
                  <li><a class="dropdown-item" href="/students/recognition.html">Recognition</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown text-center">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CO-CURRICULAR ACTIVITIES
                </a>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/cocurricular/newsletter.html">News Letters</a></li>
                
                <li><a class="dropdown-item" href="https://dbit.acm.org/">ACM Student Chapter</a></li>
                <li><a class="dropdown-item" href="/cocurricular/alumni.html">Alumni Interaction</a></li>
                <li><a class="dropdown-item" href="/cocurricular/guestsession.html">Guest Sessions</a></li>
                <li><a class="dropdown-item" href="/cocurricular/industrial_visit.html">Industrial Visits</a></li>
                <li><a class="dropdown-item" href="/cocurricular/events.html">Certification & Workshop programs</a></li>
                <li><a class="dropdown-item" href="/cocurricular/innovex.html">Major Project / Mini Project</a></li>
                <li><a class="dropdown-item" href="/cocurricular/department_day.html">Department Day</a></li>
                <li><a class="dropdown-item" href="/cocurricular/programming_contest.html">Programming Contests</a></li>
                <li><a class="dropdown-item" href="/cocurricular/others.html">Others</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown text-center">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PLACEMENT & INTERNSHIP
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      class="dropdown-item"
                      href="/placement&internship/internship.html"
                      >Internship Record</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://placement.dbit.in/"
                      target="_blank"
                      >Placement Record</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>`