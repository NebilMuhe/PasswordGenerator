

function passwordGenerator(length, { ...choices }) {
    let alphabets = "";
    let { uppercase, lowercase, number, symbol } = choices;

    let uppercaseLetters = "QWERTYUIOPASDFGHJKLMNBVCXZ";
    let lowercaseLetters = "qwertyuioplkjhgfdsazxcvbnm";
    let numbers = "1234567890";
    let symbols = "`~!@#$%^&*()-_=+\|]}[{'\";:/?.>,<";

    if(!uppercase && !lowercase && !number && !symbol)
        return
    if (uppercase)
        alphabets += uppercaseLetters;
    if (lowercase)
        alphabets += lowercaseLetters;
    if (number)
        alphabets += numbers;
    if (symbol)
        alphabets += symbols;

    let password = "";

    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * alphabets.length);

        let symbol = alphabets[index];
        password += symbol;
    }


    return password;
}



export default passwordGenerator;



