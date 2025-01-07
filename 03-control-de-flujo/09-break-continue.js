let i = 0;

while (i < 6) {
    i++;
    console.log(i);
    if (i === 2) {
        continue;
    }
    else if (i === 5) {
        break;
    }
}