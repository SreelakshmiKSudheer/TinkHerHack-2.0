document.getElementById("password").addEventListener("input", function() {
    var password = this.value;
    var strength = checkPasswordStrength(password);
    var strengthLabel = document.getElementById("strengthLabel");
    strengthLabel.textContent = strengthtext;
});

function checkPasswordStrength(password) {
    // Define regex patterns
    var patterns = {
        length: /.{8,}/,
        uppercase: /[A-Z]/,
        lowercase: /[a-z]/,
        numbers: /[0-9]/,
        specialChars: /[!@#$%^&*(),.?":{}|<>]/,
        commonWords: /\b(password|123456|qwerty)\b/i
    };

    // Initialize strength counter
    var strength = 0;

    // Check password against patterns
    for (var pattern in patterns) {
        if (patterns[pattern].test(password)) {
            strength++;
        }
    }

    // Check for common words
    if (!patterns.commonWords.test(password)) {
        strength++;
    }

    if (strength <= 1)
        strengthtext = "Very weak";
    if (strength == 2)
        strengthtext = "Weak";
    if (strength == 3)
        strengthtext = "Moderate";
    if (strength == 4)
        strengthtext = "Strong";
    if (strength == 5)
        strengthtext = "Very strong";

    // Return strength level
    return strengthtext;
}
