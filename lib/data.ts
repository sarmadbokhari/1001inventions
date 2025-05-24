export interface Innovator {
  id: string;
  name: string;
  years: string;
  fields: string[];
  shortDescription: string;
  detailedDescription: string;
  inventions: string[];
  primaryField: string;
  questions: string[];
}

export const innovators: Innovator[] = [
      {
        id: 'al-jazari',
        name: 'Al-Jazari',
        years: 'Early 13th century',
        fields: ['Engineering', 'Mechanical Engineering', 'Automation'],
        shortDescription: 'Creating automated machines water clocks and mechanical devices',
        detailedDescription: 'Al-Jazari was a mechanical engineer who created numerous ingenious mechanical devices including water-raising machines, clocks, and automata. His most famous work "The Book of Knowledge of Ingenious Mechanical Devices" (1206) documented 50 mechanical devices with instructions on how to build them. He is considered one of the fathers of robotics and modern mechanical engineering.',
        inventions: [
            'Water-Raising Machines',
            'Mechanical Clock Designs',
            'Automated Devices'
        ],
        primaryField: 'engineering',
        questions: [
            'How did Al-Jazari\'s automata influence modern robotics?',
            'What were the key innovations in his water-raising machines?',
            'How did his mechanical devices impact medieval technology?'
        ]
    },
    {
        id: 'ibn-al-haytham',
        name: 'Ibn al-Haytham',
        years: '965-1039',
        fields: ['Optics', 'Physics', 'Mathematics', 'Astronomy', 'Medicine'],
        shortDescription: 'Revolutionizing optics and developing the scientific method',
        detailedDescription: 'Ibn al-Haytham revolutionized optics, taking the subject from philosophical discussions to a science based on experiments. He correctly explained the process of vision, described the structure of the eye, and invented the camera obscura. His Book of Optics had a profound influence on European scientists. He is also credited with early development of the scientific method through his emphasis on experimental evidence.',
        inventions: [
            'Camera Obscura',
            'Experimental Scientific Method',
            'Optics Research'
        ],
        primaryField: 'physics',
        questions: [
            'How did Ibn al-Haytham\'s camera obscura lead to modern photography?',
            'What was revolutionary about his approach to scientific experimentation?',
            'How did his work on optics influence Renaissance scientists?'
        ]
    },
    {
        id: 'jabir-ibn-hayyan',
        name: 'Jabir ibn Hayyan',
        years: '722-815',
        fields: ['Chemistry', 'Alchemy', 'Pharmacy', 'Medicine', 'Astronomy', 'Philosophy'],
        shortDescription: 'Founding experimental chemistry and discovering important acids',
        detailedDescription: 'Jabir ibn Hayyan perfected the distillation process and discovered vitally important acids including sulfuric, nitric, and hydrochloric acids. He designed and used more than 20 laboratory instruments, developed cooling techniques, and established the foundations of modern chemistry. His works were translated into Latin and had significant influence on European alchemists and chemists.',
        inventions: [
            'Distillation Apparatus',
            'Strong Acids',
            'Laboratory Instruments'
        ],
        primaryField: 'chemistry',
        questions: [
            'How did Jabir\'s discovery of acids revolutionize chemistry?',
            'What was the significance of his laboratory instruments?',
            'How did his distillation techniques influence modern chemistry?'
        ]
    },
    {
        id: 'al-zahrawi',
        name: 'Al-Zahrawi',
        years: '936-1013',
        fields: ['Medicine', 'Surgery', 'Pharmacy'],
        shortDescription: 'Transforming surgery through innovative techniques and instruments',
        detailedDescription: 'Al-Zahrawi was a revolutionary physician and surgeon who wrote Al-Tasrif, a 30-volume medical encyclopedia that included detailed accounts of dental, pharmaceutical, and surgical practices. He invented numerous surgical instruments (over 200) including forceps, scalpels, and the surgical needle. He was the first to use catgut for internal stitches and described numerous surgical procedures still in use today.',
        inventions: [
            'Surgical Instruments',
            'Catgut Sutures',
            'Surgical Procedures'
        ],
        primaryField: 'medicine',
        questions: [
            'Which modern surgical instruments can be traced back to Al-Zahrawi?',
            'How did his use of catgut sutures change surgical practice?',
            'What surgical procedures did he pioneer that are still used today?'
        ]
    },
    {
        id: 'ibn-sina',
        name: 'Ibn Sina',
        years: '980-1037',
        fields: ['Medicine', 'Philosophy', 'Astronomy', 'Chemistry', 'Geology', 'Psychology'],
        shortDescription: 'Writing the Canon of Medicine a comprehensive medical encyclopedia',
        detailedDescription: 'Ibn Sina was a polymath whose Canon of Medicine became the standard medical text in Europe for over 700 years. He described numerous diseases and their treatments, introduced systematic experimentation in medicine, and made significant contributions to anatomy, gynecology, and pediatrics. Beyond medicine, he made important contributions to philosophy, astronomy, and other fields.',
        inventions: [
            'Canon of Medicine',
            'Medical Diagnosis Methods',
            'Pharmaceutical Knowledge'
        ],
        primaryField: 'medicine',
        questions: [
            'Why was the Canon of Medicine so influential for centuries?',
            'What were Ibn Sina\'s contributions to understanding diseases?',
            'How did his philosophical work complement his medical practice?'
        ]
    },
    {
        id: 'al-biruni',
        name: 'Al-Biruni',
        years: '973-1050',
        fields: ['Astronomy', 'Mathematics', 'Physics', 'Geography', 'History', 'Pharmacy'],
        shortDescription: 'Calculating Earth\'s circumference and developing scientific methods',
        detailedDescription: 'Al-Biruni spent most of his life studying the Earth and its features. He calculated the Earth\'s circumference with remarkable accuracy, developed methods to determine longitude and latitude, and made significant contributions to geodesy. He wrote extensively on India, minerals, astronomy, and mathematics, producing over 146 works across various disciplines.',
        inventions: [
            'Earth\'s Circumference Calculation',
            'Geographic Methods',
            'Astronomical Measurements'
        ],
        primaryField: 'astronomy',
        questions: [
            'How accurate was Al-Biruni\'s calculation of Earth\'s circumference?',
            'What methods did he use to determine longitude and latitude?',
            'How did his geographic studies influence medieval exploration?'
        ]
    },
    {
        id: 'al-kindi',
        name: 'Al-Kindi',
        years: '801-873',
        fields: ['Philosophy', 'Mathematics', 'Cryptography', 'Physics', 'Medicine', 'Music'],
        shortDescription: 'Developing frequency analysis for cryptography and contributions to philosophy',
        detailedDescription: 'Al-Kindi was an encyclopedic polymath working as a physician, philosopher, mathematician, cryptographer, musician, and astronomer. He developed the technique of frequency analysis for breaking ciphers, made significant contributions to optics, and was among the first to introduce Greek philosophy to the Arabic-speaking world. He wrote hundreds of treatises on a wide range of subjects.',
        inventions: [
            'Frequency Analysis in Cryptography',
            'Cryptanalysis',
            'Philosophical Synthesis'
        ],
        primaryField: 'mathematics',
        questions: [
            'How did frequency analysis revolutionize cryptography?',
            'What was Al-Kindi\'s role in transmitting Greek philosophy?',
            'How did his work influence medieval code-breaking?'
        ]
    },
    {
        id: 'ibn-battuta',
        name: 'Ibn Battuta',
        years: '1304-1368/70',
        fields: ['Geography', 'Exploration', 'Travel Writing'],
        shortDescription: 'Extensive travels throughout the medieval world',
        detailedDescription: 'Ibn Battuta traveled more than 75,000 miles over 29 years, visiting the equivalent of 44 modern countries. His journey began as a pilgrimage to Mecca but expanded into a global exploration. His travel account, the Rihla, provides valuable insights into the medieval world, its cultures, peoples, and geography, making him one of history\'s greatest travelers.',
        inventions: [
            'Geographic Documentation',
            'Cultural Studies',
            'Travel Literature'
        ],
        primaryField: 'geography',
        questions: [
            'What made Ibn Battuta\'s travels so extraordinary for his time?',
            'How did his Rihla contribute to geographic knowledge?',
            'What cultural insights did he provide about the medieval world?'
        ]
    },
    {
        id: 'al-idrisi',
        name: 'Al-Idrisi',
        years: '1099-1166',
        fields: ['Geography', 'Cartography'],
        shortDescription: 'Creating detailed world maps and geographical works',
        detailedDescription: 'Al-Idrisi was commissioned by the Norman King Roger II of Sicily to create a world map. The resulting work, known as the Tabula Rogeriana (1154), was the most accurate world map of its time. His accompanying book "Nuzhat al-Mushtaq" contained detailed information about the world\'s regions, peoples, and trade routes. His cartographic work influenced European exploration for centuries.',
        inventions: [
            'Tabula Rogeriana (World Map)',
            'Geographic Encyclopedia',
            'Cartographic Techniques'
        ],
        primaryField: 'geography',
        questions: [
            'Why was the Tabula Rogeriana so accurate for its time?',
            'How did Al-Idrisi\'s maps influence European exploration?',
            'What geographic knowledge did he preserve in his writings?'
        ]
    },
    {
        id: 'ibn-khaldun',
        name: 'Ibn Khaldun',
        years: '1332-1406',
        fields: ['History', 'Sociology', 'Economics', 'Political Science'],
        shortDescription: 'Founding modern sociology and historiography',
        detailedDescription: 'Ibn Khaldun wrote Al-Muqaddimah (The Introduction), a groundbreaking work on universal history that established the foundations of several social sciences. He developed theories on social cohesion, economic development, and the rise and fall of civilizations. He is considered the father of sociology, historiography, and economics, introducing scientific methods to the study of society centuries before Western scholars.',
        inventions: [
            'Sociological and Historical Methodology',
            'Economic Theory',
            'Social Science Foundations'
        ],
        primaryField: 'sociology',
        questions: [
            'How did Ibn Khaldun\'s theories predict the rise and fall of civilizations?',
            'What made his approach to history so revolutionary?',
            'How did he establish the foundations of modern sociology?'
        ]
    },
    {
        id: 'al-khwarizmi',
        name: 'Al-Khwarizmi',
        years: '780-850',
        fields: ['Mathematics', 'Astronomy', 'Geography'],
        shortDescription: 'Developing algebra and introducing Hindu-Arabic numerals to the West',
        detailedDescription: 'Al-Khwarizmi\'s work on algebra (the word "algebra" comes from the title of his book "Al-Jabr") laid the foundations for this branch of mathematics. He introduced the decimal positional number system to the Western world and developed the concept of the algorithm (which is derived from his name). His geographical work included coordinating the project to determine Earth\'s circumference.',
        inventions: [
            'Algebra',
            'Algorithm',
            'Decimal Positional Number System'
        ],
        primaryField: 'mathematics',
        questions: [
            'How did Al-Khwarizmi\'s algebra revolutionize mathematics?',
            'What is the connection between his name and the word "algorithm"?',
            'How did the Hindu-Arabic numeral system change computation?'
        ]
    },
    {
        id: 'ibn-al-nafis',
        name: 'Ibn al-Nafis',
        years: '1210-1288',
        fields: ['Medicine', 'Anatomy', 'Physiology'],
        shortDescription: 'Discovering pulmonary circulation',
        detailedDescription: 'Ibn al-Nafis was the first to describe the pulmonary circulation of the blood, challenging Galen\'s incorrect theory that had dominated medicine for over a millennium. His treatise, a commentary on Ibn Sina\'s Canon, accurately described how blood moves from the right to the left side of the heart through the lungs, where it mixes with air. This discovery predated European descriptions by nearly 300 years.',
        inventions: [
            'Pulmonary Circulation',
            'Cardiovascular Understanding',
            'Medical Anatomy'
        ],
        primaryField: 'medicine',
        questions: [
            'How did Ibn al-Nafis challenge Galen\'s theories about circulation?',
            'What was revolutionary about his description of blood circulation?',
            'How did his work influence later understanding of the heart?'
        ]
    },
    {
        id: 'abbas-ibn-firnas',
        name: 'Abbas ibn Firnas',
        years: '810-887',
        fields: ['Aviation', 'Engineering', 'Poetry', 'Chemistry'],
        shortDescription: 'Early experiments in human flight',
        detailedDescription: 'Abbas ibn Firnas was a polymath who made the first documented attempt at controlled flight. In his 70s, he constructed a flying machine made of silk and eagle feathers and flew from a hill near Cordoba, staying aloft for a considerable time before crash-landing. He also developed techniques for cutting rock crystal, created a planetarium, and made improvements to the water clock.',
        inventions: [
            'Flying Machine',
            'Crystal Cutting Techniques',
            'Planetarium Design'
        ],
        primaryField: 'engineering',
        questions: [
            'How did Abbas ibn Firnas inspire the Wright Brothers?',
            'What materials and design did he use for his flying machine?',
            'What other inventions complemented his aviation experiments?'
        ]
    },
    {
        id: 'fatima-al-fihri',
        name: 'Fatima al-Fihri',
        years: '9th century',
        fields: ['Education', 'Philanthropy'],
        shortDescription: 'Founding the world\'s first university',
        detailedDescription: 'Fatima al-Fihri founded Al-Qarawiyin University in Fez, Morocco, using her own fortune. Established in 859 CE, it is recognized by UNESCO and Guinness World Records as the oldest continuously operating university in the world. The institution began as a mosque and developed into a major educational center that attracted scholars and students from across the Muslim world and beyond.',
        inventions: [
            'University Education System',
            'Higher Learning Institution',
            'Educational Philanthropy'
        ],
        primaryField: 'education',
        questions: [
            'How did Al-Qarawiyin University influence global education?',
            'What made this institution revolutionary for its time?',
            'How did Fatima\'s vision shape higher education?'
        ]
    },
    {
        id: 'al-battani',
        name: 'Al-Battani',
        years: '858-929',
        fields: ['Astronomy', 'Mathematics'],
        shortDescription: 'Precise astronomical observations and trigonometric developments',
        detailedDescription: 'Al-Battani made remarkably accurate astronomical observations, correcting some of Ptolemy\'s calculations. He determined the solar year as 365 days, 5 hours, 46 minutes and 24 seconds, which is very close to modern values. He developed trigonometric ratios used today and produced new, more precise astronomical tables. His work was highly influential in Europe during the Renaissance.',
        inventions: [
            'Astronomical Measurements',
            'Trigonometric Ratios',
            'Solar Year Calculation'
        ],
        primaryField: 'astronomy',
        questions: [
            'How accurate were Al-Battani\'s astronomical measurements?',
            'What trigonometric developments did he contribute?',
            'How did his work correct Ptolemy\'s errors?'
        ]
    },
    {
        id: 'ibn-rushd',
        name: 'Ibn Rushd',
        years: '1126-1198',
        fields: ['Philosophy', 'Medicine', 'Astronomy', 'Law', 'Theology'],
        shortDescription: 'Commentaries on Aristotle and contributions to philosophy',
        detailedDescription: 'Ibn Rushd was a master of philosophy, law, medicine, and astronomy. His commentaries on Aristotle preserved and reinterpreted Greek philosophy for both the Islamic and Christian worlds. He defended the use of reason in religious interpretation and made significant contributions to medicine, including work on the function of the retina and the existence of immunity.',
        inventions: [
            'Aristotelian Commentaries',
            'Philosophical Synthesis',
            'Medical Research'
        ],
        primaryField: 'philosophy',
        questions: [
            'How did Ibn Rushd\'s commentaries preserve Aristotelian philosophy?',
            'What was his approach to reconciling reason and faith?',
            'How did his work influence both Islamic and Christian thought?'
        ]
    },
    {
        id: 'maryam-al-ijliya',
        name: 'Maryam al-Ijliya',
        years: '10th century',
        fields: ['Astronomy', 'Engineering'],
        shortDescription: 'Constructing astrolabes',
        detailedDescription: 'Maryam al-Ijliya was an astrolabe maker who worked in Aleppo, Syria during the reign of Sayf al-Dawla. She was known for her skill in designing and constructing these complex astronomical instruments, which were used for navigation, timekeeping, and astronomical observations. Her expertise in this precision craft was recognized by the court, highlighting the role of women in scientific and technical fields.',
        inventions: [
            'Astrolabe Improvements',
            'Precision Instruments',
            'Astronomical Tools'
        ],
        primaryField: 'astronomy',
        questions: [
            'What made Maryam\'s astrolabes superior to others?',
            'How did astrolabes function in medieval astronomy?',
            'What role did women play in Islamic Golden Age science?'
        ]
    },
    {
        id: 'thabit-ibn-qurra',
        name: 'Thabit ibn Qurra',
        years: '826-901',
        fields: ['Mathematics', 'Astronomy', 'Mechanics', 'Medicine', 'Philosophy'],
        shortDescription: 'Contributions to number theory and translations of Greek works',
        detailedDescription: 'Thabit ibn Qurra made significant contributions to mathematics, including work on number theory where he discovered a beautiful theorem regarding amicable numbers. He translated and revised many Greek scientific works, making them accessible to the Arabic-speaking world. His work in astronomy included improvements to the theory of the motion of the sun, moon, and planets.',
        inventions: [
            'Number Theory Advances',
            'Greek Text Translations',
            'Astronomical Theories'
        ],
        primaryField: 'mathematics',
        questions: [
            'What was Thabit\'s theorem about amicable numbers?',
            'How did his translations preserve Greek knowledge?',
            'What astronomical improvements did he make?'
        ]
    },
    {
        id: 'al-farabi',
        name: 'Al-Farabi',
        years: '872-950',
        fields: ['Philosophy', 'Logic', 'Music', 'Political Science'],
        shortDescription: 'Synthesizing Greek and Islamic philosophy',
        detailedDescription: 'Al-Farabi, known as "the Second Teacher" (after Aristotle), developed a comprehensive philosophical system that integrated Greek philosophy with Islamic thought. He made significant contributions to logic, political philosophy, and music theory, developing musical notation and improving musical instruments. His works on the perfect state and classification of sciences influenced both Eastern and Western thought.',
        inventions: [
            'Philosophical Synthesis',
            'Musical Notation',
            'Political Theory'
        ],
        primaryField: 'philosophy',
        questions: [
            'How did Al-Farabi synthesize Greek and Islamic philosophy?',
            'What were his contributions to music theory?',
            'How did his political philosophy influence later thinkers?'
        ]
    },
    {
        id: 'al-razi',
        name: 'Al-Razi',
        years: '854-925',
        fields: ['Medicine', 'Chemistry', 'Philosophy'],
        shortDescription: 'Pioneering clinical medicine and discovering numerous compounds',
        detailedDescription: 'Al-Razi was a pioneering physician who established the foundation of clinical medicine. He was the first to distinguish between smallpox and measles, wrote the first book on pediatrics, and developed early forms of distillation apparatus. In chemistry, he classified substances into animal, vegetable, and mineral, discovered numerous compounds, and developed methods for chemical experimentation.',
        inventions: [
            'Smallpox and Measles Differentiation',
            'Clinical Medicine Methods',
            'Chemical Classification'
        ],
        primaryField: 'medicine',
        questions: [
            'How did Al-Razi differentiate between smallpox and measles?',
            'What was revolutionary about his approach to clinical medicine?',
            'How did his chemical work influence modern chemistry?'
        ]
    }
];

export const fieldColors = {
  medicine: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  mathematics: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  astronomy: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
  geography: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-300',
  engineering: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  chemistry: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  physics: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
  education: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
  default: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
};

export function getFieldColor(field: string): string {
  const key = field.toLowerCase().replace(/[^a-z]/g, '');
  return fieldColors[key as keyof typeof fieldColors] || fieldColors.default;
}

export function getInnovatorInitials(name: string): string {
  return name.split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);
}