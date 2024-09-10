function updateRangeInput(val, el) {
  document.getElementById(el).value = val;
}

const dataForm = document.getElementById("dataForm");

dataForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // const baseUrl = "http://127.0.0.1:5000/ml";
  // let url = "";

  const gender = Array.from(
    document.getElementsByName("genderRadioInput")
  ).find((radio) => radio.checked);

  const data = {
    age: document.getElementById("rangeAgeInput").value,
    gender: gender.value,
    educationLevel: document.getElementById("educationSelect").value,
    experienceYears: document.getElementById("rangeXpInput").value,
    previoousCompanies: document.getElementById("rangePrevCiaInput").value,
    companyDistance: document.getElementById("rangeDistCiaInput").value,
    interviewScore: document.getElementById("rangeInterviewScoreInput").value,
    skillScore: document.getElementById("rangeSkillScoreInput").value,
    personalityScore: document.getElementById("rangePersonalityScoreInput")
      .value,
    recruitmentStrategy: document.getElementById("strategySelect").value,
  };

  for (el in data) {
    if (data[el] == "") {
      alert(`${el} is required!`);
      return;
    }
  }

  // const response = await handleRequest(url, "POST", data).then(
  //   (result) => result
  // );
  // const responseJson = await response.json();
  const responseJson = {
    data: "not hired",
  };
  const responseStatus = 200;
  const responseData = responseJson["data"];

  if (responseStatus == 200) {
    const mlResponse = document.getElementById("mlResponse");
    mlResponse.innerText = responseData;
    mlResponse.className = "response-card text-center text-capitalize";
  } else {
    alert(`Não foi possivel realizar a predição com o modelo. 
    O status da resposta: ${responseStatus}.`);
  }
});
