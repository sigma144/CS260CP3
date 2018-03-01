var app = new Vue({
  el: '#app',
  data: {
	  questionnum: -1,
	  score: 0,
	  answered: false,
	  answernum: 0,
	  quiz: [
	  {
		  question: "This English polymath is credited with inventing the first mechanical computer:",
		  answer1: "A1",
		  answer2: "Charles Babbage",
		  answer3: "A3",
		  answer4: "A4",
		  correct: 1,
		  answerimage: "image1",
		  answertext: `Charles Babbage's analytical engine, equipped with memory,
		  conditional control flow, and programmable punch cards, is widely considered to be
		  the first Turing-complete general-purpose computer ever conceived! Sadly, due to lack of funding
		  and ownership disputes, 
		  Babbage was never able to see his invention built. It actually wasn't until a century after Babbage's
		  original design that the first fully-functional general-purpose computer was built.`
	  },
	  {
		  question: "Born in 1912, this man's theoretical model of computation (named after him) is capable of solving any computable problem:",
		  answer1: "A1",
		  answer2: "Alan Turing",
		  answer3: "A3",
		  answer4: "A4",
		  correct: 2,
		  answerimage: "image2",
		  answertext: `Since its creation in 1936, the Turing Machine has led to many of
		  computing's most landmark proofs. One such proof is that some problems are uncomputable for
		  even the most powerful of computers, such as the problem of deciding in every case whether an arbitrary
		  algorithm or computer will finish on a given input or loop forever.`
	  },
	  {
		  question: "Known as the 'father of information theory', he published a groundbreaking paper in 1948 that showed how digital circuits could be modeled after Boolean algebra:",
		  answer1: "Claude Shannon",
		  answer2: "A2",
		  answer3: "A3",
		  answer4: "A4",
		  correct: 3,
		  answerimage: "image3",
		  answertext: `In addition to paving the way for modern digital computers, Shannon also worked
as a cryptanalyst, helping the U.S. in WWII to crack the encryption algorithms of its enemies' communications.
Shannon also met Alan Turing during this time, and the two men enjoyed each other's company.`
	  },
	  {
		  question: "This American inventor received the Nobel Prize along with two other men for his invention of the transistor:",
		  answer1: "A1",
		  answer2: "A2",
		  answer3: "William Shockley",
		  answer4: "A4",
		  correct: 1,
		  answerimage: "babbage",
		  answertext: `The transistor, a simple electronic switch that is responsible for enabling the lightning-fast
computations of modern computers, has been so impactful to human society that it often listed as one of the
"greatest inventions of all time" alongside discoveries like electricity and the steam engine.`
	  },
	  {
		  question: "This U.S. Navy Rear Admiral invented the first compiler and one of the earliest high-level programming languages, COBOL:",
		  answer1: "A1",
		  answer2: "A2",
		  answer3: "Grace Hopper",
		  answer4: "A4",
		  correct: 1,
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
	  
  },
  methods: {
	  answer1: function() {
		  app.answered = true;
		  app.answernum = 1;
	  },
	  answer2: function() {
		  app.answered = true;
		  app.answernum = 2;
	  },
	  answer3: function() {
		  app.answered = true;
		  app.answernum = 3;
	  },
	  answer4: function() {
		  app.answered = true;
		  app.answernum = 4;
	  },
	  next: function() {
		  app.questionnum++;
		  app.curquestion = app.quiz[app.questionnum];
		  app.answered = false;
		  app.answernum = 0;
	  }
  }
});