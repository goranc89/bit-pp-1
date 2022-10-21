//i really want to believe that there's a better way to do this :D
var a = 30
var b = 45
if (a>=91 && a<=100) {
    if (b>=91 && b<=100) {
        result = 'A A'}
        if (b>=81 && b<=90) {
            result = 'A B'}
            if (b>=71 && b<=80) {
                result = 'A C'}
                if (b>=61 && b<=70) {
                    result = 'A D'}
                    if (b>=51 && b<=60) {
                        result = 'A E'}
                        if (b<51) {
                            result = 'A failed'}
    }
else if (a>=81 && a<=90) {
    if (b>=91 && b<=100) {
        result = 'B A'}
        if (b>=81 && b<=90) {
            result = 'B B'}
            if (b>=71 && b<=80) {
                result = 'B C'}
                if (b>=61 && b<=70) {
                    result = 'B D'}
                    if (b>=51 && b<=60) {
                        result = 'B E'}
                        if (b<51) {
                            result = 'B failed'}
    }
else if (a>=71 && a<=80) {
        if (b>=91 && b<=100) {
            result = 'C A'}
            if (b>=81 && b<=90) {
                result = 'C B'}
                if (b>=71 && b<=80) {
                    result = 'C C'}
                    if (b>=61 && b<=70) {
                        result = 'C D'}
                        if (b>=51 && b<=60) {
                            result = 'C E'}
                            if (b<51) {
                                result = 'C failed'}
                        }
else if (a>=61 && a<=70) {
        if (b>=91 && b<=100) {
            result = 'D A'}
            if (b>=81 && b<=90) {
                result = 'D B'}
                if (b>=71 && b<=80) {
                    result = 'D C'}
                    if (b>=61 && b<=70) {
                        result = 'D D'}
                        if (b>=51 && b<=60) {
                            result = 'D E'}
                            if (b<51) {
                                result = 'D failed'}
                            }
else if (a>=51 && a<=60) {
        if (b>=91 && b<=100) {
            result = 'E A'}
            if (b>=81 && b<=90) {
                result = 'E B'}
                if (b>=71 && b<=80) {
                    result = 'E C'}
                    if (b>=61 && b<=70) {
                        result = 'E D'}
                        if (b>=51 && b<=60) {
                            result = 'E E'}
                            if (b<51) {
                                result = 'E failed'}
                            }
else if (a<=50) {
    if (b>=91 && b<=100) {
        result = 'failed A'}
        if (b>=81 && b<=90) {
            result = 'failed B'}
            if (b>=71 && b<=80) {
                result = 'failed C'}
                if (b>=61 && b<=70) {
                    result = 'failed D'}
                    if (b>=51 && b<=60) {
                        result = 'failed E'}
                        if (b<51) {
                            result = 'failed failed'}
                    }
else {result='failed failed'}
console.log(result)