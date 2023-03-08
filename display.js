//variables
const quotes=[
    {
      quote:'"Our lives begin to end the day we become silent about things that matter"',
      person:"MARTIN LUTHER KING,JR",
      img:"af1.jpg"
    },
    {
      quote:'"The journey of a thousand miles begins with one step"',
      person:"LAU TZU",
      img:"af6.jpg"
    
    },
    {
      quote:'"Remember that not getting what you want is sometimes a wonderful stroke of luck"',
      person:"DALAI LAMA",
      img:"af3.jpg"
    
    },
    {
      quote:'"It doesn\'t matter how slow you go as long as you do not stop"',
      person:"CONFICIOUS",
      img:"af10.jpg"
    
    },
    {
      quote:'"If you look at what you have in life ,you\'ll have more.If you look at what you don\'t have in life ,you\'ll never have."',
      person:"OPRAH WINFREY",
      img:"af5.jpg"
    
    },
    {
      quote:'"Tell me and I forget. Teach me and I remember. Involve me and I learn."',
      person:"BENJAMIN FRANKLIN",
      img:"af2.jpg"
    
    }, {
      quote:'"The best way to find yourself is to lose yourself in the service of others."',
      person:"MAHATMA GANDHI",
      img:"af7.jpg"
    
    },
    {
      quote:'"If you want to live a happy life ,tie it to a goal, not to people or things. "',
      person:"ALBERT EINSTEIN",
      img:"af8.jpg"
    
    },
    {
      quote:'"At his best , a man is the noblest of all animals ;separated from law and justice he the worst. "',
      person:"ARISTOTLE",
      img:"af9.jpg"
    
    },
    {
      quote:'"I do the very best I know-the very best i can ; and I mean to keep on going so until the end. "',
      person:"ABRAHAM LINCOLN",
      img:"af4.jpg"
    
    }
    
  ];
  var btnel=document.querySelector(".btn");
  var personel=document.querySelector(".person");
  var quotel=document.querySelector(".quote");
  var jpgel=document.querySelector(".jpg")
  
  
  btnel.addEventListener('click',()=>{
  let random=Math.floor(Math.random()*quotes.length);
  quotel.innerText=quotes[random].quote;
  personel.innerText=quotes[random].person;
  jpgel.src=quotes[random].img;
  })
  
      
  