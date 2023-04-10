export const arrayItem = [
  {
    name: "Q&A",
    id: "q&a",
    description: "answer questions based on existing knowladge",
    option:{
      model:"text-davinci-003",
      temperature:0,
      max_tokens:100,
      top_p:1,
      frequency_penalty:0.0,
      presence_penalty:0.0,
      stop:["\n"]
    }
  },
  {
    name: "Economics",
    id: "economics",
    description: "known your country",
    option:{
      model:"text-davinci-003",
      temperature:0,
      max_tokens:100,
      top_p:1,
      frequency_penalty:0.0,
      presence_penalty:0.0,
      stop:["\n"]
    }
  },
  {
    name: "Grammer",
    id: "grammer",
    description: "correct and stander english",
    option:{
      model:"text-davinci-003",
      temperature:0,
      max_tokens:100,
      top_p:1,
      frequency_penalty:0.0,
      presence_penalty:0.0,
      stop:["\n"]
    }
  },
];
