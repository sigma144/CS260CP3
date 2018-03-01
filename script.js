var app = new Vue({
  el: '#app',
  data: {
	  questionnum: -1,
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
		  answer1: "A1",
		  answer2: "Charles Babbage",
		  answer3: "A3",
		  answer4: "A4",
		  correct: 1,
		  answerimage: "image1",
		  answertext: `Charles Babbage's 1837 Analytical Engine, equipped with memory,
		  conditional control flow, and programmable punch cards, is widely considered to be
		  the first programmable general-purpose computer ever designed. Sadly, due to lack of funding
		  and ownership disputes, 
		  Babbage was never able to see his invention built. It actually wasn't until a century after Babbage's
		  original design that the first fully functional general-purpose computer would be constructed.`
	  },
	  {
		  question: "Born in 1912, this man's theoretical model of computation (named after him) is capable of solving any computable problem:",
		  answer1: "A1",
		  answer2: "Alan Turing",
		  answer3: "A3",
		  answer4: "A4",
		  correct: 1,
		  answerimage: "image2",
		  answertext: `Since its creation in 1936, the Turing Machine has been the key to many of
		  computing's most landmark proofs. One such proof is that certain problems are unsolvable for
		  even the most advanced of computers - for example, the problem of deciding with certainty whether any arbitrary
		  algorithm will finish on a given input or loop forever (the halting problem).`
	  },
	  {
		  question: "Known as the 'father of information theory', he published a groundbreaking paper in 1948 that showed how digital circuits could be designed to implement logical statements:",
		  answer1: "Claude Shannon",
		  answer2: "A2",
		  answer3: "A3",
		  answer4: "A4",
		  correct: 0,
		  answerimage: "image3",
		  answertext: `In addition to paving the way for modern digital computers, Shannon also worked
as a cryptanalyst, helping the U.S. in WWII to crack the encryption algorithms of its enemies' wartime communications.
Shannon also met Alan Turing during this time, and the two men discussed each other's ideas over tea.`
	  },
	  {
		  question: "This American inventor received the Nobel Prize along with two other men for his invention of the transistor:",
		  answer1: "A1",
		  answer2: "A2",
		  answer3: "William Shockley",
		  answer4: "A4",
		  correct: 2,
		  answerimage: "babbage",
		  answertext: `The transistor, a simple electronic switch which can change state billions of times a second, has been so impactful
		  to human society that it often listed as one of the
greatest inventions of all time, alongside discoveries like electricity and the steam engine. Modern CPU's today typically contain over a billion transistors!`
	  },
	  {
		  question: "This U.S. Navy Rear Admiral invented the first compiler and one of the earliest high-level programming languages, COBOL:",
		  answer1: "A1",
		  answer2: "A2",
		  answer3: "Grace Hopper",
		  answer4: "A4",
		  correct: 2,
		  answerimage: "babbage",
		  answertext: `Both an incredible programmer and a loyal patriot, Hopper has become
		  one of the most respected women in computer science, earning the nickname "Amazing Grace."
		  Legend has it that she also popularized the term "debugging" after discovering a moth stuck inside the Navy's Harvard Mark II computer.`
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
			  app.answerstyle[app.curquestion.correct] = "background-color: #ddffdd; border: 2px solid green;";
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
