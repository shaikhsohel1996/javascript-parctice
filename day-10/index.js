function myFunction(){
    let Text = document.getElementById('demo').innerHTML;
      document.getElementById('demo').innerHTML = Text.replace("Microsoft","W3Schools");
  }
  function myNickName(){
      const myNickName = document.getElementById('demo-2').innerHTML;
      document.getElementById('demo-2').innerHTML = myNickName.replace("sohel","sonu");
  };

  let str ="Liam,Olivia,Noah,Emma,Lucas,Ava,Benjamin,Isabella,James,Sophia"
  const NoahIndex = str.indexOf("Noah");
  console.log("posaction", NoahIndex);
  const newstr = str.slice(NoahIndex);
  console.log("new string after slice",newstr);

  let Text = "I love cats. Cats are very easy to love. Cats are very popular."
  Text = Text.replaceAll("Cats","Dogs");
  Text = Text.replaceAll("cats","dogs");
  document.getElementById('demo').innerHTML = Text;
  let text = "hello wold welcome to  ";
  const shaikh = text.includes("wold");
  console.log("shaikh",shaikh);
