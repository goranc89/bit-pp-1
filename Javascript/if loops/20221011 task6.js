var them = 6
var me = 56
if (them>me) {
    result = 'You are ' +  (them - me) + ' years older than me.'
}
else if (them==me) {
    result = 'You are the same age as me.'
}
else {
    result = 'You are ' +  (me - them) + ' years younger than me.'
}
console.log(result)