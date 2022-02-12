const btn1 = document.getElementById("box1Btn");
const btn2 = document.getElementById("box2Btn");
const btn3 = document.getElementById("box3Btn");
const bvalue1 = document.getElementById("bValueBox1");
const cvalue1 = document.getElementById("cValueBox1");
const avalue2 = document.getElementById("aValueBox2");
const cvalue2 = document.getElementById("cValueBox2");
const avalue3 = document.getElementById("aValueBox3");
const bvalue3 = document.getElementById("bValueBox3");
bvalue1.addEventListener("focus", () => {
  const img1 = document.getElementById("img");
  img1.setAttribute("src", "pythagb.png");
});
cvalue1.addEventListener("focus", () => {
  const img1 = document.getElementById("img");
  img1.setAttribute("src", "pythagc.png");
});
avalue2.addEventListener("focus", () => {
  const img2 = document.getElementById("img2");
  img2.setAttribute("src", "pythaga.png");
});
cvalue2.addEventListener("focus", () => {
  const img2 = document.getElementById("img2");
  img2.setAttribute("src", "pythagc.png");
});
avalue3.addEventListener("focus", () => {
  const img3 = document.getElementById("img3");
  img3.setAttribute("src", "pythaga.png");
});
bvalue3.addEventListener("focus", () => {
  const img3 = document.getElementById("img3");
  img3.setAttribute("src", "pythagb.png");
});
btn1.addEventListener("click", () => {
  const img1 = document.getElementById("img");
  img1.setAttribute("src", "pythag.png");
  // Take the values;
  const bValue = document.getElementById("bValueBox1").value;
  const cValue = document.getElementById("cValueBox1").value;
  const answer1 = document.getElementById("answer1");
  if (bValue == "" || cValue == "") {
    answer1.textContent = "Please enter two values";
  } else if (bValue <= 0 || cValue <= 0) {
    answer1.textContent = "Please enter values greather than 0";
  } else {
    const calc =
      Math.pow(parseFloat(cValue), 2) - Math.pow(parseFloat(bValue), 2);
    if (calc <= 0) {
      answer1.textContent =
        "Please check the values once again 'b' value can not be greather or equal to 'c' value";
    } else {
      const result = Math.sqrt(calc);
      answer1.innerHTML = `
         Using the formula a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup> ( Pythagorean theorem )
         <br/>
         a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
         <br/>
         so, a<sup>2</sup> = c<sup>2</sup> - b<sup>2</sup>
         <br/>
         Take the square root on both sides,
         <br/>
         a = &radic;<span style="text-decoration: overline"
                >&nbsp;c&#178; - b&#178;&nbsp;</span>
        <br/>
        Insertion into  a = &radic;<span style="text-decoration: overline"
                >&nbsp;c&#178; - b&#178;&nbsp;</span> gives,
        <br/> 
         a = &radic;<span style="text-decoration: overline"
                >&nbsp;${cValue}&#178; - ${bValue}&#178;&nbsp;</span>
        <br/>
        so, a = ${result}
      `;
    }
  }
});
btn2.addEventListener("click", () => {
  const img2 = document.getElementById("img2");
  img2.setAttribute("src", "pythag.png");
  const aValue = document.getElementById("aValueBox2").value;
  const cValue = document.getElementById("cValueBox2").value;
  const answer2 = document.querySelector("#answer2");
  if (aValue == "" || cValue == "") {
    answer2.textContent = "Please enter two values";
  } else if (aValue <= 0 || cValue <= 0) {
    answer2.textContent = "Please enter values greather than 0";
  } else {
    const calc =
      Math.pow(parseFloat(cValue), 2) - Math.pow(parseFloat(aValue), 2);
    if (calc <= 0) {
      answer2.textContent =
        "Please check the values once again 'a' value can not be greather or equal to 'c' value";
    } else {
      const result = Math.sqrt(calc);
      answer2.innerHTML = `
         Using the formula a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup> ( Pythagorean theorem )
         <br/>
         a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
         <br/>
         so, b<sup>2</sup> = c<sup>2</sup> - a<sup>2</sup>
         <br/>
         Take the square root on both sides,
         <br/>
         b = &radic;<span style="text-decoration: overline"
                >&nbsp;c&#178; - a&#178;&nbsp;</span>
        <br/>
        Insertion into  b = &radic;<span style="text-decoration: overline"
                >&nbsp;c&#178; - a&#178;&nbsp;</span> gives,
        <br/> 
         b = &radic;<span style="text-decoration: overline"
                >&nbsp;${cValue}&#178; - ${aValue}&#178;&nbsp;</span>
        <br/>
        so, b = ${result}
      `;
    }
  }
});
btn3.addEventListener("click", () => {
  const img3 = document.getElementById("img3");
  img3.setAttribute("src", "pythag.png");
  const aValue = document.getElementById("aValueBox3").value;
  const bValue = document.getElementById("bValueBox3").value;
  const answer3 = document.getElementById("answer3");
  if (aValue == "" || bValue == "") {
    answer3.textContent = "Please enter two values";
  } else if (aValue <= 0 || bValue <= 0) {
    answer3.textContent = "Please enter values greather than 0";
  } else {
    const calc =
      Math.pow(parseFloat(aValue), 2) + Math.pow(parseFloat(bValue), 2);
    const result = Math.sqrt(calc);
    answer3.innerHTML = `
         Using the formula a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup> ( Pythagorean theorem )
         <br/>
         a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
         <br/>
         Take the square root on both sides,
         <br/>
         c = &radic;<span style="text-decoration: overline"
                >&nbsp;a&#178; + b&#178;&nbsp;</span>
        <br/>
        Insertion into  c = &radic;<span style="text-decoration: overline"
                >&nbsp;a&#178; + b&#178;&nbsp;</span> gives,
        <br/> 
         c = &radic;<span style="text-decoration: overline"
                >&nbsp;${aValue}&#178; + ${bValue}&#178;&nbsp;</span>
        <br/>
        so, c = ${result}
      `;
  }
});
