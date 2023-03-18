let stepNo = 1;
let stepEl = document.querySelectorAll(".step");
const name = document.getElementById("name").value;
const email = document.getElementById("mail").value;
const phone = document.getElementById("phone").value;
let nextBtn = document.querySelector(".btn-next");
let selectedPlan = "";
let addOns = [];

stepsHighlight();
nextBtn.addEventListener("click", () => {
  if (nextBtn.textContent === "Confirm") {
    window.location.reload();
    // ;-)
  }
  stepNo++;
  if (stepNo === 2) selectPlanHTML();
  else if (stepNo === 3) addOnsHTML();
  else if (stepNo === 4) finishinUpHTML();
  stepsHighlight();
});
// steps highlighting
function stepsHighlight() {
  // remove prev highlights
  document
    .querySelectorAll(".step span")
    .forEach((step) => (step.style.backgroundColor = "transparent"));
  document.querySelector(`.step${stepNo} span`).style.backgroundColor =
    "hsl(228, 100%, 84%)";
}

function selectPlanHTML() {
  document.querySelector(".info").innerHTML = `<h2>Select your plan</h2>
  <p>You have the option for monthly or yearly billing.</p>
    `;
  document.querySelector("form").innerHTML = `
<div class='cards'>
    <div class="card card1" data-card = "card1">
        <img src="./assets/images/icon-arcade.svg" alt="" />
        <div>
        <h3>Arcade</h3>
        <h4>59/mo</h4>
        </div>
    </div>
    <div class="card card2" data-card = "card2">
        <img src="./assets/images/icon-advanced.svg" alt="" />
        <div>
        <h3>Advanced</h3>
        <h4>159/mo</h4>
        </div>
    </div>
    <div class="card card3" data-card = "card3">
        <img src="./assets/images/icon-pro.svg" alt="" />
        <div>
        <h3>Pro</h3>
        <h4>359/mo</h4>
        </div>
    </div>
  </div>

`;
  planSelected();
}

function planSelected() {
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", (e) => {
      card.style.border = "2px solid hsla(228, 100%, 84%, 1)";
      let divEl = e.target.classList[1];
      selectedPlan = document.querySelector(`.${divEl} div`);
    });
  });
}

function addOnsHTML() {
  document.querySelector(".info").innerHTML = `
    <h2>Pick add-ons</h2>
  <p>Add-ons help enhance your gaming experience.</p>
    `;
  document.querySelector("form").innerHTML = `
        <div class="addons">
            <label for='os'>
                <div class="addon addon1">
                    <input type="checkbox" id='os' name = "Online service"  />
                    <div>
                    <h4>Online service</h4>
                        <p>Access to multiplayer games</p>
                    </div>
                    <span>+$1/mo</span>
                </div>
            </label>
            <label for="ls">
                <div class="addon addon2">
                    <input type="checkbox" id="ls"  name="Larger storage"/>
                    <div>
                        <h4>Larger storage</h4>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                    <span>+$2/mo</span>
                </div>
            </label>
            <label for="cp">
                <div class="addon addon3" >
                    <input type="checkbox" id="cp" name="Customizable Profile" />
                    <div>
                        <h4>Customizable Profile</h4>
                        <p>Custom theme on your profile</p>
                    </div>

                    <span>+$4/mo</span>
                </div>
            </label>
        </div>
    `;
  addonsSelected();
}

function addonsSelected() {
  document.querySelectorAll(".addon").forEach((addon) => {
    addon.addEventListener("click", (e) => {
      if (e.target.checked) addOns.push(addon.children[0].name);
    });
  });
}

function finishinUpHTML() {
  document.querySelector(".info").innerHTML = `
    <div class="finish">
        <h2>Thankyou so much</h2>
        <p>Double-check everything looks ok before confirming.</p>
    </div>
    `;
  document.querySelector("form").innerHTML = `
        <div class="total"></div>
    `;
  document.querySelector(".total").appendChild(selectedPlan);
  nextBtn.textContent = "Confirm";
}
