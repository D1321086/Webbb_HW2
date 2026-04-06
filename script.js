function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  const msg = document.getElementById("msg");

  if(user === "" || pass === "") {
    msg.innerText = "請輸入完整資料";
    msg.style.color = "#ffcccc";
    return;
  }

  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("loadingBox").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("loadingBox").classList.add("hidden");
    document.getElementById("otpBox").classList.remove("hidden");
  }, 1500);
}

function verifyOTP() {
  const otp = document.getElementById("otp").value;
  const msg = document.getElementById("otpMsg");

  if(otp === "123456") {
    msg.innerText = "驗證成功（教學示範）";
    msg.style.color = "#ccffcc";
  } else {
    msg.innerText = "驗證碼錯誤";
    msg.style.color = "#ffcccc";
  }
}