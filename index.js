/* eslint-disable import/no-anonymous-default-export */
const qBank = [
  {
    question:
      "What is (void*)0?   ",
    answers: ["NULL pointer","void pointer","Error","None"],
    correct: "NULL pointer",
    questionId: "01"
  },
  {
    question:
      "In which header file is the NULL macro defined?",
    answers: ["stdio.h","stddef.h"," stdio.h and stddef.h"," math.h"],
    correct: "stdio.h and stddef.h",
    questionId: "02"
  },
  {
    question:
      "The operator used to get value at address stored in a pointer variable is",
    answers: [" *","&","&&","||"],
    correct: "*",
    questionId: "03"
  },
  {
    question: "Which of the following function sets first n characters of a string to a given character",   
    answers: [
      "strinit()","strnset()","strset()","strcset()"
    ],
    correct: "strnset()",
    questionId: "04"
  },
  {
    question: "Which bitwise operator is suitable for turning off a particular bit in a number?",
    answers: ["&&","&","||","!"],
    correct: "&",
    questionId: "05"
  },
  {
    question:"Which bitwise operator is suitable for turning on a particular bit in a number?",
    answers: ["&&","&","||","|"],
    correct: "|",
    questionId: "06"
  },
  {
    question:
      'Which of the following cannot be checked in a switch-case statement?',
    answers: ["Character","Integer","Float","enum"],
    correct: "Float",
    questionId: "07"
  },
  {
    question: "The binary equivalent of 5.375 is    ",
    answers: [" 101.101110111","101.011","101011","None of above"],
    correct: "101.011",
    questionId: "08"
  },
  {
    question:
      "Who is known as the father of C Language ?",
    answers: ["Key", "Sword", "Pen", "Cellphone"],
    correct: "Key",
    questionId: "09"
  },
  {
    question:
      "Which best selling toy of 1983 caused hysteria, resulting in riots breaking out in stores?",
    answers: [
      "James","Bjarne Stroustrup","Dennis Ritchie","Dr. E. F. Codd"
    ],
    correct: "Dennis Ritchie",
    questionId: "10"
  },
  {
    question: "C Language was developed in the year ____    ",
    answers: ["1970","1975","1980","1985"],
    correct: "1970",
    questionId: "11"
  },
  {
    question: "Which one is not a reserve keyword in C Language?",
    answers: ["auto","main","case","register"],
    correct: "main",
    questionId: "12"
  },
  {
    question: "Area 51 is located in which US state?",
    answers: ["Nevada", "Arizona", "New Mexico", "Utah"],
    correct: "Nevada",
    questionId: "103"
  },
  {
    question: "A C variable name can start with a ____",
    answers: ["Number","Plus Sign","Underscore","Asterisk "],
    correct: "Underscore",
    questionId: "13"
  },
  {
    question: "Prototype of a function means _____",
    answers: ["Name of Function","Output of Function","Declaration of Function","Input of a Function"],
    correct: "Declaration of Function",
    questionId: "14"
  },
  {
    question: "Name the loop that executes at least once",
    answers: ["For","If","do-while","while"],
    correct: "do-while",
    questionId: "15"
  },
  {
    question: "Far pointer can access _____   ",
    answers: ["A.Single memory location","No memory location","All memory location","First and Last Memory Address"],
    correct: "All memory location",
    questionId: "16"
  },
  {
    question:
      "A pointer pointing to a memory location of the variable even after deletion of the variavle is known as  ",
    answers: [".far pointer","dangling pointer","null pointer","void pointer"],
    correct: "dangling pointer",
    questionId: "17"
  },
  {
    question:
      "An uninitialized pointer in C is called ___      ",
    answers: [".Constructor","dangling pointer","Wild Pointer","Destructor"],
    correct: "Wild Pointer",
    questionId: "18"
  },
  {
    question: "A pointer that is pointing to NOTHING is called ____  ",
    answers: [
      ".Constructor","dangling pointer","Wild Pointer","Null Pointer"
    ],
    correct: "Null Pointer",
    questionId: "19"
  },
  {
    question: '_____ is a picture in which the flows of computational paths are depicted    ',
    answers: ["Algorithm","Program","Code"," Flow chart "],
    correct: "Flow chart ",
    questionId: "20"
  },
  {
    question: "Among unary operation which operator represents increment?    ",
    answers: ["--","++","-"," !"],
    correct: "++",
    questionId: "21"
  },
  {
    question: "The function scanf is used to ___    ",
    answers: [
         "To take logical decisions","Input a set of values","Print a set of values"," Do mathematical manipulation"],
    correct: "Input a set of values",
    questionId: "22"
  },
  {
    question:
      "If the function returns no value then it is called ___  ",
    answers: ["Data type function",
     "Calling function",
     "Main function",
     " Void function"],
    correct: "Void function",
    questionId: "23"
  },
  {
    question: "A function _____    ",
    answers: ["May or may not need input data"," May or may not return a value" ,"Both a and b"," None "],
    correct: "Both a and b    ",
    questionId: "24"
  },
  {
    question: "Which character is used to indicate the end of the string?    ",
    answers: ["Any alphabet","A","Null","None "],
    correct: "Null",
    questionId: "25"
  },
  {
    question: "Each element of a structure can be _____    ",
    answers: ["Read and printed as a separate data item",
    "Printed as a separate data item",
    "Read as a separate data item",
    "None of these",
    ],
    correct: "Read and printed as a separate data item    ",
    questionId: "26"
  },
  {
    question:
      "In the for loop structure, which statement is present?      ",
    answers: ["Assign statement",
    "Alter statement",
    " Both (a) and (b)",
    "None of these"],
    correct: "Both (a) and (b)",
    questionId: "27"
  },
  {
    question: "When the computer is waiting for the input?    ",
    answers: [" Files are selected",
      "The cursor is blinking in the VDU screen",
      "Menu will appear on the screen",
      "None of these"],
    correct: "The cursor is blinking in the VDU screen",
    questionId: "28"
  },
  {
    question: 'Which can be included in a string constant using the escape sequences?    ',
    answers: ["Apostrophe (’)",
        "Question mark (?)",    
        "Double quotes (“)",   
        "All the above"],
    correct: "All the above",
    questionId: "29"
  },
  {
    question: "Which of the following input function cannot be used to input multiword string in a single function call?",
    answers: ["getche()","gets()","scanf()","None "],
    correct: "getche()",
    questionId: "30"
  },
  {
    question: "Which of the following declarations is not correct?",
    answers: [
      "unsigned float d;",
      "unsigned char c;",
      "int b = 4;",
      "float a;"
    ],
    correct: "unsigned float d;",
    questionId: "31"
  },
  {
    question: "Which of the following operators has highest precedence?    ",
    answers: ["*","/","%","All have same precedence"],
    correct: "All have same precedence",
    questionId: "32"
  },
  {
    question: "What is the file extension for font files?    ",
    answers: ["txt","int","chr","font"],
    correct: "chr",
    questionId: "33"
  },
  {
    question:"Which of the following function can be used to write an entire array or a structure in a single call? ",
    answers: ["writeblock()","write()","fwrite()","WRITE()"],
    correct: "fwrite()",
    questionId: "34"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
