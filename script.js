let text = "AcoDQeYjrSlByFtyzQhvjoCNVpsaLeQPtGUjQHVzbgabJuAiMHDxwfkNvCwIGmZCTInlSiKvRKxAGzJsgmPeUBAReDzmLzqgJgrXobzfoWiwvRPdFgJzIkSoJscWtVdEbuIRYhXOdHkayBdFIMHSyzIJtmGMhJTiFBaDIzrngCngdSnngUHFWpQpCwElHxunYWsiXKvFOkntcAHiXopTgIKkeovoLrBlPTtMfqTTAgnejUPgKeBsolCtAAjNtKBjf";
const suffix = "@aoop.com.br";

function findPrefix(number) {
    let n1 = 0, n2 = 1, nextTerm;
    let counter = 0;
    let prefix = "";

    nextTerm = n1 + n2;
    
    while (nextTerm <= number && counter < 10) {
        counter++;
        prefix += text[nextTerm];

        if (counter == 5) prefix += ".";
    
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
    }

    return prefix;
}

function main() {
    text = text.toLowerCase();

    const prefix = findPrefix(text.length - 1);
    console.log("Recruiter email: " + prefix + suffix);
}

main();