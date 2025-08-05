fetch("http://localhost:5000/api/intern")
  .then(res => res.json())
  .then(data => {
    document.getElementById("name").textContent = data.name;
    document.getElementById("code").textContent = data.referralCode;
    document.getElementById("donations").textContent = data.totalDonations;
    const rewardsList = document.getElementById("rewards");
    data.rewards.forEach(reward => {
      const li = document.createElement("li");
      li.textContent = reward;
      rewardsList.appendChild(li);
    });
  });
