var app = new Vue({
  el: '#app',
  data: {
	  questionnum: 0,
	  score: 0,
	  answered: false,
	  answernum: 0,
          state: 'title',
	  answerstyle:
	  [
			"background-color: #dddddd; border: 2px solid gray;",
			"background-color: #dddddd; border: 2px solid gray;",
			"background-color: #dddddd; border: 2px solid gray;",
			"background-color: #dddddd; border: 2px solid gray;",
	  ],
	  quiz: [
	  {
		  question: "This English polymath is credited with inventing the first mechanical computer, over 100 years before the ENIAC:",
		  answer1: "Howard Aiken",
		  answer2: "Charles Babbage",
		  answer3: "John Atanasoff",
		  answer4: "John Backus",
		  correct: 1,
		  correctans: "Charles Babbage",
		  answerimage: "image1.jpg",
		  answertext: `Charles Babbage's 1837 Analytical Engine, equipped with memory,
		  conditional control flow, and programmable punch cards, is widely considered to be
		  the first programmable general-purpose computer ever designed. Sadly, due to lack of funding
		  and ownership disputes, 
		  Babbage was never able to see his invention built. It actually wasn't until a century after Babbage's
		  original design that the first fully functional general-purpose computer would be constructed.`
	  },
	  {
		  question: "This English mathematician wrote the first algorithm designed to be run on the Analytical Engine, in the process becoming the world's first programmer:",
		  answer1: "Ada Lovelace",
		  answer2: "George Boole",
		  answer3: "Fred Brooks",
		  answer4: "Wesley Clark",
		  correct: 0,
		  correctans: "Ada Lovelace",
		  answerimage: "image2.jpg",
		  answertext: `Ada Lovelace's full name is actually Augusta Ada King-Noel, Countess of Lovelace. She was encouraged by her mother to study
		  mathematics and logic, and her friendship with Babbage led to her publication of the first computer algorithm ever made. It is believed that the
		  Ada programming language was named in her honor.`
	  },
	  {
		  question: "Born in 1912, this man's theoretical model of computation (named after him) is capable of solving any computable problem:",
		  answer1: "Vint Cerf",
		  answer2: "Alan Turing",
		  answer3: "Noam Chomsky",
		  answer4: "Edsger Dijkstra",
		  correct: 1,
		  correctans: "Alan Turing",
		  answerimage: "image3.jpg",
		  answertext: `Since its creation in 1936, the Turing Machine has been the key to many of
		  computing's most landmark proofs. One such proof is that certain problems are unsolvable for
		  even the most advanced of computers - for example, the problem of deciding with certainty whether any arbitrary
		  algorithm will finish on a given input or loop forever (the halting problem).`
	  },
	  {
		  question: "Known as the 'father of information theory', he published a groundbreaking paper in 1948 that showed how digital circuits could be designed to implement logical statements:",
		  answer1: "Claude Shannon",
		  answer2: "James Cooley",
		  answer3: "Douglas Engelbart",
		  answer4: "Gottlob Frege",
		  correct: 0,
		  correctans: "Claude Shannon",
		  answerimage: "image4.jpg",
		  answertext: `In addition to paving the way for modern digital computers, Shannon also worked
as a cryptanalyst, helping the U.S. in WWII to crack the encryption algorithms of its enemies' wartime communications.
Shannon also met Alan Turing during this time, and the two men discussed each other's ideas over tea.`
	  },
	  {
		  question: "This American inventor received the Nobel Prize along with two other men for his invention of the transistor:",
		  answer1: "Edgar Codd",
		  answer2: "Edmund Clarke",
		  answer3: "William Shockley",
		  answer4: "Sally Floyd",
		  correct: 2,
		  correctans: "William Shockley",
		  answerimage: "image5.jpg",
		  answertext: `The transistor, a simple electronic switch which can change state billions of times a second, has been so impactful
		  to human society that it often listed as one of the
greatest inventions of all time, alongside discoveries like electricity and the steam engine. Modern CPU's today typically contain over a billion transistors!`
	  },
	  {
		  question: "This U.S. Navy Rear Admiral invented the first compiler and one of the earliest high-level programming languages, COBOL:",
		  answer1: "Stephen Cook",
		  answer2: "J. Presper Eckert",
		  answer3: "Grace Hopper",
		  answer4: "Tommy Flowers",
		  correct: 2,
		  correctans: "Grace Hopper",
		  answerimage: "image6.jpg",
		  answertext: `Both an incredible programmer and a loyal patriot, Hopper has become
		  one of the most respected women in computer science, earning the nickname "Amazing Grace."
		  Legend has it that she also popularized the term "debugging" after discovering a moth stuck inside the Navy's Harvard Mark II computer.`
	  },
	  {
		  question: "This co-founder of Apple Inc. built the Apple I, Apple's first commercial desktop computer:",
		  answer1: "Alonzo Church",
		  answer2: "Jim Gray",
		  answer3: "Margaret Hamilton",
		  answer4: "Steve Wozniak",
		  correct: 3,
		  correctans: "Steve Wozniak",
		  answerimage: "image7.jpg",
		  answertext: `What's magnificent about the Apple I is that it was the work of only one man: Steve Wozniak.
		  The computer originally came without a case, so inventive owners came up with a variety of custom-built cases.
		  Today, only six working Apple I's are confirmed to exist. Who knows what the PC scene would be like today without
		  this milestone?`
	  },
	  {
		  question: "This Canadian computer scientist was the founder of the Java programming language:",
		  answer1: "Betty Holberton",
		  answer2: "Cuthbert Hurd",
		  answer3: "Kenneth Iverson",
		  answer4: "James Gosling",
		  correct: 3,
		  correctans: "James Gosling",
		  answerimage: "image8.jpg",
		  answertext: `Unlike other computing greats such as Bill Gates and Steve Jobs who never finished college, James Gosling
		  earned a Ph.D. at Carnegie Mellon university and went on to join Sun Microsystems, which developed the Java language.
		  Although Gosling would leave Sun Microsystems in 2010 after the company was acquired by Oracle, it is hard to doubt Gosling's
		  impact on the industry. According to Oracle, over 3 billion devices today run Java.`
	  },
	  {
		  question: "Born in South Africa, this man taught himself programming at the age of 12, and is famous today partly for his wild invention ideas such as the Hyperloop:",
		  answer1: "John von Neumann",
		  answer2: "Bill Gates",
		  answer3: "Sergei Lebedev",
		  answer4: "Elon Musk",
		  correct: 3,
		  correctans: "Elon Musk",
		  answerimage: "image9.jpg",
		  answertext: `In addition to his scientific innovations, Elon Musk made another contribution to computer science in 2015 with the founding of OpenAI,
		  a non-profit focused on AI development and research. OpenAI, Google, and other companies have successfully developed neural networks capable of
		  beating even the smartest humans at complex strategy games, including Chess, Go, and Dota 2. AI is expected to become more and more ubiquitous over the next few decades,
		  impacting many fields currently dominated by humans.`
	  },
	  {
		  question: "This man received the 2016 Turing Award for his invention of the World Wide Web and the first web browser:",
		  answer1: "Tim Berners-Lee",
		  answer2: "Mark Zuckerberg",
		  answer3: "Ken Thompson",
		  answer4: "Ivan Sutherland",
		  correct: 0,
		  correctans: "Tim Berners-Lee",
		  answerimage: "image10.jpg",
		  answertext: `Though a rudimentary form of the "internet" existed at the time Tim Berners-Lee was born, his creation of the HTTP protocol, HTML
		  markup language, and web browser made the World Wide Web - what we now think of as the Internet - possible. Tim Berners-Lee is currently 62
		  years old and works as director of the World Wide Web Consortium (W3C), an organization in change of the standards and protocols keeping the Internet functioning today.`
	  },
	  
	  ],
	  curquestion: {},
  },
  created: function() {
	  
  },
  computed: {
	  
  },
  watch: {
	  answered: function(oldVal, newVal)
	  {
		  console.log("got called");
		  if (app.answered)
		  {
                          app.answerstyle[app.answernum] = "background-color: #ffbbbb; border: 2px solid red;";
			  app.answerstyle[app.curquestion.correct] = "background-color: #bbffbb; border: 2px solid green;";
                          if (app.answernum === app.curquestion.correct)
                              app.score++;
		  }
		  else
		  {
			  app.answerstyle[0] = "background-color: #dddddd; border: 2px solid gray;";
			  app.answerstyle[1] = "background-color: #dddddd; border: 2px solid gray;";
			  app.answerstyle[2] = "background-color: #dddddd; border: 2px solid gray;";
			  app.answerstyle[3] = "background-color: #dddddd; border: 2px solid gray;";
		  }
	  }
  },
  methods: {
          begin: function() {
                  app.state = 'quiz';
                  app.questionnum = 0;
				  app.score = 0;
				  app.answernum = 0;
                  app.curquestion = app.quiz[0];
          },
	  answer1: function() {
		  app.answered = true;
		  app.answernum = 0;
	  },
	  answer2: function() {
		  app.answered = true;
		  app.answernum = 1;
	  },
	  answer3: function() {
		  app.answered = true;
		  app.answernum = 2;
	  },
	  answer4: function() {
		  app.answered = true;
		  app.answernum = 3;
	  },
	  next: function() {
          app.answered = false;
          app.answernum = 0;
		  app.questionnum++;
		  window.scrollTo(0, 0);
          if (app.questionnum >= app.quiz.length)
          {
              app.state = 'results'
          }
          else
          {
              app.curquestion = app.quiz[app.questionnum];
          }
	  }
  }
});
