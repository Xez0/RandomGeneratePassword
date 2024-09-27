window.onload = () => {
  document.getElementById("generate").addEventListener("click", function () {
    const useUppercase = document.getElementById("uppercase").checked;
    const useLowercase = document.getElementById("lowercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;

    const password = generatePassword(
      document.getElementById("length").value,
      useUppercase,
      useLowercase,
      useNumbers,
      useSymbols
    );

    document.getElementById("password").textContent = password;
  });

  function generatePassword(
    length,
    useUppercase,
    useLowercase,
    useNumbers,
    useSymbols
  ) {
    const UpperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const LowerChars = "abcdefghijklmnopqrstuvwxyz";
    const NumberChars = "0123456789";
    const SymbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let characterPool = "";

    if (useUppercase) characterPool += UpperChars;
    if (useLowercase) characterPool += LowerChars;
    if (useNumbers) characterPool += NumberChars;
    if (useSymbols) characterPool += SymbolChars;

    if (characterPool.length === 0) {
      return "Please select at least one character type.";
    }

    let password = "";
    password += useUppercase ? getRandomCharacter(UpperChars) : "";
    password += useLowercase ? getRandomCharacter(LowerChars) : "";
    password += useNumbers ? getRandomCharacter(NumberChars) : "";
    password += useSymbols ? getRandomCharacter(SymbolChars) : "";

    for (let i = password.length; i < length; i++) {
      password += getRandomCharacter(characterPool);
    }
    return shuffleString(password);
  }
  function getRandomCharacter(characters) {
    return characters.charAt(Math.floor(Math.random() * characters.length));
  }
  function shuffleString(string) {
    const array = string.split("");
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join("");
  }
  alert("by: Xez");
};
