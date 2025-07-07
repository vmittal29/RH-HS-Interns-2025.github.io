const students = [
  {
    "name": "Obed Kidimbu",
    "location": "Raleigh, North Carolina",
    "school": "Wake Early College of Information and Biotechnologies",
    "cohort": 1
  },
  {
    "name": "Arjun Patel",
    "location": "Raleigh, North Carolina",
    "school": "Green Hope High School",
    "cohort": 1
  },
  {
    "name": "Senuk Wijesinghe",
    "location": "Raleigh, North Carolina",
    "school": "Apex Friendship High School",
    "cohort": 1
  },
  {
    "name": "Reagan Trinh",
    "location": "Raleigh, North Carolina",
    "school": "Wake Early College of Information and Biotechnologies",
    "cohort": 1
  },
  {
    "name": "Krish Attaluri",
    "location": "Raleigh, North Carolina",
    "school": "Seaforth High School",
    "cohort": 1
  },
  {
    "name": "Mya Evans",
    "location": "Raleigh, North Carolina",
    "school": "Southeast Raleigh Magnet High School",
    "cohort": 1
  },
  {
    "name": "Keenan Haynes",
    "location": "Raleigh, North Carolina",
    "school": "Knightdale High School",
    "cohort": 1
  },
  {
    "name": "Yana Savenkova",
    "location": "Raleigh, North Carolina",
    "school": "Wake Forest High School",
    "cohort": 1
  },
  {
    "name": "Rudra Shende",
    "location": "Raleigh, North Carolina",
    "school": "Wake Early College of Information and Biotechnologies",
    "cohort": 1
  },
  {
    "name": "Firuz Azimov",
    "location": "Raleigh, North Carolina",
    "school": "Cary Christian School",
    "cohort": 1
  },
  {
    "name": "Adit Zetshi",
    "location": "Raleigh, North Carolina",
    "school": "Green Level High School",
    "cohort": 1
  },
  {
    "name": "Sreenitya Yalamanchili",
    "location": "Raleigh, North Carolina",
    "school": "Wake STEM Early College High School",
    "cohort": 1
  },
  {
    "name": "Edward Zhu",
    "location": "Boston, Massachusetts",
    "school": "Worcester Academy",
    "cohort": 1
  },
  {
    "name": "Vani Mittal",
    "location": "Boston, Massachusetts",
    "school": "Acton-Boxborough Regional High School",
    "cohort": 1
  },
  {
    "name": "Joshua Pite",
    "location": "Boston, Massachusetts",
    "school": "Cambridge Rindge and Latin School",
    "cohort": 1
  },
  {
    "name": "Arohan Pathak",
    "location": "Boston, Massachusetts",
    "school": "Littleton High School",
    "cohort": 1
  },
  {
    "name": "Christine Nguyen",
    "location": "Boston, Massachusetts",
    "school": "Boston Latin Academy",
    "cohort": 1
  },
  {
    "name": "Jenayah Marie Rose",
    "location": "Boston, Massachusetts",
    "school": "Cristo Rey Boston High School",
    "cohort": 1
  },
  {
    "name": "Dhisha Kumar",
    "location": "Boston, Massachusetts",
    "school": "Westborough High School",
    "cohort": 1
  },
  {
    "name": "Aydin Ryan Ozpeynirci",
    "location": "Boston, Massachusetts",
    "school": "Wayland High School",
    "cohort": 1
  },
  {
    "name": "Jessica Zanchi",
    "location": "Boston, Massachusetts",
    "school": "Joseph P. Keefe Regional Technical School",
    "cohort": 1
  },
  {
    "name": "Sahil Thadani",
    "location": "Boston, Massachusetts",
    "school": "Westborough High School",
    "cohort": 1
  },
  {
    "name": "Malachi Joseph Seigle Clark",
    "location": "Boston, Massachusetts",
    "school": "Cristo Rey Boston High School",
    "cohort": 1
  },
  {
    "name": "Daniella Menelas",
    "location": "Boston, Massachusetts",
    "school": "Cristo Rey Boston High School",
    "cohort": 1
  },
  {
    "name": "Matthew Madewell",
    "location": "Raleigh, North Carolina",
    "school": "Ravenscroft School",
    "cohort": 2
  },
  {
    "name": "Tyler Parker",
    "location": "Raleigh, North Carolina",
    "school": "Apex Friendship High School",
    "cohort": 2
  },
  {
    "name": "Alina Dhaliwal",
    "location": "Raleigh, North Carolina",
    "school": "Green Level High School",
    "cohort": 2
  },
  {
    "name": "Nolan Scott",
    "location": "Raleigh, North Carolina",
    "school": "Leesville Road High School",
    "cohort": 2
  },
  {
    "name": "Aivan Nguyen",
    "location": "Raleigh, North Carolina",
    "school": "Franklinton High School",
    "cohort": 2
  },
  {
    "name": "Angel Igboanugo",
    "location": "Raleigh, North Carolina",
    "school": "Wakefield High School",
    "cohort": 2
  },
  {
    "name": "Kieran Kelly",
    "location": "Raleigh, North Carolina",
    "school": "Knightdale High School",
    "cohort": 1
  },
  {
    "name": "Garrett Waters",
    "location": "Raleigh, North Carolina",
    "school": "Needham Broughton High School",
    "cohort": 2
  },
  {
    "name": "Arvind Bassi",
    "location": "Raleigh, North Carolina",
    "school": "Cardinal Gibbons High School",
    "cohort": 2
  },
  {
    "name": "Matthew Roach",
    "location": "Raleigh, North Carolina",
    "school": "Apex High School",
    "cohort": 2
  },
  {
    "name": "Anna Badulis",
    "location": "Raleigh, North Carolina",
    "school": "Wakefield High School",
    "cohort": 2
  },
  {
    "name": "Sashank Kondraju",
    "location": "Raleigh, North Carolina",
    "school": "Wake Early College of Information and Biotechnology",
    "cohort": 2
  },
  {
    "name": "Heerak Shah",
    "location": "Raleigh, North Carolina",
    "school": "Wake Early College of Information & Biotechnologies",
    "cohort": 2
  },
  {
    "name": "Isaiah Richardson",
    "location": "Boston, Massachusetts",
    "school": "TEC Connections Academy",
    "cohort": 2
  },
  {
    "name": "Andrew Fang",
    "location": "Boston, Massachusetts",
    "school": "Westford Academy",
    "cohort": 2
  },
  {
    "name": "Kamryn Shumsky",
    "location": "Boston, Massachusetts",
    "school": "Brooks School",
    "cohort": 2
  },
  {
    "name": "Jorge Romero",
    "location": "Boston, Massachusetts",
    "school": "Boston Latin Academy",
    "cohort": 2
  },
  {
    "name": "Sophia Killoran",
    "location": "Boston, Massachusetts",
    "school": "Newton South High School",
    "cohort": 2
  },
  {
    "name": "Bao Nguyen",
    "location": "Boston, Massachusetts",
    "school": "Boston Latin School",
    "cohort": 2
  },
  {
    "name": "Samantha Sun",
    "location": "Boston, Massachusetts",
    "school": "Andover High School",
    "cohort": 2
  },
  {
    "name": "Ella Callahan",
    "location": "Boston, Massachusetts",
    "school": "Melrose High School",
    "cohort": 2
  },
  {
    "name": "Bhavishnu Chowhan Mood",
    "location": "Boston, Massachusetts",
    "school": "North Attleboro High School",
    "cohort": 2
  },
  {
    "name": "Adeena Chowdhury",
    "location": "Boston, Massachusetts",
    "school": "Sharon High School",
    "cohort": 2
  },
  {
    "name": "David (Mateo) Moreno",
    "location": "Boston, Massachusetts",
    "school": "Cristo Rey Boston High School",
    "cohort": 2
  },
  {
    "name": "Ethan Lubomirski",
    "location": "Boston, Massachusetts",
    "school": "Winchester High School",
    "cohort": 2
  }
];