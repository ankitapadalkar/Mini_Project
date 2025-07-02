function calculate() {
  const sub1 = parseFloat(document.getElementById("sub1").value);
  const sub2 = parseFloat(document.getElementById("sub2").value);
  const sub3 = parseFloat(document.getElementById("sub3").value);
  const sub4 = parseFloat(document.getElementById("sub4").value);
  const sub5 = parseFloat(document.getElementById("sub5").value);

  // Check if any input is missing or invalid
  if (
    isNaN(sub1) || isNaN(sub2) || isNaN(sub3) ||
    isNaN(sub4) || isNaN(sub5)
  ) {
    document.getElementById("output").innerHTML = "⚠️ कृपया सर्व विषयांचे गुण भरा!";
    return;
  }

  const total = sub1 + sub2 + sub3 + sub4 + sub5;
  const percent = (total / 500) * 100;

  let grade = "";

  // Assign grade based on percentage
  if (percent >= 90) grade = "A+";
  else if (percent >= 80) grade = "A";
  else if (percent >= 70) grade = "B";
  else if (percent >= 60) grade = "C";
  else if (percent >= 50) grade = "D";
  else if (percent >= 40) grade = "E";
  else grade = "Fail";

  // Display result
  document.getElementById("output").innerHTML = `
    📊 <strong>Total:</strong> ${total} / 500 <br>
    🎯 <strong>Percentage:</strong> ${percent.toFixed(2)}% <br>
    🏆 <strong>Grade:</strong> ${grade}
  `;
}
