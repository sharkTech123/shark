export function generatePassword() {
    const specialSymbols = '!@#$%^&*()_+-=|:.';
    const specialNumbers = '0123456789';
    const specialAlphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let password = '';

    // Add one special symbol, one special number, and one special alphabet character
    password += specialSymbols[Math.floor(Math.random() * specialSymbols.length)];
    password += specialNumbers[Math.floor(Math.random() * specialNumbers.length)];
    password += specialAlphabets[Math.floor(Math.random() * specialAlphabets.length)];

    // Fill the remaining characters with a combination of symbols, numbers, and alphabets
    for (let i = 3; i < 14; i++) {
        const randomType = Math.floor(Math.random() * 3);
        switch (randomType) {
            case 0:
                password += specialSymbols[Math.floor(Math.random() * specialSymbols.length)];
                break;
            case 1:
                password += specialNumbers[Math.floor(Math.random() * specialNumbers.length)];
                break;
            case 2:
                password += specialAlphabets[Math.floor(Math.random() * specialAlphabets.length)];
                break;
            default:
                // This case is included for completeness, although it's unlikely to be reached
                password += specialAlphabets[Math.floor(Math.random() * specialAlphabets.length)];
                break;
        }
    }

    // Shuffle the password
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    return password;
}
