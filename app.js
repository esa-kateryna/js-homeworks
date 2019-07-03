//Задача 1
function multiply() {
    var s = 1;
    if (arguments === undefined) {
        return 0;
    } else {
        for(var i=0; i<arguments.length; i++) s *=arguments[i];
        return s
    }
}
