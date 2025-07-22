/* .js files add interaction to your website */
/*fact generator*/
var factList = [
  "ICE detained nearly 2,800 people during a Los Angeles raid in June 2025, sending operations out from Terminal Island,a location just miles from the site of WWII Japanese American incarceration. (AP News)", /*0*/
  "In a 7-week ICE detention in Louisiana, a Turkish doctoral student reported inadequate medical care, neglect, psychological trauma, and serious food barriers. (Vanity Fair)", /*1*/
  "Bay Area detainees, mostly non-criminal, were taken from court hearings to remote private prisons with overcrowding. (San Francisco Chronicle)", /*2*/
  "ICE raids in Utah disrupted restaurant workforces, triggering labor shortages, anxiety among staff, and food price increases. (Axios)", /*3*/
  "Following Los Angeles workplace raids, some detainees were deported within 48 hours, with several lacking criminal histories or due process. (The Washington Post)", /*4*/
  "In 2018 at Southeastern Provisions (Bean Station, TN), ICE agents kicked, punched, used racial slurs, held workers at gunpoint, and detained 86 people. (GlobalVoices)", /*5*/
  "A Guardian investigation found “pervasive abuse and torture-like conditions” in Louisiana ICE centers. (The Guardian)", /*6*/
  "The mental health impact on children of ICE workplace raids is severe, including family separation, developmental delays, anxiety, poor academic performance, and trauma. (Urban Institute)" /*7*/
];

var fact = document.getElementById("fact");
var button = document.getElementById("button");
var count = 0;

if (button){
  button.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}